// Content is intentionally plain JS (no build step) so you can host as a static site on Vercel/Netlify/GitHub Pages.
// Each page provides: title, meta, html (reading view), md (markdown original).

window.HANDBOOK_PAGES = [
  {
    id: "home",
    route: "/",
    nav: "開始之前",
    title: "首頁：你要做的是『會賠錢的系統』，不是漂亮頁面",
    meta: "學習路線：Figma AI → v0 → Claude Code → Vercel → Cowork｜目標：一般商品電商（運費/地址/出貨）MVP 上線",
    html: `
      <div class="callout warn"><strong>先把幻想打掉</strong>
      你要做的是「一般商品電商」：有運費、有地址、有出貨。這不是作品集網站；你一旦上線，就會遇到真實世界的問題：運費算錯你會賠錢、後台權限做錯你會被亂改價格、出貨狀態錯你會被客服追殺。</div>

      <h2 id="path">你該照的順序</h2>
      <ol>
        <li><strong>Figma AI</strong>：先把 UI 拆成可轉碼的 Frame（元件化）。 <a href="#/figma-ai">去章節</a></li>
        <li><strong>v0</strong>：用「匯入 Figma」把元件變成可跑的 Next.js UI，再組成頁面流程。 <a href="#/v0">去章節</a></li>
        <li><strong>Claude Code</strong>：只用來補齊關鍵後端邏輯（運費、地址、訂單、出貨、Email）與修 build。 <a href="#/claude-code">去章節</a></li>
        <li><strong>Vercel</strong>：把系統上線，處理 env vars / domain /（若有）OAuth callback。 <a href="#/vercel-deploy">去章節</a></li>
        <li><strong>Cowork</strong>：做例行任務（每日待出貨清單、每週低庫存警示）。 <a href="#/cowork">去章節</a></li>
      </ol>

      <h2 id="mvp">你第一版 MVP 只需要做到這些</h2>
      <ul>
        <li>商品列表、商品詳情、購物車、結帳（地址 + 配送方式 + 下單）</li>
        <li>後台：商品/庫存管理、訂單列表、手動出貨（填物流公司 + 單號）</li>
        <li>運費：由後台可設定（Shipping Methods），前台結帳可選</li>
        <li>Email：下單成功、出貨通知（含單號）</li>
      </ul>

      <div class="callout ok"><strong>你會喜歡的事實</strong>
      v0 可以用自然語言生成可部署的 full‑stack app、也能整合 GitHub；你不用懂 git 指令也能用 PR 管理版本。 [Source](https://v0.app/docs/faqs)</div>

      <h2 id="share">你要『公開分享』這份手冊？</h2>
      <p>可以，而且我們不靠 Genspark 連結：你會把這個網站（就是你正在看的這個）當作「靜態網站」部署出去。請直接看 <a href="#/publish-this-handbook">把手冊變成公開網站</a>。</p>
    `,
    md: `# 首頁：你要做的是「會賠錢的系統」，不是漂亮頁面

> 一般商品電商（有運費/地址/出貨）不是作品集網站；上線後會遇到真實世界的麻煩：運費算錯會賠錢、後台權限錯會被亂改價格、出貨狀態錯會被客服追殺。

## 你該照的順序
1. **Figma AI**：把 UI 拆成可轉碼的 Frame（元件化） → /figma-ai
2. **v0**：匯入 Figma，先元件後頁面，再組流程 → /v0
3. **Claude Code**：只補齊關鍵後端（運費/地址/訂單/出貨/Email）與修 build → /claude-code
4. **Vercel**：上線並處理 env vars / domain / callback → /vercel-deploy
5. **Cowork**：自動化例行任務（待出貨清單、低庫存警示） → /cowork

## MVP 第一版只需要做到這些
- 商品列表、商品詳情、購物車、結帳（地址 + 配送方式 + 下單）
- 後台：商品/庫存、訂單列表、手動出貨（物流公司 + 單號）
- 運費：後台可設定 Shipping Methods，前台結帳可選
- Email：下單成功、出貨通知（含單號）

v0 可以生成可部署的 full-stack app，也能整合 GitHub PR 流程，你不用碰 git 指令。 [Source](https://v0.app/docs/faqs)

## 你要公開分享這份手冊？
看 /publish-this-handbook
`
  },

  {
    id: "figma-ai",
    route: "/figma-ai",
    nav: "Step 1｜Figma AI（實體商品 UI + 切 Frame）",
    title: "Step 1｜Figma AI：先把 UI 切對，不然 v0 轉碼會歪",
    meta: "重點：每個元件/區塊一個 Frame；先元件再組頁面。v0 官方也建議這樣做。",
    html: `
      <p>v0 官方建議：把設計拆小、先做元件、再迭代組裝成頁面。原因很簡單：一個 Frame 塞太多東西，AI 會開始瞎猜。 [Source](https://v0.app/docs/figma)</p>

      <div class="callout warn"><strong>不要做的事</strong>
      直接丟「一整個首頁 + 一整個結帳頁」給 v0，然後期待它一次生成完美可維護的系統。那通常只會得到一坨很難改的 UI。</div>

      <h2 id="frames">實體商品電商：建議切哪些 Frame（最小集合）</h2>
      <ul>
        <li><strong>商品卡</strong>：圖片、名稱、價格、促銷標籤、庫存狀態（In Stock / Low Stock / Sold Out）</li>
        <li><strong>商品詳情區塊</strong>：主圖、縮圖列、規格（可先不做 Variant）、加入購物車</li>
        <li><strong>購物車列項目</strong>：數量調整、移除、金額小計</li>
        <li><strong>地址表單</strong>：收件人、手機、縣市/區/地址、備註（這是最常壞的地方）</li>
        <li><strong>配送方式選擇</strong>：radio + 運費顯示 + 滿額免運提示</li>
        <li><strong>訂單狀態 Badge / Timeline</strong>：paid / packed / shipped / delivered</li>
        <li><strong>後台訂單列表</strong>：訂單編號、金額、狀態、建立時間、出貨按鈕</li>
        <li><strong>後台出貨表單</strong>：物流公司、單號、出貨日期、通知客戶</li>
      </ul>

      <h2 id="import">你做完 Frame 後，下一步就是匯入 v0</h2>
      <div class="figure">
        <img alt="v0 Figma option under attachment icon" src="https://sspark.genspark.ai/cfimages?u1=C42UEsV9U2nJTT%2BNz3yBIEcOx1pXnq%2FYdcHoLwrLnzINIYwC472YoHlGNPKAh0NZp0aeTxalT6kH50rj5WFqwPS%2FfMgQKTjkxKKVfzRQV4V2znyu%2FaqfGSX75K1MSEyizMml9CzqvRYq3jGM0H3OV4UoZi4xv%2FYaoNWZf2i3FV%2BkAA12lNUKQmNyOq5qYJNEKkkvwFg1ew%3D%3D&u2=kso84H4GMCoA%2Fyrw&width=1024" />
        <div class="figcap">圖 1：v0 的附件選單可以直接選 Figma 連結匯入（比截圖更準）。[Source](https://v0.app/docs/figma)</div>
      </div>
      <div class="figure">
        <img alt="v0 Figma integration modal" src="https://sspark.genspark.ai/cfimages?u1=gqObRp8N94Iz1i%2FqKvCTImyHDU8yWeApOcANlXLsnXgCDlfXJrgHyHo5Q4v%2FB4n%2F32NpRmTOm4CaegWSYiprSHMLKxJifE278kagIgRSrV%2F1EsBiVB2eM2FNP4CFBqNBOZrYdXEcMlI1VZuReE2%2F%2FZojf6Lihliva9mxjZCTK5ExT0rUNk142ElU1EZKdHjTs1wUvnTGeg%3D%3D&u2=kZRltmpChEJOWtXQ&width=1024" />
        <div class="figcap">圖 2：匯入前的 Figma 連結/授權視窗示意。先把 Frame 拆小能顯著提高轉碼品質。 [Source](https://v0.app/docs/figma)</div>
      </div>

      <div class="callout ok"><strong>結論</strong>
      你現在要的不是「好看」，是「可轉成可維護元件」。Frame 切對，後面每一步都省錢省命。</div>
    `,
    md: `# Step 1｜Figma AI：先把 UI 切對，不然 v0 轉碼會歪

v0 官方建議：把設計拆小、先做元件，再迭代組裝成頁面；Frame 太大會降低生成品質。 [Source](https://v0.app/docs/figma)

## 實體商品電商：建議切哪些 Frame（最小集合）
- 商品卡（含庫存狀態）
- 商品詳情區塊
- 購物車列項目
- 地址表單（收件人/手機/縣市區/地址/備註）
- 配送方式選擇（radio + 運費 + 滿額免運提示）
- 訂單狀態 Badge / Timeline（paid/packed/shipped/delivered）
- 後台訂單列表
- 後台出貨表單（物流公司 + 單號）

## 下一步：匯入 v0（用 Figma 連結，不要用截圖）
圖 1、圖 2 參考 v0 Figma 匯入說明。 [Source](https://v0.app/docs/figma)
`
  },

  {
    id: "v0",
    route: "/v0",
    nav: "Step 2｜v0（匯入 Figma → 可跑系統 + GitHub）",
    title: "Step 2｜v0：先元件後頁面，否則你會被自己生成的東西反噬",
    meta: "匯入 Figma、Projects/Folders、GitHub 自動 PR、Publish 到 Vercel（以及 env vars 的坑）。",
    html: `
      <h2 id="why-figma">為什麼用 Figma 匯入比截圖更準？</h2>
      <p>v0 的 Figma 匯入會分析 layout 與設計 token（顏色、間距），通常能比截圖更高保真。 [Source](https://v0.app/docs/figma)</p>

      <h2 id="workflow">你要採用的工作法：先元件，再組頁面</h2>
      <p>官方建議的拆法：先生成小元件、測試、再組合成完整頁面。你是電商，所以你會反覆用的元件至少要先做：<strong>地址表單</strong>、<strong>運費/配送方式區塊</strong>、<strong>訂單狀態 badge</strong>、<strong>後台出貨表單</strong>。 [Source](https://v0.app/docs/figma)</p>

      <div class="callout warn"><strong>新手最常死的點：把 secrets 推上 GitHub</strong>
      v0 可以整合 GitHub、自動建 branch/commit/PR，但 env vars 不會自動安全地跟著走；你要把密鑰放在 Vercel 的環境變數，而不是寫進程式或 README。 [Source](https://v0.app/docs/faqs)</div>

      <h2 id="projects">Projects / Folders：你不用懂，但你要會用</h2>
      <ul>
        <li><strong>Projects</strong>：對應「你的真實 App」（含部署、環境變數、網域）</li>
        <li><strong>Folders</strong>：只是整理聊天/任務（不影響部署）</li>
      </ul>
      <p>這是 v0 新版工作流的核心：多個聊天可以貢獻同一個 Project。 [Source](https://v0.app/docs/faqs)</p>

      <h2 id="github">GitHub 整合你只要記得 3 件事</h2>
      <ol>
        <li>v0 會自動為每個 chat 建 branch（像 v0/main-xxxx）</li>
        <li>每次代碼變更會自動 commit</li>
        <li>合併走 PR；main 受保護（避免你手滑把壞版本上線）</li>
      </ol>
      <p>這些是 v0 FAQ 明確寫的行為模式。 [Source](https://v0.app/docs/faqs)</p>

      <h2 id="publish">Publish 到 Vercel（你要的公開可用系統）</h2>
      <p>你可以在 v0 裡直接 Publish；但只要牽涉到登入/寄信/第三方服務，就要設定 env vars。否則你會遇到：本機/預覽能跑，一上線就壞。 [Source](https://v0.app/docs/faqs)</p>

      <h2 id="pricing">你問過錢：只講可驗證的</h2>
      <p>v0 Premium 是 $20/month，包含 $20 monthly credits、每日登入 $2 credits，並包含 Import from Figma；token 價格（Mini/Pro/Max）也在 pricing 頁。不要聽任何人亂估。 [Source](https://v0.app/pricing)</p>

      <div class="figure">
        <img alt="操作示意截圖" src="./assets/img-tKdZ85wp.png" />
        <div class="figcap">圖 3：操作示意截圖（用於對照你在工具介面中的位置）。</div>
      </div>
    `,
    md: `# Step 2｜v0：先元件後頁面

## 為什麼 Figma 匯入更準？
v0 的 Figma 匯入會分析 layout 與設計 token，通常比截圖更高保真。 [Source](https://v0.app/docs/figma)

## 工作法：先元件，再組頁面
電商會反覆用的元件至少先做：地址表單、運費/配送方式區塊、訂單狀態 badge、後台出貨表單。 [Source](https://v0.app/docs/figma)

## 新手最常死的點：secrets 推上 GitHub
v0 的 GitHub 整合會自動 branch/commit/PR；但 env vars 不會自動安全跟著走。密鑰要放 Vercel 的環境變數，別寫進程式或 README。 [Source](https://v0.app/docs/faqs)

## Projects / Folders
Projects = 你的真實 App（部署/環境變數/網域）；Folders = 整理聊天。 [Source](https://v0.app/docs/faqs)

## GitHub 整合三件事
1. 每個 chat 自動建 branch
2. 每次變更自動 commit
3. 用 PR 合併；main 受保護 [Source](https://v0.app/docs/faqs)

## Publish 到 Vercel
牽涉登入/寄信/第三方服務時要設定 env vars，不然上線必壞。 [Source](https://v0.app/docs/faqs)

## 價格只看官方
Premium $20/month；含 monthly credits、每日登入 credits、Import from Figma、以及 token 價格表。 [Source](https://v0.app/pricing)
`
  },

  {
    id: "claude-code",
    route: "/claude-code",
    nav: "Step 3｜Claude Code（運費可設定 + 手動出貨 + 可擴充物流）",
    title: "Step 3｜Claude Code：你不寫 code，但你要會下『會被執行的需求』",
    meta: "最小啟動 + 可複製貼上的提示詞套件（資料模型/運費後台/手動出貨/Email/權限）。",
    html: `
      <div class="callout ok"><strong>什麼時候用 Claude Code？</strong>
      v0 很強，但它常在「資料模型、權限、邊界條件（運費/庫存/地址驗證）」失手。你用 Claude Code 把這些補上，才能上線。 [Source](https://code.claude.com/docs/zh-TW/cli-reference)</div>

      <div class="callout warn"><strong>什麼時候不要用？</strong>
      只是想把按鈕換顏色、改排版？那留在 v0 做就好。你把 UI 小改都丟給 Claude Code，只會讓流程變慢。</div>

      <h2 id="minimal">最小啟動流程（只要複製貼上，不用懂）</h2>
      <ol>
        <li>先把 v0 專案 sync 到 GitHub（或下載/匯出程式碼）</li>
        <li>在專案資料夾打開終端機，輸入：<pre><code>claude</code></pre></li>
        <li>第一句話對 Claude Code 說：<pre><code>請先讀懂這個專案，列出：1) 入口點 2) 目前有哪些頁面 3) 哪些地方需要環境變數 4) 目前缺少什麼電商必備功能</code></pre></li>
      </ol>
      <p>Claude Code 的常用指令與參數都在官方 CLI 參考。 [Source](https://code.claude.com/docs/zh-TW/cli-reference)</p>

      <h2 id="prompt-pack">提示詞套件（一般商品：運費可後台設定 / 手動出貨 / 未來可串物流）</h2>
      <p>你可以直接把下面整段貼給 Claude Code（不要拆成一句一句，省你時間也省模型消耗）。</p>

      <pre><code id="pack">【目標】把這個專案補齊成「一般商品電商 MVP」：有運費、有收件地址、有出貨、有 Email 通知；我不會寫程式，請你直接改好並告訴我改了哪些檔案。

【資料模型（最小可行）】
- Product(id, title, slug, price, images, is_active)
- Inventory(product_id, quantity)
- Cart(id, user_id or session_id)
- CartItem(cart_id, product_id, qty)
- Address(id, user_id, recipient, phone, city, district, address1, address2?, note?)
- ShippingMethod(id, name, fee_amount, free_shipping_threshold?, region_scope: 'mainland'|'islands', is_active)
- Order(id, user_id, status: 'pending_payment'|'paid'|'packed'|'shipped'|'delivered'|'cancelled'|'refunded', subtotal, shipping_fee, total, shipping_method_id, address_snapshot_json)
- OrderItem(order_id, product_id, title_snapshot, price_snapshot, qty)
- Shipment(order_id, carrier_name, tracking_number, shipped_at, status, carrier_code?, tracking_url_template?, external_shipment_id?)

【運費規則（我要可在後台自己設定）】
- 後台可以 CRUD ShippingMethod：名稱、運費金額、滿額免運門檻（可選）、啟用/停用、適用區域（本島/離島）
- 結帳頁讓用戶選 ShippingMethod，並依選擇計算 shipping_fee 與 total
- 請加入基本驗證：fee_amount 不能為負數；free_shipping_threshold 若有也不能為負

【結帳流程（先不上金流，先可下單）】
- 流程：購物車 → 填地址 → 選配送方式 → 確認下單
- 付款先用「貨到付款/假付款」：下單後狀態先設為 'paid'（或提供一個簡單切換）

【後台（admin 角色）】
- Admin dashboard：
  1) Shipping Methods 管理
  2) 訂單列表（可篩狀態）
  3) 出貨登記：輸入物流公司與單號，將訂單狀態改為 'shipped'
  4) 庫存調整（避免 quantity 變負數）

【Email 通知】
- 下單成功寄信
- 出貨寄信（包含 carrier_name + tracking_number；tracking_url 若有就組出連結）
- 請把寄信的環境變數做檢查（缺少就清楚提示）

【權限與安全】
- 角色：admin/customer
- 後台所有 API/頁面都要做 server-side 權限檢查
- 禁止把任何密鑰寫進程式碼或提交到 git

【未來串物流的擴充點（先保留，不要真的串）】
- Shipment 預留 carrier_code、tracking_url_template、external_shipment_id
- 物流整合用 adapter/connector 概念：未來新增一個 shippingProvider 檔案即可接不同物流

【交付】
- 請直接修改程式碼與資料庫 schema（若有）
- 提供我：1) 你改了哪些檔案 2) 我需要新增哪些 env vars 3) 我怎麼在本機跑起來測試</code></pre>

      <div class="figure">
        <img alt="操作示意截圖" src="./assets/img-rd4FtLKf.png" />
        <div class="figcap">圖 4：操作示意截圖（對照你在工具介面中的位置）。</div>
      </div>
    `,
    md: `# Step 3｜Claude Code：提示詞套件（可直接貼）

Claude Code 適合用來補 v0 常失手的部分：資料模型、權限、運費/庫存/地址驗證、修 build。 [Source](https://code.claude.com/docs/zh-TW/cli-reference)

## 最小啟動（複製貼上）
- 在專案資料夾執行：\`claude\`
- 對它說：請先讀懂專案並列出入口點、頁面、需要的環境變數、缺少的電商必備功能。

## 提示詞套件（一般商品：運費可後台設定 / 手動出貨 / 可擴充物流）
（請見閱讀版中的整段提示詞，直接整段貼上最省事）
`
  },

  {
    id: "vercel-deploy",
    route: "/vercel-deploy",
    nav: "Step 4｜Vercel 部署（公開上線 + env vars 地雷）",
    title: "Step 4｜Vercel：上線不難，難的是『設定』",
    meta: "你會被 env vars / domain / callback / email deliverability 這些非程式問題卡住。",
    html: `
      <h2 id="publish">最短上線路徑</h2>
      <ol>
        <li>專案在 GitHub（v0 會幫你做 PR 流）[Source](https://v0.app/docs/faqs)</li>
        <li>Vercel 匯入 GitHub repo → Deploy</li>
        <li>到 Vercel 後台設定環境變數（寄信、資料庫、OAuth…）[Source](https://v0.app/docs/faqs)</li>
      </ol>

      <div class="callout warn"><strong>新手地雷 1：env vars 沒設，或設錯</strong>
      你會看到「預覽能跑、正式壞掉」。這通常不是程式，是環境變數。v0 FAQ 也明確說 env vars 會在 Vars panel / Vercel settings 管。 [Source](https://v0.app/docs/faqs)</div>

      <div class="callout warn"><strong>新手地雷 2：網域與（若有）OAuth callback URL</strong>
      你只要改了 domain，OAuth callback 就要跟著改；不然登入會壞。這種錯不是 bug，是設定沒跟上。</div>

      <div class="callout warn"><strong>新手地雷 3：寄信進垃圾信</strong>
      這不是你能靠「改幾行程式」解決的問題，通常需要你在寄信服務做網域驗證（例如 SPF/DKIM 之類）。你先把流程跑通，再來處理送達率。</div>

      <h2 id="nextjs">背景知識（不用背，但要知道你不是被綁死）</h2>
      <p>Next.js 可以用 Node server、Docker、靜態匯出等方式部署；Vercel 只是其中最省事的一條路。 [Source](https://nextjs.org/docs/app/getting-started/deploying)</p>

      <div class="figure">
        <img alt="操作示意截圖" src="./assets/img-ekmjdVzI.png" />
        <div class="figcap">圖 5：操作示意截圖（部署/設定相關流程對照）。</div>
      </div>
    `,
    md: `# Step 4｜Vercel：上線不難，難的是設定

## 最短上線路徑
1. GitHub repo（v0 PR 工作流）[Source](https://v0.app/docs/faqs)
2. Vercel 匯入 repo → Deploy
3. 設定 env vars（寄信/資料庫/OAuth…）[Source](https://v0.app/docs/faqs)

## 三個新手地雷
- env vars 沒設或設錯 → 預覽能跑、正式壞
- domain 改了 → OAuth callback 也要改
- 寄信進垃圾信 → 通常要做寄信服務的網域驗證

Next.js 可用 Node/Docker/靜態等方式部署；Vercel 只是最省事的一條路。 [Source](https://nextjs.org/docs/app/getting-started/deploying)
`
  },

  {
    id: "cowork",
    route: "/cowork",
    nav: "Step 5｜Cowork（例行任務自動化 + 安全）",
    title: "Step 5｜Cowork：它很像『會做事的助理』，但也更危險",
    meta: "適合：整理檔案、產出報表、例行檢查。重點：最小權限；電腦醒著+Desktop 開著才會跑。",
    html: `
      <p>Cowork 把 Claude Code 的 agentic 能力帶到 Desktop，能執行多步驟任務、甚至排程。 [Source](https://support.claude.com/en/articles/13345190-get-started-with-cowork)</p>

      <div class="callout warn"><strong>硬限制：不開著就不會跑</strong>
      排程任務只有在「你的電腦醒著」且「Claude Desktop 開著」時才會執行。你以為它像雲端 cron？不是。 [Source](https://support.claude.com/en/articles/13345190-get-started-with-cowork)</div>

      <div class="callout bad"><strong>安全底線：最小權限</strong>
      Cowork 可以讀寫（甚至刪除）你授權的檔案，也可能被網頁內容誘導（prompt injection）。官方安全建議：只給專用資料夾、避免敏感檔、監控任務範圍。 [Source](https://support.claude.com/en/articles/13364135-use-cowork-safely)</div>

      <h2 id="instructions">建議的 Folder instructions（可複製）</h2>
      <pre><code>你是我的電商營運助理。
規則：
1) 只能在 /handbook-workspace/ 這個資料夾內讀寫檔案。
2) 不要觸碰任何密鑰/憑證/金流資料。
3) 任何輸出都要放到 /handbook-workspace/outputs/ 並附上日期。</code></pre>

      <h2 id="schedule">/schedule 範例（你要的電商版本）</h2>
      <ul>
        <li><strong>每日 9:00</strong>：產出「昨日訂單摘要 + 待出貨清單」到 outputs/（CSV 或 Markdown）</li>
        <li><strong>每週一</strong>：產出「低庫存警示」清單（quantity &lt; 5）</li>
      </ul>
      <p>排程方式可在 Cowork 任務中輸入 <code>/schedule</code>，或在側邊欄的 Scheduled 管理。 [Source](https://support.claude.com/en/articles/13345190-get-started-with-cowork)</p>

      <div class="figure">
        <img alt="Genspark 任務畫面截圖" src="./assets/img-g9fPHEZb.png" />
        <div class="figcap">圖 6：示意截圖（不同平台 UI 可能不同；重點是你要建立『固定輸出資料夾』的習慣）。</div>
      </div>
    `,
    md: `# Step 5｜Cowork：自動化例行任務（但要守安全）

Cowork 讓 Claude 在 Desktop 執行多步驟任務與排程。 [Source](https://support.claude.com/en/articles/13345190-get-started-with-cowork)

- 排程只會在「電腦醒著 + Claude Desktop 開著」時跑。 [Source](https://support.claude.com/en/articles/13345190-get-started-with-cowork)
- 安全：最小權限、只給專用資料夾、避免敏感檔，警惕 prompt injection。 [Source](https://support.claude.com/en/articles/13364135-use-cowork-safely)

## /schedule 範例
- 每日 9:00：昨日訂單摘要 + 待出貨清單
- 每週一：低庫存警示
`
  },

  {
    id: "publish-this-handbook",
    route: "/publish-this-handbook",
    nav: "費用與注意事項",
    title: "把這份互動手冊變成你自己的公開網站",
    meta: "三條路：最簡單（直接分享）→ 正式（GitHub + Vercel）→ 自訂網域。",
    html: `
      <div class="callout ok"><strong>你要的答案</strong>
      可以。這份手冊本質上是一個「純靜態網站」（HTML/CSS/JS），你可以放到任何靜態主機：Vercel、Netlify、GitHub Pages… 都行。</div>

      <h2 id="option-a">方案 A：直接分享平台連結（最快，但你說這不是你要的）</h2>
      <p>它快，但不代表最適合。你想要「公開、你可控」就看方案 B。 </p>

      <h2 id="option-b">方案 B：GitHub → Vercel（最推薦的公開方式）</h2>
      <ol>
        <li>把本網站的檔案（index.html / css / js / assets）放進 GitHub repo（拖曳上傳也行）</li>
        <li>到 Vercel：Import Git Repository → 選你的 repo → Deploy</li>
        <li>完成後你會拿到一個公開網址（xxx.vercel.app）</li>
      </ol>
      <p>Next.js 有多種部署方式，但「靜態網站」部署會更簡單，因為不需要 build。 [Source](https://nextjs.org/docs/app/getting-started/deploying)</p>

      <div class="callout warn"><strong>超重要：不要把任何 API Key 放進 repo</strong>
      這份手冊網站本身不需要 API key。你要公開分享，最安全的方式就是「讓 repo 裡完全沒有 secrets」。</div>

      <h2 id="option-c">方案 C：自訂網域（handbook.yourbrand.com）</h2>
      <p>在 Vercel 的 Domain 設定綁定你的網域即可。你不需要理解 DNS 細節，但你需要願意照著介面步驟做。</p>

      <h2 id="download">我已經幫你把『可公開的靜態網站檔』打包好</h2>
      <p>你可以直接下載 zip，丟到 GitHub → Vercel。這才是你要的「不靠平台專案連結」的公開網站。</p>

      <div class="figure">
        <img alt="操作示意截圖" src="./assets/img-vWKA9eg1.png" />
        <div class="figcap">圖 7：操作示意截圖（用於對照你在工具介面中的位置）。</div>
      </div>
    `,
    md: `# 把手冊變成公開網站（不靠平台專案連結）

這份手冊本質上是「純靜態網站」（HTML/CSS/JS），可部署到 Vercel/Netlify/GitHub Pages。

## 方案 B（推薦）：GitHub → Vercel
1. 把網站檔案上傳到 GitHub repo（可直接拖曳上傳）
2. Vercel Import repo → Deploy
3. 拿到公開網址（xxx.vercel.app）

靜態網站部署通常比 Next.js server 部署更簡單。 [Source](https://nextjs.org/docs/app/getting-started/deploying)

## 安全提醒
不要把任何 API Key/密鑰放進手冊或 repo。這份手冊網站本身不需要 secrets。
`
  },

  {
    id: "troubleshooting",
    route: "/troubleshooting",
    nav: "故障排除（運費/地址/庫存/出貨/Email）",
    navVisible: false,
    title: "故障排除：你會遇到的都不是『罕見問題』",
    meta: "把問題當作清單處理：症狀 → 可能原因 → 檢查順序。",
    html: `
      <h2 id="shipping">運費算錯 / 前台沒更新</h2>
      <ul>
        <li>後台 fee 設成負數？（應該被驗證擋掉）</li>
        <li>你改了 ShippingMethod 但前台還顯示舊的：先重整、再確認部署的版本是不是最新</li>
      </ul>

      <h2 id="address">地址表單驗證壞掉</h2>
      <ul>
        <li>最常見：欄位名稱對不上（city/district/address1）</li>
        <li>手機格式驗證太嚴格，導致不能下單</li>
      </ul>

      <h2 id="inventory">庫存變負數</h2>
      <p>如果沒有在建立訂單時「扣庫存」且加上保護（quantity 不得小於 0），你一定會遇到。這是電商必修。</p>

      <h2 id="shipment">出貨狀態沒更新 / Email 沒寄</h2>
      <ul>
        <li>後台出貨流程是否同時更新 order.status = shipped？</li>
        <li>寄信環境變數缺少（上線後最常見）</li>
        <li>寄了但進垃圾信：先確定真的有寄出，再處理送達率</li>
      </ul>

      <h2 id="preview">Preview 能跑，上線壞</h2>
      <p>九成是 env vars。請回去看 Vercel 章節的地雷 1。 [Source](https://v0.app/docs/faqs)</p>
    `,
    md: `# 故障排除

## 運費算錯 / 前台沒更新
- 檢查 fee 是否可能為負數（應該被驗證擋掉）
- 確認部署版本是否最新（常見：你以為上線了，其實是舊版）

## 地址驗證
- 欄位名稱是否一致（city/district/address1）
- 手機驗證是否過嚴

## 庫存變負數
建立訂單扣庫存時要保護 quantity >= 0，否則必炸。

## 出貨狀態/Email
- 出貨是否更新 order.status
- env vars 是否缺少
- 垃圾信問題先放後面，先確認真的寄出

Preview 能跑、上線壞：常見是 env vars。 [Source](https://v0.app/docs/faqs)
`
  },

  {
    id: "checklist",
    route: "/checklist",
    nav: "上線前檢查清單（實體商品版）",
    navVisible: false,
    title: "上線前檢查清單：這份清單能幫你少賠很多錢",
    meta: "照做就好，不要憑感覺。",
    html: `
      <h2 id="security">安全與權限</h2>
      <ul>
        <li>後台必須只有 admin 能進（server-side 檢查，不是只藏連結）</li>
        <li>任何密鑰都只放 env vars，不放 repo、不放手冊</li>
      </ul>

      <h2 id="shipping">運費與配送</h2>
      <ul>
        <li>後台可設定 Shipping Methods（啟用/停用、費用、滿額免運）</li>
        <li>運費不會算出負數；滿額免運門檻不會是負數</li>
        <li>結帳頁選配送方式會正確更新 total</li>
      </ul>

      <h2 id="orders">訂單與出貨</h2>
      <ul>
        <li>下單會建立 Order + OrderItems + address snapshot</li>
        <li>後台出貨：填 carrier + tracking number 後，狀態會變 shipped</li>
        <li>未來擴充欄位已預留：carrier_code / tracking_url_template / external_shipment_id</li>
      </ul>

      <h2 id="email">Email</h2>
      <ul>
        <li>下單成功信（測試帳號收到）</li>
        <li>出貨通知信（含單號）</li>
        <li>垃圾信：先確認真的寄出，再追送達率</li>
      </ul>

      <h2 id="ops">備份與營運</h2>
      <ul>
        <li>你有匯出訂單/客戶資料的方式（至少 CSV）</li>
        <li>客服 SOP：取消/退款/改地址 的流程</li>
      </ul>

      <div class="callout ok"><strong>你是自己學習用</strong>
      所以更要靠 checklist，避免「我以為沒問題」這種最貴的錯。</div>
    `,
    md: `# 上線前檢查清單（實體商品版）

## 安全與權限
- 後台只有 admin 能進（server-side 檢查）
- 密鑰只放 env vars，不放 repo/手冊

## 運費與配送
- 後台可設定 Shipping Methods
- 運費/滿額免運門檻不會是負數
- 結帳選配送方式會正確更新 total

## 訂單與出貨
- 下單建立 Order/OrderItems/address snapshot
- 出貨填單號後狀態更新為 shipped
- 預留擴充欄位：carrier_code / tracking_url_template / external_shipment_id

## Email
- 下單成功、出貨通知都能收到

## 備份與營運
- 可匯出訂單（CSV）
- 客服 SOP（取消/退款/改地址）
`
  }
];
