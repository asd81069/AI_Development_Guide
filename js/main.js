/*
  main.js
  - Router + UI wiring for the handbook static site
  - No build step. Works on GitHub Pages / Cloudflare Pages / any static host.
  - Depends on window.HANDBOOK_PAGES from ./content.js
*/

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  const navList = $("#navList");
  const content = $("#content");
  const mdBox = $("#mdBox");
  const mdCode = $("#mdCode");

  const tabRead = $("#tabRead");
  const tabMd = $("#tabMd");
  const btnCopyMd = $("#btnCopyMd");
  const btnPrint = $("#btnPrint");

  const btnMenu = $("#btnMenu");
  const sidebar = $("#sidebar");

  const searchInput = $("#searchInput");

  const progressBar = $("#progressBar");
  const progressText = $("#progressText");

  const PAGES = Array.isArray(window.HANDBOOK_PAGES) ? window.HANDBOOK_PAGES : [];
  const visiblePages = PAGES.filter((p) => p && p.navVisible !== false);

  if (!PAGES.length) {
    console.error("HANDBOOK_PAGES is empty. Did ./js/content.js load?");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeRoute(route) {
    if (!route) return "/";
    let r = String(route).trim();
    if (!r.startsWith("/")) r = "/" + r;
    if (r.length > 1 && r.endsWith("/")) r = r.slice(0, -1);
    return r;
  }

  function getRouteFromHash() {
    const h = window.location.hash || "";
    if (!h || h === "#" || h === "#/" || h === "#/") return "/";
    if (h.startsWith("#/")) return normalizeRoute(h.slice(1));
    if (h.startsWith("#")) return normalizeRoute(h.slice(1));
    return "/";
  }

  function findPageByRoute(route) {
    const r = normalizeRoute(route);
    let page = PAGES.find((p) => normalizeRoute(p.route) === r);
    if (page) return page;

    const maybeId = r.replace(/^\//, "");
    page = PAGES.find((p) => p.id === maybeId);
    if (page) return page;

    return PAGES.find((p) => normalizeRoute(p.route) === "/") || PAGES[0];
  }

  // --- Progress tracking ---
  const LS_KEY = "handbook:visited";
  function loadVisited() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || "[]"); }
    catch { return []; }
  }
  function saveVisited(arr) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(arr.slice(0, 800))); }
    catch {}
  }
  function updateProgress() {
    const visited = loadVisited();
    const total = Math.max(visiblePages.length, 1);
    const done = visited.filter((r) => visiblePages.some((p) => normalizeRoute(p.route) === normalizeRoute(r))).length;
    const pct = Math.min(100, Math.round((done / total) * 100));

    if (progressBar) progressBar.style.width = pct + "%";
    if (progressText) progressText.textContent = `學習進度：${pct}%`;
  }
  function markVisited(route) {
    const r = normalizeRoute(route);
    const visited = loadVisited();
    if (!visited.includes(r)) {
      visited.push(r);
      saveVisited(visited);
    }
    updateProgress();
  }

  // --- Tabs ---
  function setTab(which) {
    const isMd = which === "md";

    tabRead?.classList.toggle("active", !isMd);
    tabRead?.setAttribute("aria-selected", String(!isMd));

    tabMd?.classList.toggle("active", isMd);
    tabMd?.setAttribute("aria-selected", String(isMd));

    mdBox.hidden = !isMd;
    content.hidden = isMd;
  }

  // --- Sidebar (mobile) ---
  function closeSidebarOnMobile() {
    sidebar?.classList.remove("active");
    btnMenu?.setAttribute("aria-expanded", "false");
  }

  // --- Icons mapping (simple, no external deps) ---
  function iconForRoute(route) {
    const r = normalizeRoute(route);
    if (r === "/") return "🏠";
    if (r.includes("figma")) return "✏️";
    if (r === "/v0" || r.includes("/v0")) return "</>";
    if (r.includes("claude")) return "🤖";
    if (r.includes("vercel")) return "☁️";
    if (r.includes("cowork")) return "👥";
    if (r.includes("pricing") || r.includes("cost")) return "💰";
    if (r.includes("troubleshooting")) return "🛠️";
    if (r.includes("checklist")) return "✅";
    return "📄";
  }

  // --- Nav ---
  function buildNav() {
    if (!navList) return;

    navList.innerHTML = visiblePages.map((p) => {
      const r = normalizeRoute(p.route);
      const href = r === "/" ? "#/" : `#${r}`;
      const label = p.nav || p.title || r;
      const icon = iconForRoute(r);

      return `
        <a class="nav-item" href="${href}" data-route="${r}">
          <span class="nav-icon" aria-hidden="true">${escapeHtml(icon)}</span>
          <span>${escapeHtml(label)}</span>
        </a>
      `;
    }).join("");

    updateProgress();
  }

  function setActiveNav(route) {
    const r = normalizeRoute(route);
    navList?.querySelectorAll("a.nav-item").forEach((a) => {
      const rr = normalizeRoute(a.getAttribute("data-route"));
      a.classList.toggle("active", rr === r);
      a.setAttribute("aria-current", rr === r ? "page" : "false");
    });
  }

  
  function applySearch(q) {
    const query = (q || "").trim().toLowerCase();
    navList?.querySelectorAll("a.nav-item").forEach((a) => {
      const text = (a.textContent || "").toLowerCase();
      const hit = !query || text.includes(query);
      a.classList.toggle("is-hidden", !hit);
    });
  }

// --- Render ---
  function render(route) {
    const page = findPageByRoute(route);
    if (!page) return;

    const r = normalizeRoute(page.route);

    // Make it look like the reference UI: always render H1 title first
    const title = page.title || page.nav || "";
    const meta = page.meta ? `<p class="page-lead">${escapeHtml(page.meta)}</p>` : "";

    content.innerHTML = `
      <h1>${escapeHtml(title)}</h1>
      ${meta}
      ${page.html || ""}
    `;

    mdCode.textContent = page.md || "";

    document.title = (title ? title + "｜" : "") + "零基礎 AI 開發手冊";

    setActiveNav(r);
    markVisited(r);
    setTab("read");

    const mainEl = $("#main");
    if (mainEl) mainEl.scrollTo ? mainEl.scrollTo({ top: 0 }) : (mainEl.scrollTop = 0);
  }

  // --- Events ---
  function wireEvents() {
    window.addEventListener("hashchange", () => {
      render(getRouteFromHash());
      closeSidebarOnMobile();
    });

    tabRead?.addEventListener("click", () => setTab("read"));
    tabMd?.addEventListener("click", () => setTab("md"));

    btnCopyMd?.addEventListener("click", async () => {
      const text = mdCode?.textContent || "";
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        const old = btnCopyMd.textContent;
        btnCopyMd.textContent = "已複製";
        setTimeout(() => (btnCopyMd.textContent = old), 900);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        const old = btnCopyMd.textContent;
        btnCopyMd.textContent = "已複製";
        setTimeout(() => (btnCopyMd.textContent = old), 900);
      }
    });

    btnPrint?.addEventListener("click", () => window.print());

    btnMenu?.addEventListener("click", () => {
      const isOpen = sidebar?.classList.toggle("active");
      btnMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });


    // Search: filter sidebar items
    searchInput?.addEventListener("input", (e) => {
      applySearch(e.target.value);
    });

    // Enter: jump to first matched item
    searchInput?.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const first = navList?.querySelector('a.nav-item:not(.is-hidden)');
      if (first) first.click();
    });
    document.addEventListener("click", (e) => {
      if (!sidebar || !btnMenu) return;
      const target = e.target;
      const clickedInsideSidebar = sidebar.contains(target);
      const clickedMenuBtn = btnMenu.contains(target);
      if (!clickedInsideSidebar && !clickedMenuBtn) {
        sidebar.classList.remove("active");
        btnMenu.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Boot ---
  buildNav();
  wireEvents();
  render(getRouteFromHash());
  updateProgress();
})();
