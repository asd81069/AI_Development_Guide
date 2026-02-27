/* =============================================
   main.js — 畫面渲染與互動邏輯
   ============================================= */

(function () {
  'use strict';

  /* ---------- 工具函式 ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];

  /* ---------- 進度條 ---------- */
  function initProgressBar() {
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    document.body.prepend(bar);
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = Math.min(pct, 100) + '%';
    });
  }

  /* ---------- Lightbox ---------- */
  function initLightbox() {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    const img = document.createElement('img');
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    function open(src) {
      img.src = src;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    overlay.addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    // 委派事件，讓動態注入的圖片也能 trigger lightbox
    document.addEventListener('click', e => {
      const wrap = e.target.closest('.screenshot-wrap');
      if (wrap) {
        const imgEl = wrap.querySelector('img');
        if (imgEl) open(imgEl.src);
      }
    });
  }

  /* ---------- 渲染子步驟 ---------- */
  function renderStep(s, i) {
    const instItems = (s.instructions || [])
      .map((inst, idx) => `
        <li class="inst-item">
          <span class="inst-num">${idx + 1}</span>
          <span>${inst}</span>
        </li>`)
      .join('');

    const screenshotHtml = s.screenshot ? `
      <div class="screenshot-wrap">
        <img src="${s.screenshot}" alt="${s.title}" loading="lazy"
             onerror="this.parentElement.style.display='none'">
        <div class="screenshot-caption">${s.caption || s.title}</div>
      </div>` : '';

    const calloutHtml = s.callout ? `
      <div class="callout ${s.callout.type}">
        <span class="callout-icon">${s.callout.icon}</span>
        <div>${s.callout.text}</div>
      </div>` : '';

    return `
      <div class="tut-step" id="step-${i}">
        <div class="tut-step-head">
          <span class="badge">${s.badge}</span>
          <span class="tut-step-title">${s.title}</span>
        </div>
        ${screenshotHtml}
        <ul class="inst-list">${instItems}</ul>
        ${calloutHtml}
      </div>`;
  }

  /* ---------- 渲染頁面 ---------- */
  function renderPage(page) {
    let body = '';

    if (page.html) {
      body = page.html;
    }

    if (page.steps && page.steps.length) {
      body += page.steps.map((s, i) => renderStep(s, i)).join('');
    }

    return `
      <section id="${page.id}" class="page-section">
        <div class="section-head">
          <h2 class="section-title">${page.icon} ${page.title}</h2>
          <p class="section-desc">${page.desc}</p>
        </div>
        ${body}
      </section>`;
  }

  /* ---------- 初始化頁面 ---------- */
  function buildSite() {
    const pages = window.HANDBOOK_PAGES || [];
    if (!pages.length) {
      console.error('HANDBOOK_PAGES 未定義，請確認 content.js 已載入。');
      return;
    }

    /* --- Workflow Banner --- */
    const banner = $('#workflow-banner');
    if (banner) {
      banner.innerHTML = pages.map((p, i) => {
        const arrow = i < pages.length - 1 ? '<span class="wf-arrow">→</span>' : '';
        // 跳過非主步驟（如 overview）
        if (p.id === 'overview') {
          return `<div class="wf-step" data-page="${p.id}" title="${p.title}">
            <div class="wf-num">✦</div>
            <div class="wf-label">${p.label}</div>
          </div>${arrow}`;
        }
        const num = i; // 1-based for steps
        return `<div class="wf-step" data-page="${p.id}" title="${p.title}">
          <div class="wf-num">${num}</div>
          <div class="wf-label">${p.label.replace(/Step \d+ \| /, '')}</div>
          <div class="wf-sub">${p.icon}</div>
        </div>${arrow}`;
      }).join('');
    }

    /* --- Nav Buttons --- */
    const nav = $('#site-nav-inner');
    if (nav) {
      nav.innerHTML = pages.map((p, i) =>
        `<button class="nav-btn${i === 0 ? ' active' : ''}" data-page="${p.id}">${p.label}</button>`
      ).join('');
    }

    /* --- Page Sections --- */
    const main = $('#main-content');
    if (main) {
      main.innerHTML = pages.map((p, i) => renderPage(p)).join('');
      // 啟用第一頁
      const first = main.querySelector('.page-section');
      if (first) first.classList.add('active');
    }

    /* --- Tab 切換邏輯 --- */
    function switchPage(id) {
      // 關閉所有
      $$('.page-section').forEach(s => s.classList.remove('active'));
      $$('.nav-btn').forEach(b => b.classList.remove('active'));
      $$('.wf-step').forEach(b => b.style.fontWeight = '');

      // 開啟目標
      const target = $(`#${id}`);
      if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      const btn = $(`.nav-btn[data-page="${id}"]`);
      if (btn) btn.classList.add('active');
    }

    /* 導覽列按鈕點擊 */
    document.addEventListener('click', e => {
      const btn = e.target.closest('.nav-btn');
      if (btn) switchPage(btn.dataset.page);

      const step = e.target.closest('.wf-step');
      if (step) switchPage(step.dataset.page);
    });
  }

  /* ---------- DOM Ready ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initProgressBar();
      initLightbox();
      buildSite();
    });
  } else {
    initProgressBar();
    initLightbox();
    buildSite();
  }
})();
