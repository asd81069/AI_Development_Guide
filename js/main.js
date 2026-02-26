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
  const pageTitle = $("#pageTitle");
  const pageMeta = $("#pageMeta");
  const content = $("#content");
  const mdBox = $("#mdBox");
  const mdCode = $("#mdCode");

  const tabRead = $("#tabRead");
  const tabMd = $("#tabMd");
  const btnCopyMd = $("#btnCopyMd");

  const btnMenu = $("#btnMenu");
  const sidebar = $("#sidebar");
  const searchInput = $("#searchInput");

  const PAGES = Array.isArray(window.HANDBOOK_PAGES) ? window.HANDBOOK_PAGES : [];

  // --- Guards (fail loudly, not silently) ---
  if (!PAGES.length) {
    console.error("HANDBOOK_PAGES is empty. Did ./js/content.js load?");
  }

  // --- Helpers ---
  function normalizeRoute(route) {
    if (!route) return "/";
    // Accept: "/", "/figma-ai", "figma-ai"
    let r = String(route).trim();
    if (!r.startsWith("/")) r = "/" + r;
    if (r.length > 1 && r.endsWith("/")) r = r.slice(0, -1);
    return r;
  }

  function getRouteFromHash() {
    // We use hash routing so GitHub Pages refresh won't 404.
    // Supported:
    //   "" -> "/"
    //   "#/" -> "/"
    //   "#/figma-ai" -> "/figma-ai"
    const h = window.location.hash || "";
    if (!h) return "/";
    if (h === "#" || h === "#/" || h === "#/") return "/";
    if (h.startsWith("#/")) return normalizeRoute(h.slice(1));
    // fallback: treat "#something" as route
    if (h.startsWith("#")) return normalizeRoute(h.slice(1));
    return "/";
  }

  function findPageByRoute(route) {
    const r = normalizeRoute(route);
    // match by route first
    let page = PAGES.find((p) => normalizeRoute(p.route) === r);
    if (page) return page;

    // allow id-based route: /<id>
    const maybeId = r.replace(/^\//, "");
    page = PAGES.find((p) => p.id === maybeId);
    if (page) return page;

    // home fallback
    return PAGES.find((p) => normalizeRoute(p.route) === "/") || PAGES[0];
  }

  function setActiveNav(route) {
    const r = normalizeRoute(route);
    navList?.querySelectorAll("a.nav__link").forEach((a) => {
      const rr = normalizeRoute(a.getAttribute("data-route"));
      a.classList.toggle("is-active", rr === r);
      a.setAttribute("aria-current", rr === r ? "page" : "false");
    });
  }

  function closeSidebarOnMobile() {
    // if sidebar is open on small screens, close after navigation
    // style.css may implement sidebar open via .is-open; be defensive.
    sidebar?.classList.remove("is-open");
    btnMenu?.setAttribute("aria-expanded", "false");
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // --- Progress (lightweight, optional) ---
  const LS_KEY = "handbook:visited";
  function loadVisited() {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY) || "[]");
    } catch {
      return [];
    }
  }
  function saveVisited(arr) {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(arr.slice(0, 500)));
    } catch {}
  }
  function markVisited(route) {
    const r = normalizeRoute(route);
    const visited = loadVisited();
    if (!visited.includes(r)) {
      visited.push(r);
      saveVisited(visited);
    }
    // add visited style marker
    navList?.querySelectorAll("a.nav__link").forEach((a) => {
      const rr = normalizeRoute(a.getAttribute("data-route"));
      a.classList.toggle("is-visited", visited.includes(rr));
    });
  }

  // --- Render ---
  function render(route) {
    const page = findPageByRoute(route);
    if (!page) return;

    const r = normalizeRoute(page.route);

    pageTitle.textContent = page.title || page.nav || "";
    pageMeta.textContent = page.meta || "";

    // Reading view
    content.innerHTML = page.html || `<p>${escapeHtml(page.md || "")}</p>`;

    // Markdown view
    mdCode.textContent = page.md || "";

    setActiveNav(r);
    markVisited(r);

    // Default to reading tab
    setTab("read");

    // scroll to top when route changes
    const mainEl = $("#main");
    if (mainEl) mainEl.scrollTo ? mainEl.scrollTo({ top: 0 }) : (mainEl.scrollTop = 0);

    // Update document title for shareability
    document.title = (page.title ? page.title + "｜" : "") + "互動式學習手冊";
  }

  // --- Tabs ---
  function setTab(which) {
    const isMd = which === "md";

    tabRead?.classList.toggle("is-active", !isMd);
    tabRead?.setAttribute("aria-selected", String(!isMd));

    tabMd?.classList.toggle("is-active", isMd);
    tabMd?.setAttribute("aria-selected", String(isMd));

    mdBox.hidden = !isMd;
    content.hidden = isMd;
  }

  // --- Nav build ---
  function buildNav() {
    if (!navList) return;

    const visited = loadVisited();

    navList.innerHTML = PAGES.map((p) => {
      const r = normalizeRoute(p.route);
      const href = r === "/" ? "#/" : `#${r}`; // because router expects '#/xxx'
      const label = p.nav || p.title || r;
      const visitedClass = visited.includes(r) ? " is-visited" : "";
      return `
        <li class="nav__item">
          <a class="nav__link${visitedClass}" href="${href}" data-route="${r}">${escapeHtml(label)}</a>
        </li>
      `;
    }).join("");
  }

  // --- Search (title only) ---
  function applySearch(q) {
    const query = (q || "").trim().toLowerCase();
    navList?.querySelectorAll("a.nav__link").forEach((a) => {
      const text = (a.textContent || "").toLowerCase();
      const hit = !query || text.includes(query);
      a.closest("li")?.classList.toggle("is-hidden", !hit);
    });
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
        btnCopyMd.textContent = "已複製";
        setTimeout(() => (btnCopyMd.textContent = "複製 Markdown"), 900);
      } catch (e) {
        // fallback
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        btnCopyMd.textContent = "已複製";
        setTimeout(() => (btnCopyMd.textContent = "複製 Markdown"), 900);
      }
    });

    btnMenu?.addEventListener("click", () => {
      const isOpen = sidebar?.classList.toggle("is-open");
      btnMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    searchInput?.addEventListener("input", (e) => {
      applySearch(e.target.value);
    });

    // Close sidebar when clicking outside (mobile UX)
    document.addEventListener("click", (e) => {
      if (!sidebar || !btnMenu) return;
      const target = e.target;
      const clickedInsideSidebar = sidebar.contains(target);
      const clickedMenuBtn = btnMenu.contains(target);
      if (!clickedInsideSidebar && !clickedMenuBtn) {
        sidebar.classList.remove("is-open");
        btnMenu.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Boot ---
  buildNav();
  wireEvents();
  render(getRouteFromHash());
})();
