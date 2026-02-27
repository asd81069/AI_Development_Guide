/* =============================================
   content.js — 全部章節資料
   ============================================= */

window.HANDBOOK_PAGES = [

  /* ==================== 0. 開始之前 ==================== */
  {
    id: 'overview',
    label: '開始之前',
    icon: '🚀',
    title: '開始之前：完整工作流程說明',
    desc:  '了解五步驟 AI 輔助開發流程，以及所有必要的帳號和工具準備',
    html: `
<div class="resource-grid">
  <div class="res-card">
    <div class="res-icon">🎨</div>
    <div class="res-title">Figma（需專業版）</div>
    <div class="res-desc">AI 功能需要付費版本才能使用</div>
    <a class="res-link" href="https://figma.com" target="_blank">前往 Figma →</a>
  </div>
  <div class="res-card">
    <div class="res-icon">⚡</div>
    <div class="res-title">v0 by Vercel</div>
    <div class="res-desc">AI 驅動的 UI 生成工具，免費方案可用</div>
    <a class="res-link" href="https://v0.dev" target="_blank">前往 v0 →</a>
  </div>
  <div class="res-card">
    <div class="res-icon">🤖</div>
    <div class="res-title">Anthropic API 金鑰</div>
    <div class="res-desc">Claude Code CLI 需要 API 金鑰</div>
    <a class="res-link" href="https://console.anthropic.com" target="_blank">取得 API 金鑰 →</a>
  </div>
  <div class="res-card">
    <div class="res-icon">🐙</div>
    <div class="res-title">GitHub 帳號</div>
    <div class="res-desc">版本控制與 Vercel 部署必須</div>
    <a class="res-link" href="https://github.com" target="_blank">前往 GitHub →</a>
  </div>
</div>

<div class="callout info"><span class="callout-icon">ℹ️</span><div>
  <strong>流程總覽：</strong>Figma AI 設計 → v0 生成 React 程式碼 → Claude Code 完善後端 → Vercel 自動部署 → Cowork 自動化維護。
  整個流程讓你幾乎不需要手動寫程式碼。
</div></div>

<div class="callout warning"><span class="callout-icon">⚠️</span><div>
  <strong>費用提醒：</strong>Figma 專業版約 $15/月、Claude API 按用量計費、Vercel 免費方案足夠個人專案使用。
</div></div>
    `
  },

  /* ==================== 1. Figma AI ==================== */
  {
    id: 'figma',
    label: 'Step 1 | Figma AI',
    icon: '🎨',
    title: 'Step 1：Figma AI 設計',
    desc:  '使用 Figma AI 功能快速建立 UI 設計原型，並準備匯出到 v0',

    steps: [
      {
        badge: '步驟 1.1',
        title: '開啟 Figma 並啟用 AI 功能',
        screenshot: 'assets/figma-ai-toolbar.png',
        caption: '📌 工具列右側的 ✦ 星形圖示就是 Figma AI 入口',
        instructions: [
          '登入 <a href="https://figma.com" target="_blank">Figma</a>，確認使用的是<strong>專業版（Professional）</strong>或以上方案',
          '開啟任何一個設計檔案（或點選「New design file」建立新檔）',
          '查看<strong>上方工具列最右邊</strong>，找到「✦」星形圖示，那就是 Figma AI 的入口',
          '如果找不到星形圖示，到 Help → Check for Updates 更新 Figma；或嘗試建立全新帳號（AI 功能是逐步開放的）',
          '點選星形圖示，會展開一個下拉選單，列出所有可用的 AI 工具',
        ],
        callout: { type:'tip', icon:'💡', text:'如果 Figma 是網頁版，確保瀏覽器允許 Figma 使用所有功能，建議使用 Chrome 或 Edge 最新版。' }
      },
      {
        badge: '步驟 1.2',
        title: 'First Draft：用 AI 生成 UI 框架',
        screenshot: 'assets/figma-first-draft.png',
        caption: '📌 點選 First Draft → 在輸入框描述你要的介面 → 按 Generate',
        instructions: [
          '在星形選單中點選「<strong>First Draft</strong>」',
          '輸入框出現後，用中文或英文描述你要的介面，例如：',
          '範例提示詞：<code>一個電商產品詳情頁，包含產品圖片輪播、標題、價格、尺寸選擇器、加入購物車按鈕、產品描述區</code>',
          '按 Enter 或點選 Generate，等待 10–30 秒',
          '生成完成後，你會看到一個完整的 Frame，<strong>所有圖層都已自動命名</strong>，並設定了 Auto Layout',
          '底部可以切換不同的設計風格建議',
        ],
        callout: { type:'info', icon:'ℹ️', text:'First Draft 生成的設計已內建 Auto Layout 和響應式設定，圖層命名清晰，可以直接傳給 v0 使用。' }
      },
      {
        badge: '步驟 1.3',
        title: 'Make Changes 面板：細調設計',
        screenshot: 'assets/figma-make-changes.png',
        caption: '📌 右下角「Make Changes」按鈕 → 出現客製化控制面板',
        instructions: [
          '點選畫布右下角的「<strong>Make Changes</strong>」按鈕',
          '<strong>① 明暗模式：</strong>最上方的切換開關，一鍵切換淺色 / 深色主題',
          '<strong>② 主色調：</strong>點選顏色圓圈更換強調色；若有品牌色，點「+」手動輸入 Hex 色碼',
          '<strong>③ 圓角半徑：</strong>拖動滑桿，從 0（銳利）到 24px（圓潤）',
          '<strong>④ 間距密度：</strong>拖動滑桿，High Density（緊湊）↔ Low Density（寬鬆）',
          '<strong>⑤ 字體選擇：</strong>分別設定 Title / Body 字體',
          '也可以點「<strong>Prompt</strong>」用自然語言下指令，例如：<code>讓按鈕更大一些，使用更現代的配色</code>',
        ],
        callout: { type:'tip', icon:'💡', text:'品牌色直接貼 Hex 值（如 #FF6B35）比手動找顏色快很多。' }
      },
      {
        badge: '步驟 1.4',
        title: 'Rename Layers：自動整理圖層命名',
        instructions: [
          '用滑鼠框選你想整理的所有圖層（或直接選整個 Frame）',
          '點選星形圖示 → 選「<strong>Rename Layers</strong>」',
          'Figma AI 會根據元素的視覺特徵自動命名，例如「Button/Primary」、「Input/Email」',
          '不滿意的名稱可以再選中該圖層重跑一次，或手動改',
        ],
        callout: { type:'info', icon:'ℹ️', text:'v0 在匯入 Figma 時會讀取圖層名稱，命名清楚可以讓生成的 React 組件名稱更語意化。' }
      },
      {
        badge: '步驟 1.5',
        title: 'Replace Content / Duplicate with New Content：快速填充內容',
        instructions: [
          '<strong>Replace Content：</strong>選中重複性的列表元素（如商品卡片列表），點選 Replace Content，AI 會自動填入不同的假資料',
          '<strong>Duplicate with New Content：</strong>把滑鼠移到已設好 Auto Layout 的 Frame 上，右下角會出現一個「膠囊形」圖示',
          '按住拖拽膠囊圖示往下拖，AI 會自動複製 Frame 並填入新的內容',
          '這是快速建立商品列表、評論列表等重複區塊的最快方式',
        ],
        callout: { type:'tip', icon:'💡', text:'Duplicate with New Content 是影片中特別強調的「殺手級功能」，能把手動填假資料的時間縮短 90%。' }
      },
      {
        badge: '步驟 1.6',
        title: '取得 Figma 分享連結（準備給 v0 用）',
        instructions: [
          '設計完成後，點選右上角的「<strong>Share</strong>」按鈕',
          '在分享設定中確認：Anyone with the link → <strong>can view</strong>（不需要 edit 權限）',
          '點選「Copy link」複製連結，格式類似：<code>https://www.figma.com/file/XXXX/...</code>',
          '把這個連結保存好，下一步在 v0 中會用到',
          '<strong>重要：</strong>確保設計組件都在獨立的 Frame 中，避免把整個頁面塞成一個超大 Frame',
        ],
        callout: { type:'warning', icon:'⚠️', text:'v0 對過於複雜的 Figma 設計解析效果會下降。建議每個主要組件（如商品卡、表單、導覽列）各自放在獨立的 Frame 中。' }
      },
    ]
  },

  /* ==================== 2. v0 ==================== */
  {
    id: 'v0',
    label: 'Step 2 | v0',
    icon: '⚡',
    title: 'Step 2：v0 生成 React 程式碼',
    desc:  '將 Figma 設計匯入 v0，自動生成可部署的 Next.js + React 程式碼',

    steps: [
      {
        badge: '步驟 2.1',
        title: '登入 v0 並建立新專案',
        screenshot: 'assets/v0-dashboard.png',
        caption: '📌 v0 主頁面 → 右上角點選「New Chat」→ 看到 Figma 匯入選項',
        instructions: [
          '前往 <a href="https://v0.dev" target="_blank">v0.dev</a>，點選「Sign In with GitHub」登入',
          '第一次使用會有免費 Credits，之後按使用量付費',
          '進入主頁面後，點選「<strong>New Chat</strong>」或直接在輸入框輸入',
          '在輸入框旁邊尋找「<strong>Import from Figma</strong>」或夾附圖示',
          '確認頁面頂部有顯示你的帳號名稱，表示已成功登入',
        ],
        callout: { type:'info', icon:'ℹ️', text:'v0 使用 Vercel 帳號或 GitHub 帳號登入，推薦用 GitHub 帳號，這樣後面連接儲存庫更方便。' }
      },
      {
        badge: '步驟 2.2',
        title: '匯入 Figma 設計檔案',
        screenshot: 'assets/v0-figma-import.png',
        caption: '📌 點選 Figma 圖示 → 貼上分享連結 → 選擇要匯入的 Frame',
        instructions: [
          '點選輸入框旁邊的「<strong>Figma 圖示</strong>」（看起來像 F 或 Figma Logo）',
          '在彈出的視窗中，<strong>貼上上一步複製的 Figma 分享連結</strong>',
          'v0 會自動分析你的 Figma 檔案，顯示所有可選擇的 Frame 縮圖',
          '在資源選擇網格中，<strong>勾選你要轉換的 Frame</strong>（可以多選）',
          '加入一段提示詞說明 App 的功能，例如：<code>這是一個電商購物網站，請生成可運行的 Next.js 應用程式</code>',
          '點選「<strong>Confirm</strong>」，v0 開始生成程式碼',
        ],
        callout: { type:'tip', icon:'💡', text:'加上提示詞非常重要！光匯入設計圖，v0 只知道外觀。加上「這是電商網站需要購物車功能」這類說明，生成的程式碼會更完整。' }
      },
      {
        badge: '步驟 2.3',
        title: '等待生成並預覽結果',
        screenshot: 'assets/v0-preview.png',
        caption: '📌 左側即時預覽畫面；右側顯示生成的 React 程式碼',
        instructions: [
          '等待 1–3 分鐘，v0 會在右側面板生成 React + Tailwind CSS 程式碼',
          '<strong>左側預覽區</strong>可以看到完整的應用程式畫面，可以直接點擊互動',
          '檢查以下項目是否正確：',
          '→ 版面佈局是否符合 Figma 設計',
          '→ 顏色、字體是否正確',
          '→ 按鈕點擊、表單輸入等互動是否正常',
          '發現問題時，直接在輸入框輸入修正指令（不需要重新匯入 Figma）',
        ],
        callout: { type:'info', icon:'ℹ️', text:'v0 使用的技術棧是 Next.js + React + Tailwind CSS + shadcn/ui，這些都是目前業界主流的生產級框架。' }
      },
      {
        badge: '步驟 2.4',
        title: '使用 Fast Edit 快速修改',
        instructions: [
          '在預覽視窗中，<strong>點選你想修改的特定元件</strong>（會出現藍色選框）',
          '選中後，在輸入框輸入針對該元件的修改指令，例如：',
          '<code>這個按鈕的預設狀態不要有黑色背景</code>',
          '<code>使用 Google Fonts 的 JetBrains Mono 等寬字體</code>',
          '<code>把這個卡片的圓角改成 16px</code>',
          'v0 進入「<strong>Fast Edit 模式</strong>」，只修改指定元件，速度更快',
          '右上角的「<strong>← →</strong>」箭頭可以在歷史版本間切換，隨時還原',
        ],
        callout: { type:'tip', icon:'💡', text:'Fast Edit 模式下 v0 只會修改你選中的那個組件，不會動到其他部分，大幅減少「改A壞B」的問題。' }
      },
      {
        badge: '步驟 2.5',
        title: '整合後端服務（以 Supabase 為例）',
        instructions: [
          '在輸入框輸入：<code>幫我整合 Supabase 資料庫，建立 products 資料表</code>',
          'v0 會提示你需要設定環境變數，顯示需要的變數名稱',
          '前往 <a href="https://supabase.com" target="_blank">Supabase</a> 建立專案，取得：',
          '→ Project URL（格式：https://xxxx.supabase.co）',
          '→ anon/public Key（Project Settings → API）',
          '回到 v0，在環境變數設定頁面填入這些值，點選「<strong>Connect</strong>」',
          'v0 會自動在 Vercel 專案中儲存這些環境變數，<strong>不會寫進程式碼</strong>',
        ],
        callout: { type:'warning', icon:'⚠️', text:'環境變數絕對不要手動貼到程式碼中！請一律透過 v0 的環境變數介面設定，這樣 Vercel 會安全地管理這些秘鑰。' }
      },
      {
        badge: '步驟 2.6',
        title: '部署到 Vercel（一鍵部署）',
        screenshot: 'assets/v0-deploy.png',
        caption: '📌 右上角「Deploy」→ 填入專案名稱 → 選擇建立 GitHub Repo → Deploy',
        instructions: [
          '確認應用程式功能符合預期後，點選右上角「<strong>Deploy</strong>」按鈕',
          '填入專案名稱，例如：<code>my-shop</code>',
          '勾選「<strong>Create GitHub Repository</strong>」，v0 會自動在你的 GitHub 建立儲存庫',
          '點選「<strong>Create Project</strong>」，Vercel 開始建置和部署',
          '等待 2–5 分鐘，取得你的 Live URL（格式：my-shop.vercel.app）',
          '點開 URL 測試網站是否正常',
        ],
        callout: { type:'tip', icon:'💡', text:'v0 部署後，程式碼會同步到 GitHub。之後每次 push 到 main branch，Vercel 都會自動重新部署，完全自動化。' }
      },
    ]
  },

  /* ==================== 3. Claude Code ==================== */
  {
    id: 'claude',
    label: 'Step 3 | Claude Code',
    icon: '🤖',
    title: 'Step 3：Claude Code CLI 開發',
    desc:  '在本地端使用 Claude Code 進行進階開發、後端邏輯、除錯和最佳化',

    steps: [
      {
        badge: '步驟 3.1',
        title: '安裝 Node.js 和 Claude Code CLI',
        screenshot: 'assets/claude-code-install.png',
        caption: '📌 開啟終端機 → 執行安裝指令 → 看到「Successfully installed」即完成',
        instructions: [
          '先確認 Node.js 版本 ≥ 18：在終端機輸入 <code>node --version</code>',
          '如果版本過舊或未安裝，前往 <a href="https://nodejs.org" target="_blank">nodejs.org</a> 下載 LTS 版本',
          '安裝 Claude Code CLI（全域安裝）：',
          '<pre><code>npm install -g @anthropic/claude-code</code></pre>',
          '安裝完成後，驗證安裝是否成功：',
          '<pre><code>claude --version</code></pre>',
          '看到版本號（如 1.x.x）表示安裝成功',
        ],
        callout: { type:'info', icon:'ℹ️', text:'Windows 使用者建議使用 Git Bash 或 Windows Terminal（PowerShell）。macOS 使用者直接用 Terminal 即可。' }
      },
      {
        badge: '步驟 3.2',
        title: '設定 API 金鑰並登入',
        instructions: [
          '前往 <a href="https://console.anthropic.com" target="_blank">console.anthropic.com</a> 登入',
          '點選「API Keys」→「Create Key」建立新金鑰',
          '複製 API Key（只顯示一次，請妥善保存）',
          '回到終端機，設定環境變數：',
          '<pre><code># macOS / Linux\nexport ANTHROPIC_API_KEY="sk-ant-xxxxxxxx"\n\n# Windows PowerShell\n$env:ANTHROPIC_API_KEY="sk-ant-xxxxxxxx"</code></pre>',
          '為了讓設定持久化，建議加到 shell 設定檔（~/.zshrc 或 ~/.bashrc）',
          '測試登入：<pre><code>claude auth status</code></pre>',
        ],
        callout: { type:'warning', icon:'⚠️', text:'API Key 是敏感資訊，絕對不要貼到程式碼中或上傳到 GitHub！只放在環境變數中。' }
      },
      {
        badge: '步驟 3.3',
        title: '把 v0 的程式碼 Clone 到本地',
        instructions: [
          '前往 GitHub，找到 v0 自動建立的儲存庫（在你的 GitHub 帳號下）',
          '複製 Clone URL（HTTPS 格式）',
          '在終端機執行：',
          '<pre><code>git clone https://github.com/你的帳號/專案名稱.git\ncd 專案名稱</code></pre>',
          '安裝相依套件：<pre><code>npm install</code></pre>',
          '本地啟動開發伺服器，確認環境正常：<pre><code>npm run dev</code></pre>',
          '開啟瀏覽器前往 <code>http://localhost:3000</code>，確認和 Vercel 上的樣子一致',
        ],
        callout: { type:'tip', icon:'💡', text:'建議在 VS Code 開啟這個資料夾（<code>code .</code>），方便同時查看程式碼和終端機。' }
      },
      {
        badge: '步驟 3.4',
        title: '在專案中啟動 Claude Code',
        screenshot: 'assets/claude-code-session.png',
        caption: '📌 在專案資料夾中執行 claude，進入互動模式',
        instructions: [
          '在專案根目錄的終端機中，輸入：<pre><code>claude</code></pre>',
          'Claude Code 會掃描你的專案結構並建立上下文',
          '你可以用自然語言跟 Claude 溝通，例如：',
          '<code>幫我在 /api/products 路由中新增「取得所有商品」和「新增商品」兩個端點</code>',
          'Claude 會閱讀相關檔案、生成程式碼，並詢問是否要直接寫入',
          '輸入 <code>yes</code> 確認，程式碼就會自動寫入對應的檔案',
        ],
        callout: { type:'info', icon:'ℹ️', text:'Claude Code 特別強大的地方是它能理解整個專案的上下文，不只是單個檔案。這讓它能做出一致性更高的修改。' }
      },
      {
        badge: '步驟 3.5',
        title: '常用 Claude Code 開發指令',
        instructions: [
          '<strong>新增功能：</strong><br><code>claude ask "幫我實作購物車的本地狀態管理，使用 Zustand"</code>',
          '<strong>除錯：</strong><br><code>claude debug "TypeError: Cannot read properties of undefined (reading \'map\')"</code>',
          '<strong>重構程式碼：</strong><br><code>claude refactor src/components/ProductList.tsx --improve-performance</code>',
          '<strong>生成 API 文件：</strong><br><code>claude docs --format markdown src/app/api/</code>',
          '<strong>安全性檢查：</strong><br><code>claude security --scan</code>',
          '<strong>生成測試：</strong><br><code>claude test src/utils/ --framework jest</code>',
        ],
        callout: { type:'tip', icon:'💡', text:'每次對話都可以附加具體的需求描述。越詳細的描述，Claude 生成的程式碼品質越高。例如加上「需要處理分頁、排序、篩選功能」。' }
      },
      {
        badge: '步驟 3.6',
        title: '提交程式碼並觸發自動部署',
        instructions: [
          '開發完成，先本地測試 build 是否正常：<pre><code>npm run build</code></pre>',
          '確認沒有錯誤後，提交程式碼：',
          '<pre><code>git add .\ngit commit -m "feat: 新增購物車功能和結帳流程"\ngit push origin main</code></pre>',
          'Push 到 GitHub 後，Vercel 會<strong>自動偵測並開始新的部署</strong>',
          '前往 Vercel 控制台查看部署進度（通常 2–4 分鐘完成）',
          '部署成功後，Live URL 會自動更新為最新版本',
        ],
        callout: { type:'info', icon:'ℹ️', text:'建議養成習慣：每個功能做成一個 commit，message 用中文清楚描述做了什麼。這樣出問題時回滾版本更方便。' }
      },
    ]
  },

  /* ==================== 4. Vercel ==================== */
  {
    id: 'vercel',
    label: 'Step 4 | Vercel',
    icon: '🚀',
    title: 'Step 4：Vercel 部署上線',
    desc:  '設定完整的生產環境、自訂網域、環境變數和自動化 CI/CD 流程',

    steps: [
      {
        badge: '步驟 4.1',
        title: 'Vercel 控制台概覽',
        screenshot: 'assets/vercel-dashboard.png',
        caption: '📌 vercel.com/dashboard → 找到你的專案 → 點進去查看詳細設定',
        instructions: [
          '前往 <a href="https://vercel.com/dashboard" target="_blank">vercel.com/dashboard</a>',
          '你應該可以看到 v0 自動建立的專案（名稱與你之前設定的一致）',
          '點進專案，可以看到：<strong>Deployments（部署記錄）、Analytics（流量）、Settings（設定）</strong>',
          '最近一次部署旁邊的 URL 就是你的 Live 網址（格式：project-name.vercel.app）',
          '點選 Deployments 頁籤，可以看到每次 Push 觸發的部署記錄',
        ],
        callout: { type:'info', icon:'ℹ️', text:'每次 Push 到 GitHub 的 main branch 都會觸發 Production 部署；若是 PR（Pull Request），則只會觸發 Preview 部署，不會影響正式環境。' }
      },
      {
        badge: '步驟 4.2',
        title: '設定環境變數',
        screenshot: 'assets/vercel-env-vars.png',
        caption: '📌 Settings → Environment Variables → 點選 Add Variable',
        instructions: [
          '進入專案後，點選上方的「<strong>Settings</strong>」',
          '左側選單選擇「<strong>Environment Variables</strong>」',
          '點選「<strong>Add Variable</strong>」新增變數',
          '每個變數需要填入：<strong>Name（變數名）</strong>、<strong>Value（值）</strong>',
          '選擇套用的環境：Production、Preview、Development（可多選）',
          '常見的變數範例：',
          '<pre><code>NEXT_PUBLIC_SUPABASE_URL       = https://xxxx.supabase.co\nNEXT_PUBLIC_SUPABASE_ANON_KEY  = eyJxxxx\nDATABASE_URL                   = postgresql://...\nSTRIPE_SECRET_KEY              = sk_live_xxxx</code></pre>',
          '設定完成後，需要<strong>重新部署</strong>才會生效（點 Deployments → Redeploy）',
        ],
        callout: { type:'warning', icon:'⚠️', text:'加了 NEXT_PUBLIC_ 前綴的變數會暴露在前端 JavaScript 中，只放公開的 URL 或公鑰。秘鑰（Secret Key）絕對不要加這個前綴！' }
      },
      {
        badge: '步驟 4.3',
        title: '設定自訂網域',
        instructions: [
          '進入專案 Settings → 左側選「<strong>Domains</strong>」',
          '點選「<strong>Add Domain</strong>」，輸入你的網域名稱（如 myshop.com）',
          'Vercel 會顯示你需要在網域商（如 GoDaddy、Namecheap）設定的 DNS 記錄',
          '通常有兩種設定方式：',
          '→ <strong>CNAME 記錄（推薦子網域）：</strong><code>www  CNAME  cname.vercel-dns.com</code>',
          '→ <strong>A 記錄（根網域）：</strong><code>@  A  76.76.19.19</code>',
          '設定完成後，等待 DNS 傳播（15 分鐘到 48 小時不等）',
          'Vercel 偵測到 DNS 設定正確後，會<strong>自動申請並更新 SSL 憑證</strong>（免費）',
        ],
        callout: { type:'tip', icon:'💡', text:'如果你是用 Cloudflare 管理 DNS，把 Cloudflare 的 Proxy 功能（橘色雲朵）關掉，改為 DNS only（灰色雲朵），避免和 Vercel SSL 衝突。' }
      },
      {
        badge: '步驟 4.4',
        title: '查看部署日誌和除錯',
        instructions: [
          '進入 Deployments 頁面，點選任意一次部署記錄',
          '在部署詳情頁可以看到完整的<strong>建置日誌（Build Log）</strong>',
          '如果部署失敗，錯誤訊息會顯示在最底部，用紅色標示',
          '常見錯誤和解法：',
          '→ <code>Module not found</code> → 少裝了套件，執行 <code>npm install 套件名</code> 再 push',
          '→ <code>Environment variable not found</code> → 環境變數名稱拼錯，回去 Settings 檢查',
          '→ <code>Type error</code> → TypeScript 型別問題，請 Claude Code 幫你修正',
          '修正後重新 Push，Vercel 自動重跑部署',
        ],
        callout: { type:'info', icon:'ℹ️', text:'Vercel 的 Runtime Log 可以看到函式執行時的 console.log 輸出，對除錯 API 路由非常有用。在 Deployments → 點選部署 → Functions 頁籤。' }
      },
      {
        badge: '步驟 4.5',
        title: '設定部署通知和保護',
        instructions: [
          '進入 Settings → 左側選「<strong>Git</strong>」',
          '確認以下設定：',
          '→ <strong>Production Branch：</strong>main（只有 main 分支才部署到正式環境）',
          '→ <strong>Deploy Hooks：</strong>可以建立 Webhook URL，讓外部服務觸發部署',
          '→ <strong>Deployment Protection：</strong>啟用可以讓 Preview 環境需要登入才能訪問',
          '設定 Slack / Email 通知：Integration → 找到 Slack → 連接你的 Slack 工作區',
          '每次部署成功或失敗都會收到通知',
        ],
        callout: { type:'tip', icon:'💡', text:'建議開啟 Deployment Protection（需要 Vercel Pro），這樣 Preview URL 不會被搜尋引擎收錄，也不會讓不相關的人看到你的測試版本。' }
      },
      {
        badge: '步驟 4.6',
        title: '效能最佳化設定（vercel.json）',
        instructions: [
          '在專案根目錄建立 <code>vercel.json</code> 設定檔',
          '基本設定範例：',
          '<pre><code>{\n  "framework": "nextjs",\n  "regions": ["sin1"],\n  "headers": [\n    {\n      "source": "/(.*)",\n      "headers": [\n        { "key": "X-Frame-Options", "value": "DENY" },\n        { "key": "X-Content-Type-Options", "value": "nosniff" }\n      ]\n    }\n  ]\n}</code></pre>',
          '<code>regions: ["sin1"]</code> 表示部署到新加坡節點，對台灣使用者延遲較低',
          '其他可用區域：iad1（美東）、hkg1（香港）、nrt1（東京）',
          '提交 vercel.json 後，下次部署自動套用新設定',
        ],
        callout: { type:'info', icon:'ℹ️', text:'台灣使用者推薦使用 sin1（新加坡）或 hkg1（香港）節點，比美國節點延遲少 100–200ms。' }
      },
    ]
  },

  /* ==================== 5. Cowork ==================== */
  {
    id: 'cowork',
    label: 'Step 5 | Cowork',
    icon: '⚙️',
    title: 'Step 5：Claude Cowork 自動化維護',
    desc:  '使用 Claude Cowork 建立智能自動化工作流程，讓 AI 幫你維護和監控應用',

    steps: [
      {
        badge: '步驟 5.1',
        title: '取得 Claude Cowork 存取權',
        screenshot: 'assets/cowork-welcome.png',
        caption: '📌 claude.ai → 左側選單找到「Cowork」→ 點選「Get Started」',
        instructions: [
          '前往 <a href="https://claude.ai" target="_blank">claude.ai</a>（<strong>注意：是 claude.ai，不是 claude.com</strong>）',
          '登入你的 Anthropic / Claude 帳號',
          '在左側選單找到「<strong>Cowork</strong>」（可能顯示為 Beta 標籤）',
          '如果找不到，表示你的帳號還沒開放，需要申請 Early Access',
          '申請頁面：<a href="https://claude.ai/cowork" target="_blank">claude.ai/cowork</a> → 填寫申請表單',
          '通常 1–3 個工作天內收到開通通知',
        ],
        callout: { type:'warning', icon:'⚠️', text:'截至 2026 年初，Cowork 仍在 Research Preview 階段，部分功能可能變動。建議先從簡單的自動化任務開始嘗試。' }
      },
      {
        badge: '步驟 5.2',
        title: '了解 Cowork 的基本操作',
        screenshot: 'assets/cowork-interface.png',
        caption: '📌 主介面分為：任務清單（左側）、對話視窗（中間）、執行記錄（右側）',
        instructions: [
          'Cowork 的介面類似 Claude 聊天，但多了「任務持久化」和「排程」功能',
          '<strong>三個核心概念：</strong>',
          '→ <strong>Tasks（任務）：</strong>你指派給 Claude 做的工作，可以是一次性或定期的',
          '→ <strong>Artifacts（產出物）：</strong>Claude 執行任務後的輸出，如報告、程式碼、摘要',
          '→ <strong>Schedules（排程）：</strong>讓任務在特定時間自動執行',
          '試著輸入第一個任務：<code>每天早上 9 點，幫我從 Vercel 取得昨日的部署記錄和錯誤日誌，整理成摘要</code>',
          'Cowork 會詢問需要哪些權限，按照指示授權即可',
        ],
        callout: { type:'info', icon:'ℹ️', text:'Cowork 的「電腦使用（Computer Use）」功能讓 AI 可以操作瀏覽器和桌面應用程式，大幅擴展自動化的可能性。' }
      },
      {
        badge: '步驟 5.3',
        title: '建立定期部署監控',
        instructions: [
          '在 Cowork 對話框輸入以下指令，建立監控任務：',
          '<pre><code>/schedule daily at 08:00\n\n任務：監控我的 Vercel 專案健康狀態\n1. 檢查 my-shop.vercel.app 是否正常回應（HTTP 200）\n2. 確認最近 24 小時沒有 Build 失敗\n3. 如果發現問題，立即發 Slack 通知到 #dev-alerts\n4. 每天產出日報，總結部署狀態</code></pre>',
          'Cowork 確認任務設定後，點選「<strong>Create Schedule</strong>」',
          '任務會在每天早上 8 點自動執行',
          '執行結果和報告會保存在 Cowork 的 Artifacts 中',
        ],
        callout: { type:'tip', icon:'💡', text:'/schedule 指令支援自然語言描述，如「every weekday at 9am」、「every Monday」、「first day of month」。' }
      },
      {
        badge: '步驟 5.4',
        title: '自動化程式碼審查',
        instructions: [
          '設定當有 GitHub PR 建立時，自動觸發程式碼審查：',
          '<pre><code>任務：每當 GitHub 儲存庫有新的 Pull Request，\n請幫我自動審查程式碼：\n1. 確認沒有明顯的 Bug 或安全漏洞\n2. 檢查是否有 console.log 遺留在正式程式碼\n3. 確認 API 端點有做輸入驗證\n4. 在 PR 留下審查評論，列出需要修改的地方</code></pre>',
          '需要先授權 Cowork 存取 GitHub（Settings → Integrations → GitHub）',
          '設定完成後，每次開 PR 都會自動收到 AI 程式碼審查',
        ],
        callout: { type:'info', icon:'ℹ️', text:'AI 程式碼審查不是要取代人工審查，而是幫你快速過濾常見問題，讓人工審查更有效率。' }
      },
      {
        badge: '步驟 5.5',
        title: '建立使用者回饋處理自動化',
        instructions: [
          '整合 Gmail，自動處理使用者問題：',
          '<pre><code>/schedule trigger: new email\ncondition: 主旨包含「退款」或「訂單問題」\n\n任務：\n1. 閱讀郵件內容，分析問題類型\n2. 查詢訂單系統確認訂單狀態\n3. 根據問題類型生成對應的回覆草稿\n4. 標記郵件為「待處理」\n5. 如果是退款申請，發送確認信給客戶\n   告知 3 個工作天內處理</code></pre>',
          '進入 Settings → Integrations，連接你的 Gmail 帳號',
          '設定 Cowork 可以讀取和回覆特定標籤的郵件',
          '草稿會自動建立在 Gmail Drafts，你可以審查後再送出',
        ],
        callout: { type:'warning', icon:'⚠️', text:'建議把 Cowork 設定為「建立草稿」而不是「直接送出」，至少在初期先人工審核 AI 的回覆內容，確認品質符合期望後再開放自動送出。' }
      },
      {
        badge: '步驟 5.6',
        title: '每週業務報告自動化',
        instructions: [
          '設定每週五自動生成業務報告：',
          '<pre><code>/schedule weekly on Friday at 17:00\n\n任務：生成本週業務摘要報告\n\n資料來源：\n- Vercel Analytics：頁面流量、熱門頁面\n- Supabase：新訂單數、訂單金額\n- GitHub：本週 commits 數、PR 狀態\n\n報告內容：\n1. 本週關鍵數字（流量、訂單、收入）\n2. 和上週的比較（增減百分比）\n3. 前 5 名熱門商品\n4. 需要關注的異常狀況\n5. 下週建議優先處理的事項\n\n輸出格式：PDF，發送到 team@example.com</code></pre>',
          'Cowork 會在每週五 5 點自動執行，匯集所有資料，生成報告',
          '報告同時儲存在 Cowork Artifacts 中，可以隨時查看歷史報告',
        ],
        callout: { type:'tip', icon:'💡', text:'可以把多個自動化任務串聯起來，讓 Cowork 的輸出成為另一個任務的輸入，建立完整的自動化工作流程。' }
      },
    ]
  },

];
