import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（zh-tw・eta）2026-11-15 バッチ2。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。
// ⚠️ 台湾旅券は「国民身分証番号（國民身分證統一編號）が記載されたもの」に限り ETA 対象。記載が無ければビザ。適用資格に触れる箇所は全てこの条件を残す。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "who-needs-an-eta",
    group: "eta",
    title: "誰需要 UK ETA？適用國籍與豁免對象｜台灣護照的條件 2026",
    description: "誰需要申請 UK ETA、誰可以豁免：英國與愛爾蘭公民、持居留許可者、空側轉機旅客等。台灣護照須載有國民身分證統一編號才適用 ETA。",
    h1: "誰需要 UK ETA？",
    lead: "免簽證國家與地區的旅客，前往英國短期停留（觀光、商務、短期進修）時需要 UK ETA。每一位旅客都要有自己的 ETA，嬰兒與兒童也不例外。台灣護照須載有國民身分證統一編號，才適用 ETA。",
    card: "哪些人要申請 ETA、哪些人可以豁免——含台灣護照的適用條件",
    sections: [
      { h: "ETA 適用於哪些人", blocks: [
        "免簽證國家與地區的旅客，前往英國短期停留——觀光、商務出差或短期進修——時需要 ETA。",
        { note: "台灣護照可以申請 UK ETA，但前提是護照上載有台灣的國民身分證統一編號。沒有記載的話，會被視為需要簽證的國籍，必須改辦簽證。不確定時，請用 GOV.UK 的 [Check if you need a UK visa](https://www.gov.uk/check-uk-visa) 確認。" },
        { note: "每一位旅客都需要自己的 ETA，嬰兒與兒童也一樣。" },
      ] },
      { h: "哪些人不需要 ETA", blocks: [
        { ul: [
          "英國與愛爾蘭公民（持英國或愛爾蘭護照）",
          "已取得在英國居住、工作或就學許可的人（例如持簽證，或具有 settled／pre-settled status）",
          "持 British Overseas Territories Citizen 或 British National (Overseas) 護照的人",
          "居住在愛爾蘭、並從愛爾蘭、根西島、澤西島或曼島前往英國的人",
          "在機場空側（airside）轉機、不通過邊境檢查的旅客",
          "依 EU Settlement Scheme 提出申請、正在等待結果的人",
        ] },
      ] },
      { h: "您應該知道的事", blocks: [
        { ul: [
          "具有英國或愛爾蘭國籍的人無法取得 ETA，應持該國籍的證件入境。",
          "若您的國籍不屬於免簽證對象，可能需要辦簽證：請用 GOV.UK 官方工具 [Check if you need a UK visa](https://www.gov.uk/check-uk-visa) 確認。",
          "嬰兒與兒童也需要各自的 ETA。",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      { label: "GOV.UK – Check when you can get an ETA", url: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "eta-vs-visa": {
    slug: "eta-or-visa",
    group: "eta",
    title: "UK ETA 和簽證有什麼不同？｜2026",
    description: `UK ETA 與簽證的差別：ETA 可停留最多 ${F.staySixMonths} 個月，用於觀光、商務與短期進修，不能工作或定居。台灣護照須載有身分證統一編號才適用。`,
    h1: "UK ETA 和簽證的差別",
    lead: "UK ETA 不是簽證，而是給免簽證國家與地區旅客的旅行許可。它不保證一定能入境——最終由邊境官員決定。台灣護照須載有國民身分證統一編號才適用 ETA，否則要辦簽證。",
    card: "ETA 可以做什麼、什麼時候必須改辦簽證",
    sections: [
      { h: `持 ETA 可以做的事（最多 ${F.staySixMonths} 個月）`, blocks: [
        { ul: [
          "觀光、探訪親友",
          "商務出差（business）",
          "短期進修（short-term study）",
          "需要通過邊境檢查的轉機",
          "Permitted paid engagement；以及依 Creative Worker concession 從事最多 3 個月的活動",
        ] },
      ] },
      { h: "持 ETA 不能做的事", blocks: [
        { ul: [
          `停留超過 ${F.staySixMonths} 個月`,
          "為英國公司從事有薪或無薪工作，或以自僱身分工作（上述例外除外）",
          "領取公共資金（public funds）",
          "以頻繁、反覆的入境實際上在英國定居",
          "辦理結婚或伴侶登記（需要 Marriage Visitor 簽證）",
        ] },
      ] },
      { h: "台灣護照要先確認的事", blocks: [
        "護照上沒有國民身分證統一編號的台灣護照持有人，不適用 ETA，即使是上述短期停留，也需要事先辦理簽證。請翻開護照資料頁確認；不確定時請用 [Check if you need a UK visa](https://www.gov.uk/check-uk-visa) 查詢。",
      ] },
    ],
    sources: [
      { label: "GOV.UK – What you can and cannot do with an ETA", url: "https://www.gov.uk/eta/what-you-can-cannot-do" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "standard-visitor-visa": {
    slug: "uk-standard-visitor-visa",
    group: "eta",
    title: "英國 Standard Visitor 簽證：ETA 不適用時怎麼辦",
    description: "UK ETA 被拒（無法申訴），或您的護照不適用 ETA（例如未載有身分證統一編號的台灣護照），就要申請 Standard Visitor 簽證。費用、審核時間與申請步驟。",
    h1: "英國 Standard Visitor 簽證：ETA 不適用時",
    lead: "如果 UK ETA 申請被拒（無法申訴），或您的國籍需要簽證，就必須申請 Standard Visitor 簽證才能前往英國。台灣護照若未載有國民身分證統一編號，也屬於這種情況。以下依 GOV.UK 的資料整理。",
    card: "簽證費用（£135 起）、審核時間與申請步驟",
    sections: [
      { h: "哪些人需要辦簽證，而不是 ETA", blocks: [
        { ul: [
          "國籍屬於前往英國需要簽證的人（不適用 ETA）。台灣護照未載有國民身分證統一編號者，也被視為需要簽證。",
          "ETA 申請被拒的人——無法持 ETA 前往英國，必須改辦簽證。",
          "需要哪一種簽證，請用 GOV.UK 的工具「Check if you need a UK visa」確認：[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa)。",
        ] },
      ] },
      { h: "費用（GOV.UK）", blocks: [
        { table: { head: ["簽證", "費用"], rows: [
          ["Standard Visitor（最多 6 個月）", "£135"],
          ["長期簽證——2 年", "£506"],
          ["長期簽證——5 年", "£903"],
          ["長期簽證——10 年", "£1,128"],
          ["轉機簽證", "£74.50"],
        ] } },
        "長期簽證可多次入境，但每次停留仍以 6 個月為上限。金額依 GOV.UK 公布資料，可能變動。",
      ] },
      { h: "審核時間、效期與停留期間", blocks: [
        { ul: [
          "結果：通常在簽證中心辦理生物特徵登錄後 3 週內。",
          "停留：每次最多 6 個月。",
          "申請時機：最早可在出發前 3 個月申請。",
        ] },
      ] },
      { h: "申請步驟（GOV.UK）", blocks: [
        { ul: [
          "1. 線上申請（可以先儲存，之後再完成）。",
          "2. 預約簽證申請中心。",
          "3. 前往申請中心確認身分、登錄生物特徵（指紋與照片），並提交文件。",
          "4. 結果以電子郵件通知；護照在申請中心領回。",
        ] },
        "需要準備的資料包括：",
        { ul: [
          "有效護照（須在整個停留期間內有效）",
          "旅行日期、住宿與預估花費",
          "目前住址，以及在該處居住多久",
          "年收入（如適用）與雇主資料（如適用）",
          "如有犯罪紀錄或移民相關紀錄，須一併說明",
          "非英文或威爾斯文文件的認證翻譯",
        ] },
        { note: "本站是獨立的資訊網站，並非政府網站。資訊與費用可能變動——申請前請務必在 GOV.UK 確認官方資訊。" },
      ] },
    ],
    faq: [
      { q: "什麼情況下要辦 Standard Visitor 簽證，而不是 ETA？", a: "當您的國籍前往英國需要簽證（包括未載有國民身分證統一編號的台灣護照），或 ETA 申請被拒時。ETA 的決定無法申訴——若要前往英國，必須申請對應的簽證。" },
      { q: "Standard Visitor 簽證要多少錢？", a: "依 GOV.UK，最多 6 個月的簽證為 £135。長期簽證：£506（2 年）、£903（5 年）、£1,128（10 年）。轉機簽證為 £74.50。" },
      { q: "審核要多久？", a: "通常在簽證中心辦理生物特徵登錄後 3 週內會有結果。" },
      { q: "可以在英國停留多久？", a: "一般每次最多停留 6 個月。" },
    ],
    sources: [
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "expiration": {
    slug: "when-eta-expires",
    group: "eta",
    title: "UK ETA 何時到期？什麼時候要重新申請｜2026",
    description: `UK ETA 在核准 ${F.validYears} 年後到期，若護照較早到期則隨護照失效。換發新護照、更改姓名或個人情況改變時，都要重新申請。到期日的查詢方式也一併說明。`,
    h1: "UK ETA 何時到期，什麼時候要重新申請",
    lead: `UK ETA 自核准日起 ${F.validYears} 年內有效，或到護照到期為止——以較早者為準。許可到期或換發新護照時，都需要重新申請。`,
    card: "到期規則，以及必須重新申請 ETA 的情況",
    sections: [
      { h: "效期規則重點", blocks: [
        `效期的詳細說明請見 [UK ETA 的效期有多久](/zh-tw/validity/)。重點整理如下（GOV.UK）：`,
        { ul: [
          `自核准日起 ${F.validYears} 年內有效`,
          "護照到期時隨之失效（若護照較早到期）",
          "效期內可多次入境英國",
          `每次停留最多 ${F.staySixMonths} 個月`,
          "ETA 與特定一本護照綁定",
        ] },
      ] },
      { h: "什麼時候要重新申請 ETA？", blocks: [
        "以下情況需要重新申請 UK ETA：",
        { ul: [
          `ETA 核准後已滿 ${F.validYears} 年`,
          "換發了新護照",
          "姓名有所變更",
          "個人情況改變，影響是否符合 ETA 資格",
        ] },
      ] },
      { h: "ETA 快到期了，還能出發嗎？", blocks: [
        "UK ETA 必須在入境英國時有效。它不需要在整個停留期間都有效——重點是抵達當天仍在效期內。不過，仍建議及早重新申請。",
      ] },
      { h: "如何查詢到期日？", blocks: [
        "依 GOV.UK，可以在 gov.uk/eta 線上查詢（Check your ETA）：可確認是否持有 ETA，以及何時到期。另請參考 [查詢 UK ETA 的狀態](/zh-tw/status-check/)。",
      ] },
      { h: "ETA 還在效期內就換了護照，會怎樣？", blocks: [
        `ETA 與特定一本護照綁定。換發新護照時（例如舊護照到期或因姓名變更），必須重新申請 ETA，並再次支付 ${F.fee}。舊的 ETA 會失效。`,
        { note: `建議：至少在預定出發日前 ${F.decisionDays} 個工作天提出 UK ETA 申請，預留審核所需的時間。` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "children-family": {
    slug: "children-and-families",
    group: "eta",
    title: "兒童與家庭的 UK ETA：嬰兒也要申請嗎？｜2026",
    description: "嬰兒與兒童也需要各自的 UK ETA。可以用對方的護照與臉部照片代為申請。台灣護照須載有國民身分證統一編號才適用 ETA，孩子的護照也要確認。",
    h1: "兒童與家庭的 UK ETA",
    lead: "每一位旅客，包括嬰兒與兒童，都需要自己的 UK ETA。您可以代他人提出申請。台灣護照須載有國民身分證統一編號才適用 ETA，請連同孩子的護照一起確認。",
    card: "家人每人一份 ETA——如何代家人申請",
    sections: [
      { h: "為全家申請", blocks: [
        { ul: [
          "每一位旅客都需要自己的 ETA，兒童與嬰兒也一樣",
          "可以代他人申請：本人在場時可用 App，否則請在網站上申請（需要對方的護照與臉部照片）",
          "列在 France-UK school trip travel information form 上的兒童，不需要 ETA",
        ] },
        { note: "台灣護照適用 ETA 的前提，是護照上載有國民身分證統一編號；每位家人的護照都要個別確認。沒有記載的人需要辦簽證，詳見 [Check if you need a UK visa](https://www.gov.uk/check-uk-visa)。" },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "eta-refused": {
    slug: "eta-refused",
    group: "eta",
    title: "UK ETA 被拒怎麼辦？接下來的選擇｜2026",
    description: "UK ETA 被拒無法申訴。若仍要前往英國，必須改為申請合適的簽證。整理 2026 年被拒後可以採取的做法，以及 Standard Visitor 簽證的申請方向。",
    h1: "UK ETA 被拒：接下來怎麼辦？",
    lead: "UK ETA 申請被拒時，無法提出申訴（appeal）。若仍要前往英國，必須申請簽證。",
    card: "被拒無法申訴——下一步是辦簽證",
    sections: [
      { h: "被拒之後該做什麼", blocks: [
        { ul: [
          "ETA 被拒沒有申訴管道",
          "若要前往英國，必須申請合適的簽證",
          "請在 GOV.UK 確認哪一種簽證符合您的旅行目的",
        ] },
      ] },
      { h: "下一步：Standard Visitor 簽證", blocks: [
        "ETA 被拒後，簽證是前往英國的唯一途徑。費用（£135）、審核時間與申請流程，請見 [英國 Standard Visitor 簽證](/zh-tw/uk-standard-visitor-visa/)。",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet（2026 年 4 月）", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "common-mistakes",
    group: "eta",
    title: "UK ETA 申請的常見錯誤與官方 App｜2026",
    description: "UK ETA 申請常見的錯誤：資料與護照不符、照片不符要求、付款方式，以及冒充政府的假網站。送出前的確認重點，並請使用官方「UK ETA」App。",
    h1: "常見錯誤與 UK ETA App",
    lead: "許多問題都出在填寫的資料與護照不一致。請一律使用官方「UK ETA」App，並在送出前再次核對資料。",
    card: "護照資料、照片、付款與詐騙網站——避開這些錯誤",
    sections: [
      { h: "應避免的錯誤", blocks: [
        { ul: [
          "資料必須與護照完全一致：只要有出入，就可能延誤或被拒",
          "需要的照片：臉部以及護照所有頁面，須清晰、正確",
          `付款（${F.fee}）：Apple Pay／Google Pay／信用卡（Amex、JCB、Mastercard、Visa）；可能需要 3D Secure 驗證`,
          "需要生物辨識護照（有 ePassport 標誌）才能讀取晶片",
          "小心冒充政府、收取較高費用的假網站：只使用 GOV.UK",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "official-gov-uk-site",
    group: "eta",
    title: "UK ETA 的 GOV.UK 官方網站——如何分辨假網站",
    description: "申請 UK ETA 的官方管道只有 GOV.UK 網站與官方 App。教您從網址、費用與宣傳用語分辨假網站，避免被加收額外費用的詐騙。",
    h1: "申請 UK ETA 的 GOV.UK 官方網站",
    lead: "UK ETA 可以在英國政府的官方網站或官方行動應用程式申請。",
    card: "官方網址、警訊，以及官方 App",
    sections: [
      { h: "官方網址", blocks: [
        "UK ETA 官方頁面：[www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)。.gov.uk 網域代表這是英國政府的官方網站。",
      ] },
      { h: "如何辨識官方網站？", blocks: [
        { ul: [
          "網址包含 gov.uk（英國政府網域）",
          "網站由 Home Office 營運",
          `費用正好是 ${F.fee}`,
          "網站採用 GOV.UK 特有的黑白設計",
          "不會收取「加速處理」的費用",
        ] },
      ] },
      { h: "如何辨識假網站？", blocks: [
        { note: "警訊：網址不含 gov.uk · 費用明顯高於 " + F.fee + " · 標榜「保證核准」 · 提供「加速處理」 · 廣告強勢或彈出視窗干擾 · 沒有 GOV.UK 標誌。" },
      ] },
      { h: "官方行動應用程式", blocks: [
        "UK ETA 也可以透過官方行動應用程式「UK ETA」申請：",
        { ul: [
          "iOS：在 App Store 搜尋「UK ETA」（發行者：Home Office）",
          "Android：在 Google Play 搜尋「UK ETA」（發行者：Home Office）",
        ] },
      ] },
      { h: "其他實用的官方頁面", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa)——確認前往英國是否需要簽證",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor)——觀光簽證資訊",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
    ],
  },

  "mobile-app": {
    slug: "uk-eta-app",
    group: "eta",
    title: "官方 UK ETA App：用手機申請｜iOS 與 Android 2026",
    description: "使用官方 UK ETA App，可以直接用手機申請。下載方式、支援的 iOS／Android 版本、需要準備的東西（護照與臉部照片），以及 NFC 掃描與申請流程。",
    h1: "UK ETA 行動應用程式",
    lead: "英國政府提供官方行動應用程式「UK ETA」，可以直接用智慧型手機送出申請。持台灣護照者，須護照上載有國民身分證統一編號才適用 ETA。",
    card: "下載、裝置需求、NFC 掃描護照與申請步驟",
    sections: [
      { h: "關於 UK ETA App", blocks: [
        "UK ETA App 是 Home Office 用來申請電子旅行許可的官方工具。這是建議的申請方式，因為可以透過 NFC 掃描護照，自動帶入資料。",
        { note: "台灣護照須載有國民身分證統一編號才能申請 ETA；沒有記載的話需要辦簽證，請先用 [Check if you need a UK visa](https://www.gov.uk/check-uk-visa) 確認。" },
      ] },
      { h: "支援平台", blocks: [
        { ul: [
          "iOS（App Store）——Apple 裝置（iPhone）適用。需要 iOS 16 以上。",
          "Android（Google Play）——Android 裝置適用。需要 Android 12 以上，並支援 NFC。",
        ] },
        "請搜尋「UK ETA」，發行者為 Home Office。",
      ] },
      { h: "App 的功能", blocks: [
        { ul: [
          "提出新的 UK ETA 申請",
          "掃描生物辨識護照（NFC + OCR）",
          "拍攝臉部照片（自拍）以驗證身分",
          "查詢既有申請的狀態",
          "以信用卡、Apple Pay 或 Google Pay 付款",
          "狀態變更時的推播通知",
        ] },
      ] },
      { h: "如何用 App 申請？", blocks: [
        { ul: [
          "1. 從 App Store 或 Google Play 下載「UK ETA」App",
          "2. 建立帳號（電子郵件地址與密碼）",
          "3. 掃描生物辨識護照（將手機貼近護照）",
          "4. 拍攝臉部照片（自拍）",
          "5. 回答表單中的問題",
          `6. 支付 ${F.fee}`,
          "7. 送出申請，等待結果",
        ] },
      ] },
      { h: "掃描護照（NFC）", blocks: [
        "App 使用 NFC（Near Field Communication，近場通訊）技術，讀取護照生物辨識晶片中的資料。掃描方式如下：",
        { ul: [
          "翻開護照的照片頁",
          "將手機背面貼在翻開的護照上",
          "保持不動 5–10 秒",
          "等待 App 確認資料已讀取完成",
        ] },
      ] },
      { h: "使用 App 的好處", blocks: [
        { ul: [
          "以 NFC 掃描護照——資料自動帶入",
          "比網站申請更快",
          "申請狀態的推播通知",
          "生物辨識保護（Face ID／Touch ID）",
        ] },
        { note: "注意：請確認下載的是官方 App。在應用程式商店確認發行者為「Home Office」。假冒的 App 可能竊取個人資料。" },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "transit": {
    slug: "transit-through-the-uk",
    group: "eta",
    title: "經英國轉機需要 UK ETA 嗎？｜2026",
    description: "在英國轉機需要 UK ETA 嗎？通過邊境檢查（陸側 landside）需要；不通過護照查驗直接轉機（空側 airside）則不需要。台灣護照的條件也一併說明。",
    h1: "經英國轉機——需要 UK ETA 嗎？",
    lead: "只有在英國機場通過邊境檢查後才繼續旅程（陸側 landside）時，轉機才需要 UK ETA。不通過邊境檢查直接轉機（空側 airside）則不需要 ETA。不確定時，請詢問航空公司。",
    card: "空側或陸側：什麼情況下轉機需要 ETA",
    sections: [
      { h: "轉機規則", blocks: [
        "自 2025 年 4 月 2 日起，歐盟公民經英國轉機時，若在機場通過邊境檢查（陸側轉機，landside transit），需要 UK ETA；不通過邊境檢查的轉機（空側轉機，airside transit）則不需要 ETA。不確定時，請詢問航空公司。",
        { ul: [
          "陸側轉機（通過邊境檢查）：需要 ETA",
          "空側轉機（不經護照查驗）：不需要 ETA",
          "依官方說明資料（factsheet），在希斯洛（Heathrow）或曼徹斯特（Manchester）轉機、不通過英國護照查驗的旅客，目前不需要 ETA",
          "轉機類型請務必向航空公司確認",
        ] },
        { note: "持台灣護照者，須護照上載有國民身分證統一編號才適用 ETA；沒有記載的話屬於需要簽證的國籍，轉機時的規定請以 [Check if you need a UK visa](https://www.gov.uk/check-uk-visa) 查詢結果為準。" },
      ] },
      { h: "轉機的類型", blocks: [
        { table: { head: ["類型", "實際情形", "需要 ETA 嗎？"], rows: [
          ["空側轉機（在機場內）", "在機場內轉機，不通過邊境檢查。若不確定是否要通過邊境檢查，請詢問航空公司。", "不需要"],
          ["陸側轉機", "繼續旅程前會通過邊境檢查，例如提領行李或在飯店過夜。此時在法律上等於入境英國。", "需要"],
        ] } },
        "只要在英國機場通過邊境檢查，不論轉機時間多短，都需要 UK ETA。不通過邊境檢查直接轉機（空側）則不需要 ETA。",
      ] },
      { h: "轉機時免除 ETA 的對象", blocks: [
        "轉機時可免除 ETA 的情況很少：",
        { ul: [
          "愛爾蘭公民（共同旅行區 CTA）",
          "持有效英國簽證的人",
          "在英國具有長期居留身分的人（settled／pre-settled status）",
        ] },
      ] },
      { h: "如何避免轉機時需要 ETA？", blocks: [
        "若不想申請 UK ETA，可以選擇不經過英國的航線，例如：",
        { ul: [
          "直飛目的地",
          "在歐盟國家轉機（阿姆斯特丹、法蘭克福、巴黎）",
          "在都柏林轉機（愛爾蘭——不需要 ETA）",
        ] },
        { note: `建議：若航班在倫敦轉機，請至少在出發前 ${F.decisionDays} 個工作天申請 UK ETA。沒有 ETA 可能會被拒絕登機。` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet（2026 年 4 月）", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "eta-news": {
    slug: "eta-news",
    group: "eta",
    title: `UK ETA 最新消息 2026：費用 ${F.fee}、全面強制實施與其他變更`,
    description: `UK ETA 最新消息：2026 年 4 月 8 日起費用調漲為 ${F.fee}，2026 年 2 月 25 日起全面強制實施，2025 年 4 月 2 日起歐盟公民納入適用。`,
    h1: "UK ETA 與英國旅行的最新消息",
    lead: `近期變更重點：UK ETA 自 2026 年 4 月 8 日起費用為 ${F.fee}，自 2026 年 2 月 25 日起全面強制實施，歐盟公民則自 2025 年 4 月 2 日起需要申請。資訊依據 GOV.UK 與 Home Office。`,
    card: `費用調漲至 ${F.fee}、全面強制實施與其他最新變更`,
    sections: [
      { h: `2026 年 4 月 8 日：UK ETA 費用調漲至 ${F.fee}`, blocks: [
        `自 2026 年 4 月 8 日起，UK ETA 費用由原本的 £16 調整為 ${F.fee}（調漲 25%）。以申請日期為準。`,
        `Home Office 已確認，UK ETA（Electronic Travel Authorisation）的費用由 £16 調漲至 ${F.fee}。新費用自 2026 年 4 月 8 日起適用。`,
        `費用以申請日期判定：在 2026 年 4 月 8 日之前送出申請者支付 £16，2026 年 4 月 8 日當天或之後送出的申請則為 ${F.fee}。`,
        `這是此制度又一次調漲：ETA 最初費用為 £10，之後調漲至 £16，現在則為 ${F.fee}。許可效期仍為 ${F.validYears} 年，可多次入境（每次停留最多 ${F.staySixMonths} 個月）。`,
        "此次調漲影響 50 多個國家、需要 UK ETA 才能入境英國的旅客。",
        "資料來源：[GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2026 年 2 月 25 日：UK ETA 全面強制實施", blocks: [
        "自 2026 年 2 月 25 日起，UK ETA 全面強制實施：航空公司不會讓沒有有效許可的旅客登機。",
        "UK ETA 導入的過渡期已於 2026 年 2 月 25 日結束。自該日起，這項要求全面實施。",
        "實務上，這代表運輸業者（航空公司、渡輪、Eurostar）不會讓需要 ETA 卻沒有 ETA 的旅客上機或上船。運輸業者若載運沒有有效許可的旅客，可能遭到罰款。",
        `因此，請在出發前取得 ETA——至少提前 ${F.decisionDays} 個工作天申請，因為少數申請可能需要額外審查。`,
        "資料來源：[GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2025 年 4 月 2 日：歐盟公民需要 UK ETA", blocks: [
        "自 2025 年 4 月 2 日起，歐盟、歐洲經濟區（EEA）與瑞士公民前往英國前，必須先取得 UK ETA。",
        "自 2025 年 4 月 2 日起，UK ETA 制度擴及歐洲聯盟、歐洲經濟區與瑞士的公民。",
        "觀光、商務出差、探親，以及需要通過邊境檢查的轉機，都需要 ETA。兒童與嬰兒也適用——每個人都要各自申請。",
        `許可以電子方式與申請時使用的護照連結，${F.validYears} 年內可多次入境。`,
        "資料來源：[GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2026 年 4 月 8 日：英國移民相關費用調漲", blocks: [
        "除了 ETA 之外，Home Office 的其他費用也自 2026 年 4 月 8 日起調漲——包括入境簽證、定居與入籍等費用。",
        `Home Office 於 2026 年 4 月 8 日更新官方收費表。除了 ETA 調漲至 ${F.fee}，大多數其他移民與入籍相關費用也一併調漲。`,
        "調漲範圍包括訪客簽證（visit visa）、定居（settlement）相關費用，以及英國入籍申請等。",
        "若您計畫較長期的停留，或需要 ETA 以外的簽證類型，送出申請前請在 GOV.UK 官方頁面確認目前的費用。",
        "資料來源：[GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "2026 年 3 月 1 日：前往英國的安全須知", blocks: [
        "出發前，建議先查看最新的安全資訊，並確認護照與 ETA 都在效期內。",
        "英國是熱門且整體而言安全的旅遊目的地，但每次出發前，最好都先查看官方發布的最新資訊。",
        "出發前請確認：護照在整個停留期間內有效、持有與該護照連結的有效 UK ETA，並已投保旅遊保險。",
        "當地情勢與威脅等級的最新資訊，由官方來源發布——英國政府（GOV.UK）以及相關的外交代表機構。在英國遇到緊急情況，請撥打緊急電話 999。",
        "資料來源：[GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Visa fees", url: "https://www.gov.uk/government/publications/visa-regulations-revised-table" },
      { label: "GOV.UK – Foreign travel advice", url: "https://www.gov.uk/foreign-travel-advice" },
    ],
  },
};
export default pages;
