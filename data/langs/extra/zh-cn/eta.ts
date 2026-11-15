import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（zh-cn・eta）2026-11-15 バッチ2。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。
// 🚨 中国大陆护照＝visa national。ETA 页面一律在开头说明「不适用 ETA、需要签证」，并链接 check-uk-visa 与 standard-visitor。
// ⚠️ 签证金额（Standard Visitor / 长期 / 过境）不写，引导至 GOV.UK（与 data/langs/zh-cn.ts 的方针一致）。

const CHECK = "[确认是否需要英国签证（Check if you need a UK visa）](https://www.gov.uk/check-uk-visa)";
const SV = "[访客签证（Standard Visitor visa）](https://www.gov.uk/standard-visitor)";
const SRC_CHECK = { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" };
const SRC_SV = { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" };
const HK_MO = "香港特区护照、澳门特区护照与 BNO 的情况与中国大陆护照不同，本站不作断言，请以实际持用的证件在官方工具中确认。";

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "who-needs-an-eta",
    group: "eta",
    title: "谁需要 UK ETA？适用对象与豁免——中国大陆护照需办签证｜2026",
    description: "UK ETA 只面向免签国家和地区的短期旅客；英国与爱尔兰公民、持英国居留许可者、空侧转机旅客等可豁免。中国大陆护照属于需要签证的国籍，不适用 ETA。",
    h1: "谁需要 UK ETA？",
    lead: "UK ETA 面向免签国家和地区的旅客，用于短期访问（观光、商务、短期学习），每位旅客（包括婴幼儿）都需要各自的 ETA。中国大陆护照属于需要签证的国籍，不适用 ETA，需要办理的是签证。",
    card: "ETA 面向哪些旅客、谁可以豁免，以及中国大陆护照为何要办签证",
    sections: [
      { h: "ETA 要求适用于哪些人", blocks: [
        { note: `中国大陆护照不在 ETA 的适用范围内：在英国的规则中，中国大陆护照无论旅行目的都需要事先办理签证。请先用 GOV.UK 的${CHECK}工具确认，短期访问通常对应${SV}。${HK_MO}` },
        "ETA 适用于免签国家和地区的公民以短期目的前往英国的情形：观光、商务出行或短期学习。以下关于 ETA 的说明，供了解制度本身、以及辨别网上说法是否适用于自己之用。",
        { note: "持 ETA 出行时，每位旅客（包括婴儿和儿童）都需要各自的 ETA。" },
      ] },
      { h: "哪些人无需 ETA", blocks: [
        { ul: [
          "英国公民和爱尔兰公民（持英国或爱尔兰护照出行）",
          "已获准在英国居住、工作或学习的人（例如持有签证，或拥有 settled / pre-settled status）",
          "持英国海外领土公民（British Overseas Territories Citizen）护照或英国国民（海外）护照（British National (Overseas)）的人",
          "居住在爱尔兰、并从爱尔兰、根西岛、泽西岛或马恩岛出发前往英国的人",
          "不经过边境检查的空侧（airside）转机旅客",
          "正在等待 EU Settlement Scheme 申请结果的人",
        ] },
      ] },
      { h: "需要了解的几点", blocks: [
        { ul: [
          "拥有英国或爱尔兰国籍的人无法取得 ETA，应持该国籍的证件出行。",
          `如果你的国籍并非免签国籍（中国大陆护照即属此类），可能需要签证：请用 GOV.UK 官方工具${CHECK}确认。`,
          "婴儿和儿童同样需要各自的 ETA。",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      { label: "GOV.UK – Check when you can get an ETA", url: "https://www.gov.uk/guidance/check-when-you-can-get-an-electronic-travel-authorisation-eta" },
      SRC_CHECK,
      SRC_SV,
    ],
  },

  "eta-vs-visa": {
    slug: "eta-or-visa",
    group: "eta",
    title: "UK ETA 与签证有何区别？中国大陆护照走签证途径｜2026",
    description: `UK ETA 与签证的区别：ETA 只面向免签国籍，每次最多停留 ${F.staySixMonths} 个月，可观光、商务与短期学习，但不能工作或定居。中国大陆护照需办签证。`,
    h1: "UK ETA 与签证的区别",
    lead: "UK ETA 不是签证，而是面向免签国家和地区旅客的旅行许可，也不保证入境——是否准予入境由边境部队（Border Force）决定。中国大陆护照不适用 ETA，需要办理签证。",
    card: "ETA 能做什么、不能做什么，以及中国大陆护照为何走签证途径",
    sections: [
      { h: `持 ETA 可以做的事（最多 ${F.staySixMonths} 个月）`, blocks: [
        { note: `本页说明的是 ETA 制度本身。中国大陆护照属于需要签证的国籍，无法申请 ETA；请用 GOV.UK 的${CHECK}工具确认，短期访问通常对应${SV}。${HK_MO}` },
        { ul: [
          "观光、探亲访友",
          "商务出行（business）",
          "短期学习（short-term study）",
          "需要经过边境检查的转机",
          "许可的有偿活动（Permitted paid engagement）；依 Creative Worker concession 进行最长 3 个月的活动",
        ] },
      ] },
      { h: "持 ETA 不能做的事", blocks: [
        { ul: [
          `停留超过 ${F.staySixMonths} 个月`,
          "为英国公司从事有偿或无偿工作，或以自雇身份工作（上述例外除外）",
          "领取公共资金（public funds）",
          "以频繁、连续的访问实际上在英国定居",
          "办理结婚或民事伴侣关系的申报或登记（需要 Marriage Visitor 签证）",
        ] },
        `国籍不属于免签范围时，请用${CHECK}确认需要哪一种签证。`,
      ] },
    ],
    sources: [
      { label: "GOV.UK – What you can and cannot do with an ETA", url: "https://www.gov.uk/eta/what-you-can-cannot-do" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      SRC_CHECK,
      SRC_SV,
    ],
  },

  "standard-visitor-visa": {
    slug: "uk-standard-visitor-visa",
    group: "eta",
    title: "英国访客签证（Standard Visitor visa）：中国大陆护照短期赴英的途径｜2026",
    description: "中国大陆护照短期赴英通常需要办理访客签证（Standard Visitor visa）。本页说明谁需要、审核时间、停留期限与申请步骤；费用请以 GOV.UK 为准。",
    h1: "英国访客签证（Standard Visitor visa）",
    lead: "中国大陆护照属于需要签证的国籍，以观光、探亲或短期商务为目的赴英，通常需要办理访客签证（Standard Visitor visa）。免签国籍的旅客如果 ETA 申请被拒（无法申诉），同样要改办这一签证。以下内容依据 GOV.UK。",
    card: "谁需要、审核时间、停留期限与申请步骤（费用以 GOV.UK 为准）",
    sections: [
      { h: "哪些人需要办签证而不是 ETA", blocks: [
        { ul: [
          "国籍需要签证才能前往英国的人（不具备 ETA 资格）。中国大陆护照即属此类。",
          "ETA 申请被拒的人——无法持 ETA 前往英国，需要办理签证。",
          `请用 GOV.UK 的${CHECK}工具确认你需要哪一种签证。`,
        ] },
        { note: HK_MO },
      ] },
      { h: "费用（GOV.UK）", blocks: [
        "访客签证的费用依种类而不同：最长 6 个月的访客签证、2 年／5 年／10 年的长期访客签证，以及过境签证，各有不同的金额。",
        `签证费会调整，本站不抄写金额，请在 GOV.UK 的${SV}页面确认现行费用。`,
        "长期访客签证在效期内可多次入境，但每次停留最长 6 个月。",
      ] },
      { h: "审核时间、效期与停留期限", blocks: [
        { ul: [
          "审核结果：通常在签证申请中心完成预约后 3 周内作出。",
          "停留期限：每次访问最长 6 个月。",
          "何时申请：最早可在出行前 3 个月申请。",
        ] },
      ] },
      { h: "申请步骤（GOV.UK）", blocks: [
        { ul: [
          "1. 在线填写申请（可保存后稍后继续填写）。",
          "2. 预约签证申请中心。",
          "3. 按预约前往，核实身份、录入生物识别信息（指纹和照片）并提交材料。",
          "4. 审核结果以电子邮件通知；护照在申请中心领回。",
        ] },
        "需要准备的资料包括：",
        { ul: [
          "有效护照（在整个停留期间都有效）",
          "出行日期、住宿安排与预计旅行费用",
          "现住址及居住时长",
          "年收入（如适用）与雇主信息（如适用）",
          "任何犯罪记录或移民记录",
          "非英文或威尔士文材料的经认证翻译件",
        ] },
        { note: "本站是独立的资讯网站，并非政府网站。信息与费用可能变动，申请前请务必在 GOV.UK 确认官方信息。" },
      ] },
    ],
    faq: [
      { q: "什么情况下需要办访客签证而不是 ETA？", a: "国籍需要签证才能前往英国时（中国大陆护照即属此类），或 ETA 申请被拒时。ETA 被拒无法申诉，要出行就需申请合适的签证。" },
      { q: "访客签证要多少钱？", a: "费用依签证种类（最长 6 个月、2 年／5 年／10 年长期、过境签证）而不同，并会调整。本站不抄写金额，请以 GOV.UK 的 Standard Visitor visa 页面为准。" },
      { q: "审核需要多久？", a: "通常在签证申请中心完成预约后 3 周内作出决定。" },
      { q: "可以在英国停留多久？", a: "通常每次访问最长 6 个月。" },
    ],
    sources: [
      SRC_SV,
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
      SRC_CHECK,
    ],
  },

  "expiration": {
    slug: "when-eta-expires",
    group: "eta",
    title: "UK ETA 何时到期、何时需要重新申请（制度说明）｜2026",
    description: `UK ETA 自签发起 ${F.validYears} 年有效，护照先到期则随之失效；换新护照、改名或情况变化时需重新申请。中国大陆护照不适用 ETA，需办签证。`,
    h1: "UK ETA 何时到期，何时需要重新申请",
    lead: `UK ETA 自签发之日起 ${F.validYears} 年内有效，或到护照到期为止，以先到者为准。许可到期或换发新护照时，需要重新申请。本页是 ETA 制度的说明；中国大陆护照不适用 ETA，需要办理签证。`,
    card: "ETA 的效期规则与需要重新申请的情形（中国大陆护照需办签证）",
    sections: [
      { h: "效期规则一览", blocks: [
        { note: `中国大陆护照属于需要签证的国籍，无法申请 ETA，以下规则不适用于中国大陆护照。请用${CHECK}确认，短期访问通常对应${SV}。签证的效期依签证种类而定。` },
        "效期的详细说明见[效期怎么算](/zh-cn/validity/)。简要而言（GOV.UK）：",
        { ul: [
          `自签发之日起 ${F.validYears} 年内有效`,
          "护照先到期时，ETA 随护照一起失效",
          "有效期内可多次进入英国",
          `每次停留最长 ${F.staySixMonths} 个月`,
          "ETA 与特定的一本护照绑定",
        ] },
      ] },
      { h: "什么时候需要重新申请 ETA？", blocks: [
        "以下情形需要重新提交 UK ETA 申请：",
        { ul: [
          `ETA 签发后已满 ${F.validYears} 年`,
          "换发了新护照",
          "姓名发生变更",
          "情况发生变化，影响取得 ETA 的资格",
        ] },
      ] },
      { h: "ETA 即将到期，还能用来出行吗？", blocks: [
        "UK ETA 必须在入境英国时有效。它不需要覆盖整个停留期间，关键是在抵达当天有效。尽管如此，仍建议提前办理新的申请。",
      ] },
      { h: "如何确认到期日？", blocks: [
        "根据 GOV.UK，可在 gov.uk/eta 在线查询（Check your ETA），确认是否持有 ETA 以及何时到期。另见[查询申请状态](/zh-cn/status-check/)。",
      ] },
      { h: "ETA 有效期内换了护照怎么办？", blocks: [
        `ETA 与特定的一本护照绑定。如果换发了新护照（例如旧护照到期或因改名换发），需要重新申请 ETA，并再次支付 ${F.fee} 的费用。原来的 ETA 随之失效。`,
        { note: `提示：持免签国籍护照的旅客，建议至少在出行前 ${F.decisionDays} 个工作日申请 UK ETA，为审核留出时间。` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      SRC_CHECK,
      SRC_SV,
    ],
  },

  "children-family": {
    slug: "children-and-families",
    group: "eta",
    title: "儿童与家庭的 UK ETA 规则：婴儿也需要吗？（制度说明）｜2026",
    description: "UK ETA 规定婴儿和儿童也需各自持有，可凭本人护照与面部照片代为申请。中国大陆护照不适用 ETA，全家每位成员都需各自办理签证。",
    h1: "儿童与家庭的 UK ETA",
    lead: "在 ETA 制度下，每位旅客（包括婴儿和儿童）都需要各自的 UK ETA，也可以代他人提交申请。中国大陆护照不适用 ETA：全家出行时，每位成员（包括孩子）都需要各自的签证。",
    card: "ETA 制度中的儿童规则——中国大陆护照全家需各自办签证",
    sections: [
      { h: "为家人申请", blocks: [
        { note: `中国大陆护照属于需要签证的国籍，无法申请 ETA；孩子同样需要签证。请用${CHECK}确认，短期访问通常对应${SV}。${HK_MO}` },
        "以下是 ETA 制度中关于家庭出行的规则：",
        { ul: [
          "每位旅客都需要各自的 ETA，包括儿童和婴儿",
          "可以代他人申请：本人在身边时可用应用程序，否则通过网站申请（需要对方的护照和面部照片）",
          "列入 France-UK school trip travel information form（英法学校旅行信息表）的儿童无需 ETA",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
      SRC_CHECK,
      SRC_SV,
    ],
  },

  "eta-refused": {
    slug: "eta-refused",
    group: "eta",
    title: "UK ETA 被拒怎么办？无法申诉，下一步是签证｜2026",
    description: "UK ETA 被拒后无法申诉，要前往英国须改办签证。中国大陆护照本就不适用 ETA，应直接办理签证，而不是先申请 ETA。",
    h1: "UK ETA 被拒：接下来怎么办",
    lead: "UK ETA 申请被拒后无法申诉（appeal）。如果仍要前往英国，需要申请签证。中国大陆护照本就不适用 ETA，从一开始就应办理签证。",
    card: "ETA 被拒无法申诉，下一步是签证；中国大陆护照应直接办签证",
    sections: [
      { h: "被拒之后怎么做", blocks: [
        { note: `中国大陆护照属于需要签证的国籍，无法申请 ETA，因此也谈不上「ETA 被拒」。请直接用${CHECK}确认，短期访问通常对应${SV}。` },
        { ul: [
          "ETA 被拒没有申诉程序",
          "要前往英国，需要申请合适的签证",
          "请在 GOV.UK 确认哪一种签证符合你的出行目的",
        ] },
      ] },
      { h: "下一步：访客签证", blocks: [
        "ETA 被拒后，签证是前往英国的唯一途径。审核时间与申请步骤见[英国访客签证（Standard Visitor visa）](/zh-cn/uk-standard-visitor-visa/)；费用请以 GOV.UK 为准。",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet（2026年4月）", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
      SRC_CHECK,
      SRC_SV,
    ],
  },

  "common-mistakes": {
    slug: "common-mistakes",
    group: "eta",
    title: "UK ETA 申请常见错误与官方应用（制度说明）｜2026",
    description: "UK ETA 申请的常见错误：资料与护照不一致、照片要求、付款与仿冒网站。中国大陆护照不适用 ETA，请勿在代办网站申请，应办理签证。",
    h1: "常见错误与 UK ETA 应用程序",
    lead: "ETA 申请中的许多问题，源于填写的资料与护照不一致。申请时应始终使用官方「UK ETA」应用程序，并在提交前核对资料。中国大陆护照不适用 ETA，最大的错误是去申请一个用不上的许可。",
    card: "资料不一致、照片、付款与仿冒网站——以及中国大陆护照最常见的误区",
    sections: [
      { h: "中国大陆护照最常见的误区", blocks: [
        { note: `中国大陆护照属于需要签证的国籍，无法申请 ETA。以「代办 ETA」名义向中国大陆护照持有人收费的网站，卖的是用不上的东西。请用${CHECK}确认，短期访问通常对应${SV}。` },
      ] },
      { h: "ETA 申请中应避免的错误", blocks: [
        { ul: [
          "资料必须与护照完全一致：任何出入都可能导致延误或被拒",
          "所需照片：面部照片和护照各页，须清晰、正确",
          `付款（${F.fee}）：Apple Pay、Google Pay 或银行卡（Amex、JCB、Mastercard、Visa）；可能需要 3D Secure 验证`,
          "需要生物识别护照（带 ePassport 标志），以便读取芯片",
          "警惕冒充政府、收取更高费用的仿冒网站：只使用 GOV.UK",
        ] },
        "应用程序的使用步骤见[UK ETA 官方应用](/zh-cn/uk-eta-app/)。",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      SRC_CHECK,
      SRC_SV,
    ],
  },

  "official-gov-uk": {
    slug: "official-gov-uk-site",
    group: "eta",
    title: "UK ETA 的官方 GOV.UK 网站：如何识别仿冒网站｜2026",
    description: `GOV.UK 是唯一官方渠道，ETA 费用正好是 ${F.fee}。教你识别仿冒网站、避开额外收费。中国大陆护照不适用 ETA，「代办 ETA」不可信。`,
    h1: "UK ETA 的官方 GOV.UK 网站",
    lead: "UK ETA 只能在英国政府的官方网站或官方移动应用中申请。中国大陆护照不适用 ETA，了解官方网站的特征，主要用于识别向你推销「ETA 代办」的仿冒网站。",
    card: `如何识别 GOV.UK、仿冒网站的警示信号，以及 ${F.fee} 的官方费用`,
    sections: [
      { h: "官方网址", blocks: [
        { note: `中国大陆护照属于需要签证的国籍，无法申请 ETA。请用${CHECK}确认，短期访问通常对应${SV}。${HK_MO}` },
        "UK ETA 官方页面：[www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)。.gov.uk 域名代表英国政府的官方网站。",
      ] },
      { h: "如何识别官方网站", blocks: [
        { ul: [
          "网址中含有 gov.uk（英国政府域名）",
          "网站由英国内政部（Home Office）运营",
          `费用正好是 ${F.fee}`,
          "网站采用 GOV.UK 特有的黑白设计",
          "不收取「加急处理」费用",
        ] },
      ] },
      { h: "如何识别仿冒网站", blocks: [
        { note: "警示信号：网址中没有 gov.uk · 费用明显高于 " + F.fee + " · 承诺「保证获批」 · 提供「加急处理」 · 广告强势或弹窗频繁 · 没有 GOV.UK 标志。向中国大陆护照持有人推销 ETA 本身就是警示信号。" },
      ] },
      { h: "官方移动应用", blocks: [
        "UK ETA 也可以在官方移动应用「UK ETA」中申请：",
        { ul: [
          "iOS：在 App Store 搜索「UK ETA」（发布者：Home Office）",
          "Android：在 Google Play 搜索「UK ETA」（发布者：Home Office）",
        ] },
      ] },
      { h: "其他实用的官方页面", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa)——确认前往英国是否需要签证",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor)——访客签证信息",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      SRC_CHECK,
      SRC_SV,
    ],
  },

  "mobile-app": {
    slug: "uk-eta-app",
    group: "eta",
    title: "UK ETA 官方应用：功能与使用步骤（中国大陆护照不适用）｜2026",
    description: "官方 UK ETA 应用的下载、设备要求、NFC 扫描护照与申请步骤。该应用只供免签国籍申请 ETA；中国大陆护照不适用 ETA，需办理签证。",
    h1: "UK ETA 移动应用",
    lead: "英国政府提供官方的「UK ETA」移动应用，可直接用智能手机提交 ETA 申请。中国大陆护照不适用 ETA，无法通过这个应用申请；你需要办理的是签证。",
    card: "下载、设备要求、NFC 扫描护照与申请步骤（中国大陆护照不适用）",
    sections: [
      { h: "关于 UK ETA 应用", blocks: [
        { note: `中国大陆护照属于需要签证的国籍，无法申请 ETA。请用${CHECK}确认，短期访问通常对应${SV}。以下是应用本身的说明，也有助于识别仿冒应用。` },
        "UK ETA 应用是英国内政部（Home Office）用于申请电子旅行许可的官方工具。它是推荐的申请方式，因为可以通过 NFC 扫描护照并自动填写资料。",
      ] },
      { h: "支持的平台", blocks: [
        { ul: [
          "iOS（App Store）——适用于 Apple 设备（iPhone），需要 iOS 16 或更高版本。",
          "Android（Google Play）——适用于 Android 设备，需要 Android 12 或更高版本，并支持 NFC。",
        ] },
        "搜索「UK ETA」，发布者为 Home Office。",
      ] },
      { h: "应用的功能", blocks: [
        { ul: [
          "提交新的 UK ETA 申请",
          "扫描生物识别护照（NFC + OCR）",
          "拍摄面部照片（自拍）用于身份核验",
          "查询已提交申请的状态",
          "用银行卡、Apple Pay 或 Google Pay 付款",
          "状态变化时推送通知",
        ] },
      ] },
      { h: "如何用应用申请？", blocks: [
        { ul: [
          "1. 从 App Store 或 Google Play 下载「UK ETA」应用",
          "2. 创建账户（电子邮件地址和密码）",
          "3. 扫描生物识别护照（将手机贴近护照）",
          "4. 拍摄面部照片（自拍）",
          "5. 回答表格中的问题",
          `6. 支付 ${F.fee}`,
          "7. 提交申请并等待结果",
        ] },
      ] },
      { h: "护照扫描（NFC）", blocks: [
        "应用通过 NFC（近场通信）技术读取护照生物识别芯片中的信息。扫描护照的方法：",
        { ul: [
          "打开护照的照片页",
          "将手机背面贴在打开的护照上",
          "保持不动 5–10 秒",
          "等待应用确认信息已读取",
        ] },
      ] },
      { h: "移动应用的优点", blocks: [
        { ul: [
          "用 NFC 扫描护照，资料自动填写",
          "比网站申请更快",
          "推送通知申请状态",
          "生物识别保护（Face ID / Touch ID）",
        ] },
        { note: "注意：请确认下载的是官方应用。在应用商店中确认发布者为「Home Office」。仿冒应用可能窃取个人信息。" },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      SRC_CHECK,
      SRC_SV,
    ],
  },

  "transit": {
    slug: "transit-through-the-uk",
    group: "eta",
    title: "经英国转机需要 UK ETA 吗？中国大陆护照请确认签证要求｜2026",
    description: "ETA 制度下，经过边境检查（landside）的转机需要 ETA，空侧（airside）转机则不需要。中国大陆护照不适用 ETA，转机要求请用 GOV.UK 工具确认。",
    h1: "经英国转机：需要 UK ETA 吗？",
    lead: "在 ETA 制度下，只有在英国机场经过边境检查后再继续行程（landside）时，转机才需要 UK ETA；不经过边境检查直接换乘（airside）则不需要。中国大陆护照不适用 ETA，经英国转机时是否需要签证，请用 GOV.UK 的官方工具确认。",
    card: "空侧与陆侧转机的 ETA 规则（中国大陆护照请确认签证要求）",
    sections: [
      { h: "转机规则", blocks: [
        { note: `中国大陆护照属于需要签证的国籍，转机同样不适用 ETA。经英国转机是否需要签证（包括过境签证），请用${CHECK}按实际行程确认。短期入境英国通常对应${SV}。${HK_MO}` },
        "自2025年4月2日起，欧盟公民经英国转机时，如果要在机场经过边境检查（landside transit），需要 UK ETA；不经过边境检查的转机（airside transit）则不需要 ETA。如有疑问，请向航空公司确认。",
        { ul: [
          "陆侧转机（经过边境检查）：需要 ETA",
          "空侧转机（不经过护照检查）：不需要 ETA",
          "根据官方情况说明（factsheet），在希思罗或曼彻斯特转机、且不经过英国护照检查的旅客，目前不需要 ETA",
          "请务必向航空公司确认自己的转机类型",
        ] },
      ] },
      { h: "转机的类型", blocks: [
        { table: { head: ["类型", "具体情况", "是否需要 ETA？"], rows: [
          ["空侧转机（机场内）", "在机场内换乘，不经过边境检查。如不确定是否会经过边境检查，请向航空公司确认。", "不需要"],
          ["陆侧转机", "继续行程前经过边境检查，例如提取行李或在酒店过夜。此时在形式上已进入英国。", "需要"],
        ] } },
        "只要在英国机场经过边境检查，无论转机时间多短，都需要 UK ETA。不经过边境检查直接换乘（airside）则不需要 ETA。以上为 ETA 制度的规则；需要签证的国籍请以签证要求为准。",
      ] },
      { h: "转机 ETA 要求的豁免", blocks: [
        "转机的 ETA 要求只有少数豁免：",
        { ul: [
          "爱尔兰公民（共同旅行区 CTA）",
          "持有效英国签证的人",
          "拥有英国长期居留许可的人（settled / pre-settled status）",
        ] },
      ] },
      { h: "如何避免转机时需要 ETA？", blocks: [
        "如果不想申请 UK ETA，可以选择不经英国的路线，例如：",
        { ul: [
          "直飞目的地",
          "在欧盟国家转机（阿姆斯特丹、法兰克福、巴黎）",
          "在都柏林转机（爱尔兰——不需要 ETA）",
        ] },
        `选择其他国家转机时，请另行确认该国对你所持护照的入境与过境要求。`,
        { note: `提示：免签国籍的旅客如果航班在伦敦转机，请至少在出发前 ${F.decisionDays} 个工作日申请 UK ETA。没有 ETA 可能会被拒绝登机。` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet（2026年4月）", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
      SRC_CHECK,
      SRC_SV,
    ],
  },

  "eta-news": {
    slug: "eta-news",
    group: "eta",
    title: `UK ETA 动态 2026：费用调至 ${F.fee}、全面强制执行等变化`,
    description: `UK ETA 最新动态：2026年4月8日费用调至 ${F.fee}，2026年2月25日起全面强制执行，2025年4月2日起覆盖欧盟公民。中国大陆护照不适用 ETA。`,
    h1: "UK ETA 与赴英旅行动态",
    lead: `近期主要变化：自2026年4月8日起 UK ETA 费用为 ${F.fee}，自2026年2月25日起全面强制执行，自2025年4月2日起欧盟公民也需要 ETA。信息来自 GOV.UK 与英国内政部。这些是 ETA 制度的变化；中国大陆护照不适用 ETA，需要办理签证。`,
    card: `费用调至 ${F.fee}、全面强制执行等近期变化（中国大陆护照需办签证）`,
    sections: [
      { h: `2026年4月8日：UK ETA 费用调至 ${F.fee}`, blocks: [
        { note: `中国大陆护照属于需要签证的国籍，以下 ETA 的变化不直接适用。请用${CHECK}确认，短期访问通常对应${SV}；与签证相关的是下文「英国移民相关费用上调」一节。` },
        `自2026年4月8日起，UK ETA 的费用由原来的 £16 调整为 ${F.fee}（上涨 25%）。以申请日期为准。`,
        `英国内政部（Home Office）已确认将 UK ETA（Electronic Travel Authorisation）的费用由 £16 上调至 ${F.fee}，新费用自2026年4月8日起生效。`,
        `费用以申请日期为准：2026年4月8日之前提交申请的支付 £16，2026年4月8日当天或之后提交的申请则为 ${F.fee}。`,
        `这是该制度又一次调价：ETA 最初的费用为 £10，随后调至 £16，现在为 ${F.fee}。许可仍为 ${F.validYears} 年有效，可多次入境（每次停留最长 ${F.staySixMonths} 个月）。`,
        "此次调价涉及需要 UK ETA 才能前往英国的 50 多个国家的公民。",
        "来源：[GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2026年2月25日：UK ETA 全面强制执行", blocks: [
        "自2026年2月25日起，UK ETA 全面执行：航空公司不会让没有有效许可的旅客登机。",
        "UK ETA 的过渡期于2026年2月25日结束。自当日起，这一要求全面适用。",
        "实际上，这意味着承运方（航空公司、渡轮、Eurostar 欧洲之星）不会让需要 ETA 却没有 ETA 的旅客登乘。承运方运送没有有效许可的旅客可能被罚款。",
        `因此，需要 ETA 的旅客应在出行前办妥——至少提前 ${F.decisionDays} 个工作日，因为少数申请可能需要进一步审核。`,
        "来源：[GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2025年4月2日：欧盟公民需要 UK ETA", blocks: [
        "自2025年4月2日起，欧盟、欧洲经济区（EEA）及瑞士的公民在前往英国前必须取得 UK ETA。",
        "自当日起，UK ETA 制度覆盖欧盟、欧洲经济区及瑞士的公民。",
        "观光、商务出行、探亲以及需要经过边境检查的转机都需要 ETA。儿童和婴儿也不例外——每人各自提交申请。",
        `许可以电子方式与申请时使用的护照绑定，${F.validYears} 年内可多次入境。`,
        "来源：[GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2026年4月8日：英国移民相关费用上调", blocks: [
        "除 ETA 之外，英国内政部的其他费用也自2026年4月8日起上调，包括访客签证、定居与入籍等费用。",
        `英国内政部于2026年4月8日更新了官方收费表。除 ETA 调至 ${F.fee} 外，大多数其他移民与入籍费用也有所上调。`,
        "涉及的项目包括访客签证（visit visa）、定居（settlement）费用以及英国入籍申请。",
        `中国大陆护照赴英需要办理签证，申请前请在 GOV.UK 官方页面确认现行费用，访客签证见${SV}。`,
        "来源：[GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "2026年3月1日：赴英旅行安全须知", blocks: [
        "出发前，建议查看最新的安全提示，并确认护照以及所需的许可或签证均在有效期内。",
        "英国是热门且总体安全的旅行目的地，但每次出行前查看官方的最新提示都是明智之举。",
        "出行前请确认：护照在整个停留期间有效；持有与该护照绑定的有效 UK ETA（需要签证的国籍则为有效签证）；并已购买旅行保险。",
        "有关当地形势与威胁等级的最新信息，由官方渠道发布——英国政府（GOV.UK）以及相关的驻外使领馆。在英国遇到紧急情况，请拨打 999。",
        "来源：[GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Visa fees", url: "https://www.gov.uk/government/publications/visa-regulations-revised-table" },
      { label: "GOV.UK – Foreign travel advice", url: "https://www.gov.uk/foreign-travel-advice" },
      SRC_CHECK,
      SRC_SV,
    ],
  },
};
export default pages;
