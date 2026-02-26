// Content is intentionally plain JS (no build step) so you can host as a static site on GitHub Pages.
// Each page provides: title, meta, html (reading view), md (markdown original).

window.HANDBOOK_PAGES = [
  {
    id: "home",
    route: "/",
    nav: "\u958b\u59cb\u4e4b\u524d",
    title: "\u5f9e 0 \u958b\u59cb\uff1aFigma AI \u2192 v0 \u2192 Claude Code \u2192 Vercel \u2192 Cowork\uff08\u7167\u9806\u5e8f\u505a\u5c31\u597d\uff09",
    meta: "\u9019\u4efd\u624b\u518a\u53ea\u6559\u300c\u600e\u9ebc\u9ede\u3001\u600e\u9ebc\u505a\u3001\u505a\u5230\u80fd\u4e0a\u7dda\u300d\u3002\u4f60\u6703\u505a\u51fa\u4e00\u500b\u53ef\u90e8\u7f72\u7684 Next.js \u5c08\u6848\uff0c\u4e26\u5728 Vercel \u4e0a\u7dda\uff0c\u6700\u5f8c\u7528 Cowork \u81ea\u52d5\u5316\u4f8b\u884c\u4efb\u52d9\u3002",
    navVisible: true,
    html: `
<div class="callout warn"><strong>先講清楚（不然你會卡很久）</strong><br>
1) 你不是在學「工具」，你是在做一條<strong>可重複的交付流水線</strong>。<br>
2) 任何一步跳過「版本控管（GitHub）」或「可部署（Vercel）」都會讓你最後收拾爛攤子。<br>
3) AI 會一本正經胡說八道，你要用「可驗證的檢查點」壓住它。</div>

<h2 id="goal">你完成後會得到什麼？</h2>
<ul>
  <li>一個 GitHub repo（可分享、可回溯、可合作）</li>
  <li>一個可跑的 Next.js 專案（由 v0 起手，Claude Code 補齊）</li>
  <li>一個 Vercel Production URL（真的上線）</li>
  <li>一套 Cowork 例行任務（例如：每日整理待辦、每週彙整進度）</li>
</ul>

<h2 id="prereq">開始前準備（5 分鐘）</h2>
<ol>
  <li><strong>帳號</strong>：Figma、GitHub、Vercel、Claude（Cowork/Claude Code 依你的方案而定）。</li>
  <li><strong>一個產品題目</strong>：建議用「一般商品電商」或「預約系統」這種流程清楚的題目，因為最容易驗收。</li>
  <li><strong>一個資料夾</strong>：準備放你的專案（之後 Claude Code 會在這裡跑）。</li>
</ol>

<h2 id="path">你要照這個順序做（別自作聰明）</h2>
<ol>
  <li><a href="#/figma-ai">Step 1：Figma AI 設計</a>（把 UI 切成可轉碼的 Frame）</li>
  <li><a href="#/v0">Step 2：v0 生成程式碼</a>（把 Frame 變成可跑的 UI / 流程頁）</li>
  <li><a href="#/claude-code">Step 3：Claude Code 開發</a>（補齊資料流、商業邏輯、修 bug）</li>
  <li><a href="#/vercel-deploy">Step 4：Vercel 部署上線</a>（連 GitHub，自動部署，拿到公開網址）</li>
  <li><a href="#/cowork">Step 5：Claude Cowork</a>（把例行任務自動化，不要每次都手動整理）</li>
</ol>

<div class="callout ok"><strong>你的第一個檢查點（Checkpoint #1）</strong><br>
做完 Step 2，你必須能在本機看到 UI 跑起來（不是截圖）。做不到就不要往下。</div>

<h2 id="notes">費用與注意事項</h2>
<p>工具的限制、風險、花費與安全提醒，集中放在 <a href="#/publish-this-handbook">費用與注意事項</a>。</p>
    `,
    md: `
# 從 0 開始：Figma AI → v0 → Claude Code → Vercel → Cowork

## 你完成後會得到什麼？
- GitHub repo（可分享、可回溯、可合作）
- 可跑的 Next.js 專案（v0 起手、Claude Code 補齊）
- Vercel Production URL（真的上線）
- Cowork 例行任務（自動整理/彙整）

## 開始前準備
1. 帳號：Figma / GitHub / Vercel / Claude
2. 題目：流程清楚的產品（一般商品電商、預約系統等）
3. 一個專案資料夾

## 順序（照做）
1. Step 1：Figma AI 設計（Frame 切對）
2. Step 2：v0 生成程式碼（跑得起來）
3. Step 3：Claude Code 開發（補邏輯、修 bug）
4. Step 4：Vercel 部署上線（GitHub 連動）
5. Step 5：Claude Cowork（例行任務自動化）

Checkpoint #1：做完 Step 2，你必須能在本機看到 UI 跑起來。
    `
  },

  {
    id: "figma-ai",
    route: "/figma-ai",
    nav: "Step 1\uff5cFigma AI \u8a2d\u8a08",
    title: "Step 1\uff5cFigma AI\uff1a\u7528 AI \u8d77\u8349 UI\uff0c\u4f46\u4f60\u8981\u8ca0\u8cac\u5207 Frame",
    meta: "\u76ee\u6a19\uff1a\u505a\u51fa\u300c\u53ef\u8f49\u78bc\u300d\u7684\u5143\u4ef6 Frames\u3002Frame \u5207\u932f\uff0c\u5f8c\u9762 v0 \u53ea\u6703\u7522\u751f\u4e00\u5806\u4e0d\u53ef\u7dad\u8b77\u7684\u5783\u573e\u3002",
    navVisible: true,
    html: `
<h2 id="why">你在這一步到底要產出什麼？</h2>
<ul>
  <li>一個 Figma 檔案</li>
  <li>裡面有多個<strong>小而清楚</strong>的 Frames（元件/區塊），而不是整頁塞一個 Frame</li>
  <li>每個 Frame 命名清楚（例如：ProductCard / CheckoutAddressForm）</li>
</ul>

<div class="callout warn"><strong>常見錯誤</strong><br>
你用 Figma AI 生出一整頁，然後不切 Frame 就丟給 v0。結果：v0 會「看起來像」成功，但你之後改任何一個按鈕都會爆。</div>

<h2 id="click">操作步驟（照點）</h2>
<ol>
  <li>打開 <strong>Figma Design</strong>，進到你的檔案。</li>
  <li>在上方工具列找到 <strong>Actions</strong>（Figma 的 AI 工具入口）。</li>
  <li>用 AI 先做 <strong>First Draft</strong> / 產生初稿（讓你不用從空白畫）。</li>
  <li>把初稿拆成多個 Frames：卡片、表單、清單列項目、頁面區塊。</li>
  <li>每個 Frame 都要能「單獨被理解」：不要跨 frame 互相依賴。</li>
</ol>

<figure class="figure">
  <img src="./assets/step1-figma-ai-actions.png" alt="Figma Design 的 Actions（AI 工具入口）" loading="lazy" />
  <figcaption>參考截圖：Figma Design 透過 Actions 進入 AI 工具（官方說明頁）</figcaption>
</figure>

<h2 id="checkpoint">Checkpoint #2（你要驗收）</h2>
<ul>
  <li>你至少有 6～10 個 Frames（元件級）</li>
  <li>Frames 命名一致，不要叫「Frame 123」</li>
  <li>每個 Frame 的內容「只有一個職責」（SRP）</li>
</ul>

<p class="page-lead">下一步：把這些 Frames 用 v0 的 Figma 匯入功能轉成可跑的 UI。<a href="#/v0">前往 Step 2</a></p>

<div class="callout ok">Figma AI 工具在 Figma Design 可透過 Actions 存取（並且強調 AI 可能不準，要自行驗證）。[Source](https://help.figma.com/hc/en-us/articles/23870272542231-Use-AI-tools-in-Figma-Design)</div>
    `,
    md: `
# Step 1｜Figma AI：用 AI 起草 UI，但你要負責切 Frame

## 產出
- 1 個 Figma 檔
- 多個小而清楚的 Frames（元件/區塊）

## 操作步驟
1. 打開 Figma Design 檔案
2. 上方工具列 → Actions（AI 工具入口）
3. 先用 AI 做 First Draft / 初稿
4. 把初稿拆成多個 Frames（卡片/表單/列項目/區塊）

![Figma Actions](./assets/step1-figma-ai-actions.png)

## Checkpoint #2
- 至少 6～10 個 Frames
- 命名一致
- 每個 Frame 只有一個職責

Source: https://help.figma.com/hc/en-us/articles/23870272542231-Use-AI-tools-in-Figma-Design
    `
  },

  {
    id: "v0",
    route: "/v0",
    nav: "Step 2\uff5cv0 \u751f\u6210\u7a0b\u5f0f\u78bc",
    title: "Step 2\uff5cv0\uff1a\u628a Figma Frames \u8b8a\u6210\u53ef\u8dd1\u7684 Next.js UI\uff08\u5148\u5143\u4ef6\u518d\u6d41\u7a0b\uff09",
    meta: "\u76ee\u6a19\uff1a\u7528 v0 \u5148\u751f\u6210\u5143\u4ef6\uff0c\u518d\u7d44\u6210\u9801\u9762\uff0c\u6700\u5f8c\u8b93\u5c08\u6848\u5728\u672c\u6a5f\u8dd1\u8d77\u4f86\u3002",
    navVisible: true,
    html: `
<h2 id="import">2-1. 把 Figma Frame 匯入 v0</h2>
<ol>
  <li>打開 v0（v0.app）。</li>
  <li>在對話框下方點 <strong>附件（Attachment）</strong> 圖示。</li>
  <li>選擇 <strong>Figma</strong>，貼上你的 Figma Frame 連結。</li>
  <li>先匯入「單一元件 Frame」（例如 ProductCard），不要一口氣整頁。</li>
</ol>

<figure class="figure">
  <img src="./assets/step2-v0-figma-import.png" alt="v0 附件選單中的 Figma 匯入" loading="lazy" />
  <figcaption>參考截圖：v0 的附件功能可直接貼 Figma 連結（官方文件截圖）</figcaption>
</figure>

<div class="callout ok">v0 的 Figma integration 會同時分析視覺布局與 design tokens，通常比截圖更準。[Source](https://v0.app/docs/figma)</div>

<h2 id="assemble">2-2. 先元件、再組頁、再串流程</h2>
<ul>
  <li>先讓每個元件「單獨正確」：卡片、表單、清單列、按鈕狀態。</li>
  <li>再把元件組成頁面：列表頁、詳情頁、結帳頁、後台頁。</li>
  <li>最後才串流程：從列表 → 詳情 → 加購物車 → 結帳。</li>
</ul>

<h2 id="run">2-3. 本機跑起來（Checkpoint #1）</h2>
<ol>
  <li>把 v0 產生的專案同步到 GitHub（你之後部署 Vercel 一定需要）。</li>
  <li>在本機 clone 下來。</li>
  <li>依照專案 README / v0 指示：安裝依賴、啟動 dev server。</li>
  <li>你必須在瀏覽器看到 UI 能點、能切頁，才算過關。</li>
</ol>

<div class="callout warn"><strong>卡住時你要先做的事</strong><br>
不要急著問 Claude Code。你先確認：Node 版本、依賴是否安裝完成、console 有沒有報錯。</div>

<p class="page-lead">下一步：用 Claude Code 補齊資料流/邏輯/bugfix。<a href="#/claude-code">前往 Step 3</a></p>
    `,
    md: `
# Step 2｜v0：Figma → 可跑的 Next.js UI

## 2-1 匯入 Figma
1. 打開 v0
2. 點附件（Attachment）
3. 選 Figma → 貼 Frame 連結
4. 先匯入單一元件 Frame

![v0 Figma import](./assets/step2-v0-figma-import.png)

v0 會分析 layout 與 design tokens，通常比截圖更準。
Source: https://v0.app/docs/figma

## 2-2 先元件、再頁面、再流程

## 2-3 本機跑起來（Checkpoint #1）
- 同步 GitHub
- clone
- 安裝依賴
- dev server 跑起來
    `
  },

  {
    id: "claude-code",
    route: "/claude-code",
    nav: "Step 3\uff5cClaude Code \u958b\u767c",
    title: "Step 3\uff5cClaude Code\uff1a\u7528\u7d42\u7aef\u6a5f\u628a\u300c\u7f3a\u7684\u529f\u80fd\u300d\u88dc\u9f4a\uff08\u4e0d\u8981\u62ff\u5b83\u6539\u5c0f\u5b57\u9ad4\uff09",
    meta: "\u76ee\u6a19\uff1a\u8b93\u5c08\u6848\u53ef\u6e2c\u8a66\u3001\u53ef\u90e8\u7f72\u3002\u7528 Claude Code \u505a\u8cc7\u6599\u6a21\u578b\u3001API\u3001\u932f\u8aa4\u4fee\u5fa9\u3001\u6e2c\u8a66\u8207 build \u4fee\u6b63\u3002",
    navVisible: true,
    html: `
<div class="callout warn"><strong>直白講：Claude Code 很強，但你用錯地方就會爆</strong><br>
    你要它做：資料模型、API 路由、權限、運費/地址/訂單等邏輯、修 build。<br>
    你不要它做：微調 UI 邊距、改字體大小（那是浪費 token + 製造 diffs）。</div>

    <h2 id="install">3-1. 安裝與登入（照官方流程）</h2>
    <ol>
      <li>打開你的專案資料夾（就是 v0 專案 clone 下來的那個）。</li>
      <li>在終端機輸入 <code>claude</code> 啟動互動模式（REPL）。</li>
      <li>需要時用 <code>claude auth login</code> 完成登入。</li>
    </ol>

    <figure class="figure">
      <img src="./assets/step3-claude-code-cli.png" alt="Claude Code CLI 參考頁截圖" loading="lazy" />
      <figcaption>參考截圖：Claude Code CLI 指令（官方文件頁）</figcaption>
    </figure>

    <div class="callout ok">常用指令包含 <code>claude</code>（REPL）與 <code>claude -p</code>（一次性查詢）等。[Source](https://code.claude.com/docs/zh-TW/cli-reference)</div>

    <h2 id="prompt">3-2. 你要怎麼下指令才不會得到廢話？</h2>
    <p>你要 Claude Code 先做 <strong>repo 掃描</strong>，再提出計畫，再動手改。</p>
    <div class="callout">
      <strong>可直接貼上的指令（建議你照抄）</strong>
      <pre><code>claude "請先讀完整專案：
1) 列出 entry points（pages/app router）、資料流、API 入口
2) 找出會影響部署的 env vars
3) 用 checklist 列出缺的功能（以能上線為準）
4) 先給我修正計畫，再開始改"</code></pre>
    </div>

    <h2 id="checkpoint">Checkpoint #3（你要驗收）</h2>
    <ul>
      <li><code>npm run dev</code> 能跑</li>
      <li><code>npm run build</code> 不爆（這是 Vercel 會跑的）</li>
      <li>必要環境變數已整理（沒有就先空著，但要列清楚）</li>
    </ul>

    <p class="page-lead">下一步：把 repo 丟進 Vercel，做出第一個 Production URL。<a href="#/vercel-deploy">前往 Step 4</a></p>
    `,
    md: `
# Step 3｜Claude Code：補邏輯、修 build

## 安裝/登入
- 在專案資料夾執行 \`claude\`
- 必要時 \`claude auth login\`

![Claude Code CLI](./assets/step3-claude-code-cli.png)

常用 CLI 指令參考（官方）：https://code.claude.com/docs/zh-TW/cli-reference

## 建議指令
\`\`\`
claude "請先讀完整專案：
1) entry points / data flow / API
2) env vars
3) 缺的功能 checklist
4) 先給計畫再改"
\`\`\`

## Checkpoint #3
- dev 跑得起來
- build 不爆
- env vars 列清楚
    `
  },

  {
    id: "vercel-deploy",
    route: "/vercel-deploy",
    nav: "Step 4\uff5cVercel \u90e8\u7f72\u4e0a\u7dda",
    title: "Step 4\uff5cVercel\uff1a\u9023 GitHub \u81ea\u52d5\u90e8\u7f72\uff08\u4f60\u53ea\u8981\u63a8 code\uff09",
    meta: "\u76ee\u6a19\uff1a\u628a GitHub repo \u532f\u5165 Vercel\uff0c\u8a2d\u5b9a Production Branch\uff0c\u62ff\u5230\u516c\u958b\u7db2\u5740\u3002",
    navVisible: true,
    html: `
<h2 id="import">4-1. 匯入 GitHub Repo 到 Vercel</h2>
<ol>
  <li>登入 Vercel Dashboard。</li>
  <li>點「Add New… / New Project」之類的入口（不同 UI 版本字樣可能不同）。</li>
  <li>選擇從 <strong>GitHub</strong> 匯入，挑你的 repo。</li>
  <li>確認 Production Branch（通常是 <code>main</code>）。</li>
</ol>

<figure class="figure">
  <img src="./assets/step4-vercel-github.png" alt="Vercel for GitHub 文件截圖" loading="lazy" />
  <figcaption>參考截圖：Vercel for GitHub（官方文件頁）</figcaption>
</figure>

<div class="callout ok">Vercel for GitHub 會在每次 push 自動部署，並提供 Preview URLs（PR/branch 預覽）。[Source](https://vercel.com/docs/git/vercel-for-github)</div>

<h2 id="env">4-2. 環境變數（你一定會踩雷）</h2>
<ul>
  <li>本機能跑 ≠ 雲端能跑。Vercel 會在 build 時需要同樣的 env vars。</li>
  <li>如果 Claude Code 有整理 env var 清單，你就照著填。</li>
  <li>先讓 build 過，功能缺可以再補；build 不過你永遠上不了線。</li>
</ul>

<h2 id="checkpoint">Checkpoint #4（你要驗收）</h2>
<ul>
  <li>Vercel 有一個 Production Deployment（綠色成功）</li>
  <li>你拿到一個可公開打開的 URL</li>
  <li>你改一行字 push 到 main，Vercel 會自動重新部署</li>
</ul>

<p class="page-lead">下一步：用 Cowork 把例行任務變成自動化流程。<a href="#/cowork">前往 Step 5</a></p>
    `,
    md: `
# Step 4｜Vercel：連 GitHub 自動部署

## 4-1 匯入 repo
- Vercel Dashboard → New Project → Import from GitHub
- Production Branch 通常是 main

![Vercel for GitHub](./assets/step4-vercel-github.png)

Source: https://vercel.com/docs/git/vercel-for-github

## 4-2 環境變數
- 本機能跑不代表雲端能跑
- 先讓 build 過

## Checkpoint #4
- Production deployment 成功
- 有公開 URL
- push 後自動部署
    `
  },

  {
    id: "cowork",
    route: "/cowork",
    nav: "Step 5\uff5cClaude Cowork",
    title: "Step 5\uff5cCowork\uff1a\u628a\u300c\u91cd\u8907\u6574\u7406\u300d\u4ea4\u7d66\u5b83\u505a\uff08\u4f46\u4f60\u8981\u8a2d\u597d\u898f\u5247\uff09",
    meta: "\u76ee\u6a19\uff1a\u5728 Claude Desktop \u958b Cowork \u4efb\u52d9\uff1b\u8a2d\u5b9a\u5168\u57df/\u8cc7\u6599\u593e\u6307\u4ee4\uff1b\u5efa\u7acb scheduled tasks\u3002",
    navVisible: true,
    html: `
<div class="callout warn"><strong>先提醒你兩件事</strong><br>
1) Cowork 不是聊天，它會在你的電腦上跑多步任務、會碰檔案。<br>
2) Scheduled tasks 只有在「電腦醒著 + Claude Desktop 開著」才會跑。[Source](https://support.claude.com/en/articles/13345190-get-started-with-cowork)</div>

<h2 id="start">5-1. 開始一個 Cowork 任務</h2>
<ol>
  <li>打開 <strong>Claude Desktop</strong>。</li>
  <li>切到 <strong>Cowork</strong>（研究預覽功能，介面可能因版本不同）。</li>
  <li>選擇你的專案資料夾，讓 Cowork 有上下文（你也可以只給必要子資料夾）。</li>
  <li>下達「結果導向」任務：例如「幫我整理本週完成項目、產出 release note」。</li>
</ol>

<figure class="figure">
  <img src="./assets/step5-cowork-get-started.png" alt="Cowork get started 文件截圖" loading="lazy" />
  <figcaption>參考截圖：Cowork 入門說明（官方 Help Center）</figcaption>
</figure>

<h2 id="instructions">5-2. 設定全域/資料夾指令（避免它每次都亂猜）</h2>
<ul>
  <li><strong>全域指令</strong>：固定你的輸出風格（例如：用繁中、每次輸出要附 checklist）。</li>
  <li><strong>資料夾指令</strong>：固定你的專案背景（例如：技術棧、命名規範、部署方式）。</li>
</ul>

<h2 id="schedule">5-3. 排程任務（例行自動化）</h2>
<p>在 Cowork 任務中輸入 <code>/schedule</code>，或點左側的 Scheduled 管理排程。[Source](https://support.claude.com/en/articles/13345190-get-started-with-cowork)</p>
<div class="callout">
  <strong>你可以直接照抄的排程範例</strong>
  <ul>
    <li>每日 09:00：掃 repo issues/PR，輸出今日待辦清單（含優先級）</li>
    <li>每週五 18:00：整理本週變更，產出 release note 草稿</li>
    <li>每日 20:00：檢查 Vercel 最新部署狀態，失敗就列出可能原因</li>
  </ul>
</div>

<h2 id="checkpoint">Checkpoint #5</h2>
<ul>
  <li>你能描述一個任務，Cowork 能在你不盯著的情況下完成</li>
  <li>你有至少 1 個排程任務跑起來</li>
  <li>你知道它何時會停（睡眠/關閉 app）</li>
</ul>

<p class="page-lead">收尾：把常見費用、風險與安全提醒看一遍。<a href="#/publish-this-handbook">前往 費用與注意事項</a></p>
    `,
    md: `
# Step 5｜Cowork：例行任務自動化

## 重要限制
- Scheduled tasks 只會在「電腦醒著 + Claude Desktop 開著」時執行。
Source: https://support.claude.com/en/articles/13345190-get-started-with-cowork

## 5-1 開任務
- Claude Desktop → Cowork → 選專案資料夾 → 下結果導向任務

![Cowork get started](./assets/step5-cowork-get-started.png)

## 5-2 設定指令
- 全域指令：輸出風格
- 資料夾指令：專案背景/規範

## 5-3 排程
- \`/schedule\` 或左側 Scheduled
    `
  },

  {
    id: "publish-this-handbook",
    route: "/publish-this-handbook",
    nav: "\u8cbb\u7528\u8207\u6ce8\u610f\u4e8b\u9805",
    title: "\u8cbb\u7528\u8207\u6ce8\u610f\u4e8b\u9805\uff1a\u4f60\u6703\u8e29\u7684\u5751\uff08\u6211\u5148\u5e6b\u4f60\u8b1b\u5728\u524d\u9762\uff09",
    meta: "\u96c6\u4e2d\u6574\u7406\uff1aAI \u7522\u51fa\u4e0d\u6e96\u3001\u6b0a\u9650/\u91d1\u9470\u3001\u6210\u672c\u3001\u90e8\u7f72\u9677\u9631\u3001\u5982\u4f55\u9a57\u6536\u3002",
    navVisible: true,
    html: `
<h2 id="accuracy">1) AI 會不準：你要用 Checkpoint 驗收</h2>
<p>Figma 官方也明講：AI 輸出可能誤導或錯誤，你要自行驗證。[Source](https://help.figma.com/hc/en-us/articles/23870272542231-Use-AI-tools-in-Figma-Design)</p>

<h2 id="secrets">2) 金鑰不要上 GitHub（你會被掃到）</h2>
<ul>
  <li>任何 API Key / DB 密碼 / OAuth secret 都放 env vars，不要 commit。</li>
  <li>真的不小心 push 了，請立刻 revoke/rotate，不要只是刪檔案。</li>
</ul>

<h2 id="cost">3) 成本（你要預估）</h2>
<ul>
  <li>Figma AI / v0 / Claude（含 Cowork/Code）通常是付費方案功能。</li>
  <li>Vercel 免費方案可先用，但流量/建置時間/團隊功能有限。</li>
</ul>

<h2 id="vercel">4) Vercel 最常死在 build 與 env vars</h2>
<ul>
  <li>本機 dev server 能跑不代表 build 能過。</li>
  <li>你要把 build 當成最重要的驗收（Checkpoint #3/#4）。</li>
</ul>

<h2 id="github">5) 如何把這份手冊部署到 GitHub Pages？</h2>
<p>你現在看的這份手冊本身就是一個靜態網站（可直接丟 GitHub Pages）。你要做的只有「覆蓋檔案」：</p>
<ol>
  <li>解壓你下載的 <code>handbook-site.zip</code></li>
  <li>到 GitHub repo → <strong>Add file → Upload files</strong></li>
  <li>把解壓後的 <code>index.html</code>、<code>css/</code>、<code>js/</code>、<code>assets/</code> 全部拖上去</li>
  <li>Commit 後等 1～3 分鐘，GitHub Pages 會自動更新</li>
</ol>
<div class="callout ok"><strong>驗收</strong><br>
  你的 Pages 網址底下，這兩個檔案都要是 200：<br>
  <code>/js/main.js</code>、<code>/js/content.js</code>。只要有一個 404，整個站就不會動。</div>
    `,
    md: `
# 費用與注意事項

## 1) AI 會不準
你要用 checkpoints 驗收。Figma 官方也提醒 AI 可能誤導/錯誤。
Source: https://help.figma.com/hc/en-us/articles/23870272542231-Use-AI-tools-in-Figma-Design

## 2) 金鑰不要上 GitHub

## 3) 成本

## 4) Vercel 常死在 build/env vars

## 5) GitHub Pages 覆蓋部署
- 解壓 zip
- GitHub repo → Add file → Upload files
- 上傳 index.html / css / js / assets
- 等 1～3 分鐘
    `
  },

  {
    id: "troubleshooting",
    route: "/troubleshooting",
    nav: "\u6545\u969c\u6392\u9664",
    title: "\u6545\u969c\u6392\u9664\uff08\u96b1\u85cf\u9801\uff09",
    meta: "",
    navVisible: false,
    html: `
<p>暫不提供（這頁被隱藏）。</p>
    `,
    md: `
# 故障排除

暫不提供。
    `
  },

  {
    id: "checklist",
    route: "/checklist",
    nav: "\u4e0a\u7dda\u524d\u6aa2\u67e5\u6e05\u55ae",
    title: "\u4e0a\u7dda\u524d\u6aa2\u67e5\u6e05\u55ae\uff08\u96b1\u85cf\u9801\uff09",
    meta: "",
    navVisible: false,
    html: `
<p>暫不提供（這頁被隱藏）。</p>
    `,
    md: `
# 上線前檢查清單

暫不提供。
    `
  }

];