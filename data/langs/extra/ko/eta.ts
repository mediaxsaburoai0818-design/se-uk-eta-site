import { FACTS as F, type ExtraPage, type TopicKey } from "../../_schema";

// 追加トピック（ko・eta）2026-11-15 バッチ2。原本＝ルート（sv）の各ページ。事実と出典はルートのものだけ。
// 韓国＝ETA対象国（既存 ko.ts の通り）・EU外。EU市民向けの日付（2025-04-02）は「欧州への拡大」として紹介し、韓国の適用日は書かない（ルートに無い）。

const pages: Partial<Record<TopicKey, ExtraPage>> = {
  "who-needs-eta": {
    slug: "eta-pilyo-daesang",
    group: "eta",
    title: "UK ETA는 누가 필요한가: 대상 국적과 면제 대상 | 2026",
    description: "UK ETA가 필요한 사람과 면제되는 사람을 정리했습니다. 영국·아일랜드 국민, 체류 허가 보유자, 입국심사를 거치지 않는 환승객은 면제됩니다.",
    h1: "UK ETA는 누가 필요한가",
    lead: "UK ETA는 비자 면제 국가 국민이 관광, 출장, 단기 유학 등으로 영국에 짧게 머물 때 필요합니다. 영유아와 어린이를 포함해 여행자 한 사람마다 각자 ETA가 있어야 합니다.",
    card: "ETA를 받아야 하는 사람과 면제되는 사람, 한국 여권 소지자 포함",
    sections: [
      { h: "ETA가 필요한 사람", blocks: [
        "ETA는 비자 면제 국가 국민이 관광, 출장, 단기 유학 목적으로 영국을 짧게 방문할 때 필요합니다. 한국은 이 국가에 해당하므로 대한민국 국민도 ETA가 필요합니다.",
        { note: "영유아와 어린이를 포함해 여행자 한 사람마다 각자 ETA가 필요합니다." },
      ] },
      { h: "ETA가 면제되는 사람", blocks: [
        { ul: [
          "영국 및 아일랜드 국민(영국 또는 아일랜드 여권 소지자)",
          "영국에서 거주·취업·학업 허가를 받은 사람(예: 비자, settled/pre-settled status)",
          "British Overseas Territories Citizen 또는 British National (Overseas) 여권 소지자",
          "아일랜드에 거주하며 아일랜드, 건지(Guernsey), 저지(Jersey), 맨섬(Isle of Man)에서 출발하는 사람",
          "입국심사를 거치지 않고 공항 안에서 환승하는(airside) 여행자",
          "EU Settlement Scheme 신청 결과를 기다리고 있는 사람",
        ] },
      ] },
      { h: "알아 두실 점", blocks: [
        { ul: [
          "영국 또는 아일랜드 국적을 가진 사람은 ETA를 받을 수 없으며, 해당 국적의 서류로 여행합니다.",
          "국적이 비자 면제 대상이 아니라면 비자가 필요할 수 있습니다. GOV.UK의 공식 확인 도구 [Check if you need a UK visa](https://www.gov.uk/check-uk-visa)에서 확인하시기 바랍니다.",
          "영유아와 어린이도 각자 ETA가 필요합니다.",
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
    slug: "eta-wa-bija-chai",
    group: "eta",
    title: "UK ETA와 비자의 차이: 무엇이 다른가 | 2026",
    description: `UK ETA와 비자의 차이를 정리했습니다. ETA로는 관광·출장·단기 유학 목적으로 최대 ${F.staySixMonths}개월 머물 수 있지만, 취업이나 정착은 할 수 없습니다.`,
    h1: "UK ETA와 비자의 차이",
    lead: "UK ETA는 비자가 아니라 비자 면제 국가 국민을 위한 여행 허가입니다. 입국을 보장하지는 않으며, 입국 여부는 국경 당국이 결정합니다.",
    card: "ETA로 할 수 있는 일과 비자가 필요한 경우",
    sections: [
      { h: `ETA로 할 수 있는 일(최대 ${F.staySixMonths}개월)`, blocks: [
        { ul: [
          "관광, 가족·친구 방문",
          "출장(business)",
          "단기 유학(short-term study)",
          "입국심사를 통과하는 환승",
          "Permitted paid engagement, Creative Worker concession에 따른 최대 3개월간의 활동",
        ] },
      ] },
      { h: "ETA로 할 수 없는 일", blocks: [
        { ul: [
          `${F.staySixMonths}개월을 넘는 체류`,
          "영국 기업을 위한 유급·무급 근무 또는 자영업(위에 적은 예외 제외)",
          "공적 지원(public funds) 수급",
          "잦은 반복 방문으로 사실상 영국에 정착하는 것",
          "혼인 또는 시민 파트너십 등록(Marriage Visitor visa 필요)",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – What you can and cannot do with an ETA", url: "https://www.gov.uk/eta/what-you-can-cannot-do" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "standard-visitor-visa": {
    slug: "standard-visitor-bija",
    group: "eta",
    title: "영국 Standard Visitor 비자: ETA로 갈 수 없을 때 | 2026",
    description: "UK ETA가 거절되었거나(이의 신청 불가) 국적상 비자가 필요한 경우 Standard Visitor 비자를 신청합니다. GOV.UK 기준 비용, 소요 기간, 신청 절차.",
    h1: "영국 Standard Visitor 비자: ETA로 갈 수 없을 때",
    lead: "UK ETA가 거절되었거나(이의 신청 불가) 국적상 비자가 필요한 경우, 영국에 가려면 Standard Visitor 비자를 신청해야 합니다. 아래 내용은 GOV.UK를 기준으로 정리했습니다.",
    card: "비자 비용(£135부터), 소요 기간, 신청 단계",
    sections: [
      { h: "ETA 대신 비자가 필요한 사람", blocks: [
        { ul: [
          "국적상 영국 비자가 필요한 사람(ETA 대상이 아닌 사람)",
          "ETA 신청이 거절된 사람. 이 경우 ETA로는 영국에 입국할 수 없으며 비자가 필요합니다.",
          "어떤 비자가 필요한지는 GOV.UK의 확인 도구 [Check if you need a UK visa](https://www.gov.uk/check-uk-visa)에서 확인하실 수 있습니다.",
        ] },
      ] },
      { h: "비용(GOV.UK)", blocks: [
        { table: { head: ["비자", "비용"], rows: [
          ["Standard Visitor(최대 6개월)", "£135"],
          ["장기 비자 – 2년", "£506"],
          ["장기 비자 – 5년", "£903"],
          ["장기 비자 – 10년", "£1,128"],
          ["환승 비자", "£74.50"],
        ] } },
        "장기 비자는 여러 번 입국할 수 있지만, 1회 체류는 6개월로 제한됩니다. 금액은 GOV.UK 기준이며 변경될 수 있습니다.",
      ] },
      { h: "소요 기간, 유효기간, 체류 기간", blocks: [
        { ul: [
          "결과: 보통 비자 신청 센터 방문 후 3주 이내",
          "체류: 1회 방문당 최대 6개월",
          "신청 시기: 여행 3개월 전부터 가능",
        ] },
      ] },
      { h: "신청 방법(GOV.UK)", blocks: [
        { ul: [
          "1. 온라인으로 신청합니다(저장해 두었다가 나중에 마칠 수 있습니다).",
          "2. 비자 신청 센터 방문을 예약합니다.",
          "3. 센터를 방문해 신원을 확인하고 생체 정보(지문과 사진)를 등록한 뒤 서류를 제출합니다.",
          "4. 결과는 이메일로 받으며, 여권은 센터에서 돌려받습니다.",
        ] },
        "다음과 같은 정보를 준비하시기 바랍니다.",
        { ul: [
          "유효한 여권(체류 기간 내내 유효해야 함)",
          "여행 일정, 숙소, 예상 경비",
          "현재 주소와 거주 기간",
          "연 소득(해당하는 경우)과 고용주 정보(해당하는 경우)",
          "범죄 또는 출입국 관련 이력(있는 경우)",
          "영어나 웨일스어가 아닌 서류의 공인 번역본",
        ] },
        { note: "이 사이트는 독립적인 정보 제공 서비스이며 정부 사이트가 아닙니다. 정보와 비용은 변경될 수 있으니 신청 전에 반드시 GOV.UK의 공식 정보를 확인하시기 바랍니다." },
      ] },
    ],
    faq: [
      { q: "ETA 대신 Standard Visitor 비자가 필요한 경우는 언제입니까?", a: "국적상 영국 비자가 필요한 경우, 또는 ETA 신청이 거절된 경우입니다. ETA 거절 결정에는 이의 신청을 할 수 없으므로, 여행하려면 알맞은 비자를 신청해야 합니다." },
      { q: "Standard Visitor 비자 비용은 얼마입니까?", a: "GOV.UK에 따르면 최대 6개월 비자는 £135입니다. 장기 비자는 £506(2년), £903(5년), £1,128(10년)이며, 환승 비자는 £74.50입니다." },
      { q: "심사에는 얼마나 걸립니까?", a: "보통 비자 신청 센터 방문 후 3주 이내에 결과가 나옵니다." },
      { q: "영국에 얼마나 머물 수 있습니까?", a: "일반적으로 1회 방문당 최대 6개월입니다." },
    ],
    sources: [
      { label: "GOV.UK – Standard Visitor visa", url: "https://www.gov.uk/standard-visitor" },
      { label: "GOV.UK – Apply for a Standard Visitor visa", url: "https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" },
      { label: "GOV.UK – Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    ],
  },

  "expiration": {
    slug: "eta-manryo",
    group: "eta",
    title: "UK ETA는 언제 만료되고, 언제 다시 신청하는가 | 2026",
    description: `UK ETA는 ${F.validYears}년이 지나거나 여권이 만료되면 함께 만료됩니다. 새 여권을 발급받았거나 이름 등 상황이 바뀐 경우에도 다시 신청해야 합니다.`,
    h1: "UK ETA 만료와 재신청 시기",
    lead: `UK ETA는 발급일로부터 ${F.validYears}년 동안, 또는 여권이 만료될 때까지 중 먼저 도래하는 날까지 유효합니다. 허가가 만료되었거나 새 여권을 발급받으면 다시 신청해야 합니다.`,
    card: "만료 규칙과 ETA를 다시 신청해야 하는 경우",
    sections: [
      { h: "유효기간 규칙 요약", blocks: [
        `유효기간에 대한 자세한 내용은 [UK ETA 유효기간](/ko/yuhyogigan/) 페이지에서 다룹니다. 요점은 다음과 같습니다(GOV.UK).`,
        { ul: [
          `발급일로부터 ${F.validYears}년간 유효`,
          "여권이 먼저 만료되면 그 시점에 함께 만료",
          "유효기간 중 영국에 여러 번 입국 가능",
          `1회 체류는 최대 ${F.staySixMonths}개월`,
          "ETA는 특정 여권 1개에 연결됨",
        ] },
      ] },
      { h: "언제 ETA를 다시 신청해야 합니까?", blocks: [
        "다음과 같은 경우에는 UK ETA를 새로 신청해야 합니다.",
        { ul: [
          `ETA 발급 후 ${F.validYears}년이 지났을 때`,
          "새 여권을 발급받았을 때",
          "이름이 바뀌었을 때",
          "ETA 자격에 영향을 주는 상황 변화가 있을 때",
        ] },
      ] },
      { h: "곧 만료되는 ETA로 여행할 수 있습니까?", blocks: [
        "UK ETA는 영국에 입국할 때 유효하면 됩니다. 체류 기간 내내 유효할 필요는 없으며, 중요한 것은 도착일에 유효한지입니다. 그래도 새 신청은 여유 있게 해 두시는 것이 좋습니다.",
      ] },
      { h: "만료일은 어떻게 확인합니까?", blocks: [
        "GOV.UK에 따르면 gov.uk/eta(Check your ETA)에서 온라인으로 확인할 수 있으며, ETA 보유 여부와 만료일이 표시됩니다. [UK ETA 상태 확인 방법](/ko/sangtae-hwagin/)도 참고하시기 바랍니다.",
      ] },
      { h: "ETA 유효기간 중에 여권을 바꾸면 어떻게 됩니까?", blocks: [
        `ETA는 특정 여권 1개에 연결됩니다. 새 여권을 발급받으면(예: 기존 여권 만료, 이름 변경) ETA를 새로 신청하고 수수료 ${F.fee}을 다시 내야 합니다. 기존 ETA는 효력을 잃습니다.`,
        { note: `팁: 신청 처리에 필요한 시간을 고려해, UK ETA는 여행 예정일보다 최소 ${F.decisionDays} 영업일 전에 신청하시기 바랍니다.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
    ],
  },

  "children-family": {
    slug: "adong-gajok",
    group: "eta",
    title: "아동·가족의 UK ETA: 영유아도 각자 필요합니다 | 2026",
    description: "영유아와 어린이도 각자 UK ETA가 필요합니다. 본인의 여권과 얼굴 사진이 있으면 다른 사람을 대신해 신청할 수 있습니다.",
    h1: "아동과 가족의 UK ETA",
    lead: "영유아와 어린이를 포함해 여행자 한 사람마다 각자 UK ETA가 필요합니다. 다른 사람을 대신해 신청할 수도 있습니다.",
    card: "가족 한 사람마다 ETA가 필요하며, 대신 신청하는 방법",
    sections: [
      { h: "가족 신청", blocks: [
        { ul: [
          "어린이와 영유아를 포함해 여행자마다 각자 ETA가 필요합니다",
          "다른 사람을 대신해 신청할 수 있습니다. 본인이 함께 있으면 앱으로, 그렇지 않으면 온라인으로 신청합니다(여권과 얼굴 사진 필요)",
          "France-UK school trip travel information form에 이름이 올라 있는 어린이는 ETA가 필요하지 않습니다",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
      { label: "GOV.UK – When you do not need an ETA", url: "https://www.gov.uk/eta/when-not-need-eta" },
    ],
  },

  "eta-refused": {
    slug: "eta-geobu",
    group: "eta",
    title: "UK ETA가 거절되었다면: 대처 방법과 대안 | 2026",
    description: "UK ETA 거절 결정에는 이의 신청을 할 수 없습니다. 영국에 가려면 비자를 신청해야 합니다. 거절 후의 선택지를 정리했습니다.",
    h1: "UK ETA가 거절되었을 때",
    lead: "UK ETA 신청이 거절되면 그 결정에 이의 신청(appeal)을 할 수 없습니다. 그래도 영국에 가려면 비자를 신청해야 합니다.",
    card: "이의 신청 불가, 다음 단계는 알맞은 비자",
    sections: [
      { h: "거절된 뒤 해야 할 일", blocks: [
        { ul: [
          "ETA 거절에 대한 이의 신청 절차는 없습니다",
          "영국에 가려면 목적에 맞는 비자를 신청해야 합니다",
          "여행 목적에 맞는 비자는 GOV.UK에서 확인하시기 바랍니다",
        ] },
      ] },
      { h: "다음 단계: Standard Visitor 비자", blocks: [
        "ETA가 거절된 뒤 영국에 갈 수 있는 방법은 비자뿐입니다. 비용(£135), 소요 기간, 신청 절차는 [영국 Standard Visitor 비자 안내](/ko/standard-visitor-bija/)에서 확인하시기 바랍니다.",
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (2026년 4월)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "common-mistakes": {
    slug: "heunhan-silsu",
    group: "eta",
    title: "UK ETA 신청에서 흔한 실수와 공식 앱 | 2026",
    description: "UK ETA 신청에서 흔한 실수: 여권 정보 불일치, 사진 요건, 결제, 가짜 사이트. 공식 UK ETA 앱을 사용하시기 바랍니다.",
    h1: "흔한 실수와 UK ETA 앱",
    lead: "문제의 상당수는 여권과 일치하지 않는 입력 정보에서 생깁니다. 반드시 공식 앱 「UK ETA」를 사용하고, 제출 전에 입력 내용을 확인하시기 바랍니다.",
    card: "여권 정보, 사진, 결제, 사기 사이트: 피해야 할 실수",
    sections: [
      { h: "피해야 할 실수", blocks: [
        { ul: [
          "입력 정보는 여권과 정확히 일치해야 합니다. 다르면 지연되거나 거절될 수 있습니다",
          "필요한 사진: 얼굴과 여권의 모든 면을 선명하고 정확하게",
          `결제(${F.fee}): Apple Pay, Google Pay 또는 카드(Amex, JCB, Mastercard, Visa). 3D Secure 인증이 필요할 수 있습니다`,
          "칩을 읽으려면 전자여권(ePassport 표시)이 필요합니다",
          "정부를 사칭해 더 높은 수수료를 받는 가짜 사이트에 주의하시고, GOV.UK만 이용하시기 바랍니다",
        ] },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Using the UK ETA app", url: "https://www.gov.uk/guidance/using-the-uk-eta-app" },
      { label: "GOV.UK – Apply for an ETA", url: "https://www.gov.uk/eta/apply" },
    ],
  },

  "official-gov-uk": {
    slug: "gongsik-gov-uk",
    group: "eta",
    title: "UK ETA 공식 GOV.UK 사이트: 가짜 사이트 구별법 | 2026",
    description: "UK ETA는 GOV.UK가 유일한 공식 신청처입니다. 가짜 사이트를 알아보고 추가 수수료를 받는 사기를 피하는 방법을 정리했습니다.",
    h1: "UK ETA 공식 신청 사이트 GOV.UK",
    lead: "UK ETA는 영국 정부의 공식 웹사이트나 공식 모바일 앱에서 신청할 수 있습니다.",
    card: "공식 주소, 가짜 사이트의 경고 신호, 공식 앱",
    sections: [
      { h: "공식 웹 주소", blocks: [
        "UK ETA 공식 페이지: [www.gov.uk/eta](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta). .gov.uk 도메인은 영국 정부의 공식 사이트임을 뜻합니다.",
      ] },
      { h: "공식 사이트를 알아보는 방법", blocks: [
        { ul: [
          "주소에 gov.uk(영국 정부 도메인)가 들어 있습니다",
          "Home Office가 운영합니다",
          `수수료가 정확히 ${F.fee}입니다`,
          "GOV.UK 특유의 흑백 디자인입니다",
          "「빠른 처리」 명목의 요금을 받지 않습니다",
        ] },
      ] },
      { h: "가짜 사이트를 알아보는 방법", blocks: [
        { note: "경고 신호: 주소에 gov.uk가 없음 · 수수료가 " + F.fee + "보다 눈에 띄게 높음 · 「승인 보장」을 약속함 · 「빠른 처리」를 제안함 · 공격적인 광고나 끈질긴 팝업 · GOV.UK 로고가 없음." },
      ] },
      { h: "공식 모바일 앱", blocks: [
        "UK ETA는 공식 모바일 앱 「UK ETA」에서도 신청할 수 있습니다.",
        { ul: [
          "iOS: App Store에서 「UK ETA」 검색(제공: Home Office)",
          "Android: Google Play에서 「UK ETA」 검색(제공: Home Office)",
        ] },
      ] },
      { h: "그 밖의 유용한 정부 페이지", blocks: [
        { ul: [
          "[gov.uk/check-uk-visa](https://www.gov.uk/check-uk-visa) – 영국 비자 필요 여부 확인",
          "[gov.uk/standard-visitor](https://www.gov.uk/standard-visitor) – 방문 비자 안내",
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
    slug: "eta-aep",
    group: "eta",
    title: "UK ETA 공식 앱: 휴대폰으로 신청하기 | iOS·Android 2026",
    description: "공식 UK ETA 앱을 이용하면 휴대폰에서 바로 신청할 수 있습니다. 앱 설치 방법, 준비물(여권과 얼굴 사진), 신청 절차를 정리했습니다.",
    h1: "UK ETA 모바일 앱",
    lead: "영국 정부는 스마트폰에서 바로 신청할 수 있는 공식 모바일 앱 「UK ETA」를 제공합니다.",
    card: "설치, 지원 기기, NFC 여권 스캔, 신청 단계",
    sections: [
      { h: "UK ETA 앱 소개", blocks: [
        "UK ETA 앱은 전자 여행 허가를 신청하기 위한 Home Office의 공식 도구입니다. NFC로 여권을 스캔해 정보를 자동으로 입력할 수 있어 권장되는 신청 방법입니다.",
      ] },
      { h: "지원 환경", blocks: [
        { ul: [
          "iOS(App Store) – Apple 기기(iPhone)용. iOS 16 이상이 필요합니다.",
          "Android(Google Play) – Android 기기용. Android 12 이상과 NFC가 필요합니다.",
        ] },
        "「UK ETA」라는 이름으로 검색하시기 바랍니다. 제공: Home Office.",
      ] },
      { h: "앱의 기능", blocks: [
        { ul: [
          "새 UK ETA 신청",
          "전자여권 스캔(NFC + OCR)",
          "본인 확인용 얼굴 사진(셀피) 촬영",
          "기존 신청의 상태 확인",
          "카드, Apple Pay, Google Pay 결제",
          "상태가 바뀌면 푸시 알림",
        ] },
      ] },
      { h: "앱으로 신청하는 방법", blocks: [
        { ul: [
          "1. App Store 또는 Google Play에서 「UK ETA」 앱을 내려받습니다",
          "2. 계정을 만듭니다(이메일 주소와 비밀번호)",
          "3. 전자여권을 스캔합니다(휴대폰을 여권에 댑니다)",
          "4. 얼굴 사진(셀피)을 촬영합니다",
          "5. 신청서 질문에 답합니다",
          `6. ${F.fee}을 결제합니다`,
          "7. 신청서를 제출하고 결과를 기다립니다",
        ] },
      ] },
      { h: "여권 스캔(NFC)", blocks: [
        "앱은 NFC(Near Field Communication) 기술로 여권의 전자 칩에서 정보를 읽습니다. 여권은 다음과 같이 스캔합니다.",
        { ul: [
          "여권의 사진이 있는 면을 펼칩니다",
          "휴대폰 뒷면을 펼친 여권에 댑니다",
          "5~10초 동안 움직이지 않습니다",
          "앱에서 정보를 읽었다는 확인이 나올 때까지 기다립니다",
        ] },
      ] },
      { h: "모바일 앱의 장점", blocks: [
        { ul: [
          "NFC 여권 스캔으로 정보가 자동 입력됩니다",
          "웹사이트보다 빠르게 신청할 수 있습니다",
          "신청 상태를 푸시 알림으로 받습니다",
          "생체 인증 보안(Face ID / Touch ID)",
        ] },
        { note: "주의: 반드시 공식 앱을 내려받으시기 바랍니다. 앱 스토어에서 제공자가 「Home Office」인지 확인하십시오. 가짜 앱은 개인정보를 빼돌릴 수 있습니다." },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    ],
  },

  "transit": {
    slug: "hwanseung-transit",
    group: "eta",
    title: "영국 경유·환승 시 UK ETA가 필요한가 | 2026",
    description: "영국 공항 환승 시 UK ETA가 필요한지 정리했습니다. 입국심사를 통과하면(landside) 필요하고, 통과하지 않고 갈아타면(airside) 필요하지 않습니다.",
    h1: "영국 환승 시 UK ETA가 필요합니까?",
    lead: "환승할 때 UK ETA가 필요한 것은 다음 여정 전에 영국 공항의 입국심사를 통과하는 경우(landside)뿐입니다. 입국심사를 거치지 않고 비행기를 갈아타는 경우(airside)에는 ETA가 필요하지 않습니다. 확실하지 않으면 항공사에 문의하시기 바랍니다.",
    card: "airside와 landside: 환승 시 ETA가 필요한 경우",
    sections: [
      { h: "환승 규칙", blocks: [
        "ETA 대상 국적자는 영국 공항에서 입국심사를 통과하는 환승(landside transit)이라면 UK ETA가 필요하며, 한국 여권 소지자도 마찬가지입니다. 유럽 국가(EU) 국민에게는 2025년 4월 2일부터 이 요건이 적용되었습니다. 입국심사를 거치지 않는 환승(airside transit)에는 ETA가 필요하지 않습니다. 확실하지 않으면 항공사에 문의하시기 바랍니다.",
        { ul: [
          "Landside 환승(입국심사 통과): ETA 필요",
          "Airside 환승(여권 심사 없음): ETA 불필요",
          "공식 factsheet에 따르면 히드로(Heathrow) 또는 맨체스터(Manchester)를 경유하면서 영국 여권 심사를 통과하지 않는 여행자는 현재 ETA가 필요하지 않습니다",
          "환승 유형은 항상 항공사에 확인하시기 바랍니다",
        ] },
      ] },
      { h: "환승 유형", blocks: [
        { table: { head: ["유형", "내용", "ETA 필요 여부"], rows: [
          ["Airside 환승(공항 내)", "입국심사를 통과하지 않고 공항 안에서 갈아탑니다. 입국심사를 통과해야 하는지 확실하지 않으면 항공사에 문의하시기 바랍니다.", "불필요"],
          ["Landside 환승", "다음 여정 전에 입국심사를 통과합니다. 예를 들어 수하물을 찾거나 호텔에서 묵는 경우이며, 이때는 정식으로 영국에 입국하게 됩니다.", "필요"],
        ] } },
        "영국 공항에서 입국심사를 통과한다면 환승 시간이 아무리 짧아도 UK ETA가 필요합니다. 입국심사를 거치지 않고 갈아타는 경우(airside)에는 ETA가 필요하지 않습니다.",
      ] },
      { h: "환승 시 ETA 요건의 예외", blocks: [
        "환승 시 ETA 요건에는 예외가 많지 않습니다.",
        { ul: [
          "아일랜드 국민(공동 여행 구역, CTA)",
          "유효한 영국 비자 소지자",
          "영국 영주 자격 보유자(settled/pre-settled status)",
        ] },
      ] },
      { h: "환승 때 ETA 없이 가려면", blocks: [
        "UK ETA를 신청하고 싶지 않다면 영국을 거치지 않는 경로를 선택할 수 있습니다. 예를 들면 다음과 같습니다.",
        { ul: [
          "목적지 직항편",
          "EU 국가에서 환승(암스테르담, 프랑크푸르트, 파리)",
          "더블린에서 환승(아일랜드 – ETA 불필요)",
        ] },
        { note: `팁: 런던에서 환승하는 항공편이라면 출발 최소 ${F.decisionDays} 영업일 전에 UK ETA를 신청하시기 바랍니다. ETA가 없으면 탑승을 거부당할 수 있습니다.` },
      ] },
    ],
    sources: [
      { label: "GOV.UK – Electronic travel authorisation (ETA)", url: "https://www.gov.uk/eta" },
      { label: "Home Office – ETA factsheet (2026년 4월)", url: "https://homeofficemedia.blog.gov.uk/electronic-travel-authorisation-eta-factsheet-april-2026/" },
    ],
  },

  "eta-news": {
    slug: "eta-sosik",
    group: "eta",
    title: `UK ETA 소식 2026: 수수료 ${F.fee}, 전면 시행 등 주요 변경`,
    description: `UK ETA 최신 소식: 2026년 4월 8일 수수료 ${F.fee} 인상, 2026년 2월 25일부터 전면 시행, 2025년 4월 2일 유럽 국민으로 대상 확대.`,
    h1: "UK ETA와 영국 여행 관련 소식",
    lead: `최근 변경 사항 요약: UK ETA 수수료는 2026년 4월 8일부터 ${F.fee}이며, 2026년 2월 25일부터 전면 시행되고 있고, 2025년 4월 2일부터는 EU 국민도 대상이 되었습니다. GOV.UK와 Home Office 자료를 기준으로 정리했습니다.`,
    card: `수수료 ${F.fee} 인상, 전면 시행 등 최근 변경 사항`,
    sections: [
      { h: `2026년 4월 8일: UK ETA 수수료 ${F.fee} 인상`, blocks: [
        `2026년 4월 8일부터 UK ETA 수수료는 기존 £16에서 25% 인상된 ${F.fee}입니다. 기준은 신청일입니다.`,
        `Home Office는 UK ETA(Electronic Travel Authorisation) 수수료 인상(£16 → ${F.fee})을 확정했습니다. 새 요금은 2026년 4월 8일부터 적용됩니다.`,
        `금액은 신청일로 정해집니다. 2026년 4월 8일 이전에 신청한 사람은 £16을 냈고, 2026년 4월 8일 이후 신청분은 ${F.fee}입니다.`,
        `제도 도입 이후 또 한 번의 인상입니다. 수수료는 £10에서 시작해 £16을 거쳐 현재 ${F.fee}입니다. 허가는 여전히 ${F.validYears}년간 유효하며 여러 번 입국할 수 있습니다(1회 체류 최대 ${F.staySixMonths}개월).`,
        "이번 인상은 영국 입국에 UK ETA가 필요한 50여 개국 국민에게 적용됩니다.",
        "출처: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2026년 2월 25일: UK ETA 전면 의무화", blocks: [
        "2026년 2월 25일부터 UK ETA가 전면 시행되어, 항공사는 유효한 허가가 없는 승객을 탑승시키지 않습니다.",
        "UK ETA 도입의 유예 기간은 2026년 2월 25일에 끝났습니다. 이날부터 요건이 전면 적용됩니다.",
        "실제로 운송 회사(항공사, 페리, Eurostar)는 ETA가 필요하지만 없는 여행자를 태우지 않습니다. 운송 회사는 유효한 허가가 없는 승객을 태우면 벌금을 물 수 있습니다.",
        `따라서 ETA는 여행 전에 받아 두셔야 합니다. 일부 신청은 추가 확인이 필요할 수 있으므로 최소 ${F.decisionDays} 영업일 전에 신청하시기 바랍니다.`,
        "출처: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2025년 4월 2일: 유럽 국민도 UK ETA 대상", blocks: [
        "2025년 4월 2일부터 EU, 유럽경제지역(EEA), 스위스 국민도 영국에 가기 전에 UK ETA를 받아야 합니다.",
        "2025년 4월 2일부터 UK ETA 제도는 유럽연합, 유럽경제지역, 스위스 국민에게도 적용되었습니다.",
        "ETA는 관광·출장, 친척 방문, 입국심사를 통과하는 환승 시에 필요합니다. 어린이와 영유아도 해당하며, 한 사람마다 각자 신청합니다.",
        `허가는 신청에 사용한 여권에 전자적으로 연결되며, ${F.validYears}년 동안 여러 번 입국할 수 있습니다.`,
        "출처: [GOV.UK – Apply for an ETA](https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta)",
      ] },
      { h: "2026년 4월 8일: 영국 출입국 관련 수수료 인상", blocks: [
        "ETA와 함께 2026년 4월 8일부터 Home Office의 다른 수수료도 올랐습니다. 방문 비자, 정착, 국적 취득 관련 수수료 등이 포함됩니다.",
        `Home Office는 2026년 4월 8일 공식 수수료표를 개정했습니다. ETA 수수료 인상(${F.fee}) 외에도 대부분의 출입국·국적 관련 수수료가 인상되었습니다.`,
        "방문 비자(visit visa), 정착(settlement) 관련 수수료, 영국 국적 신청 등이 해당합니다.",
        "장기 체류나 ETA 이외의 비자를 계획하고 계신다면 신청 전에 GOV.UK 공식 페이지에서 현재 수수료를 확인하시기 바랍니다.",
        "출처: [GOV.UK – Visa fees](https://www.gov.uk/government/publications/visa-regulations-revised-table)",
      ] },
      { h: "2026년 3월 1일: 영국 여행 시 안전에 관해 알아 둘 점", blocks: [
        "출발 전에 최신 안전 공지를 확인하고, 여권과 ETA가 유효한지 확인해 두시기 바랍니다.",
        "영국은 인기 있고 전반적으로 안전한 여행지이지만, 여행할 때마다 당국의 최신 공지를 확인하는 것이 좋습니다.",
        "출발 전에 여권이 체류 기간 내내 유효한지, 그 여권에 연결된 유효한 UK ETA가 있는지, 여행자 보험에 가입했는지 확인하시기 바랍니다.",
        "현지 상황과 위협 수준에 관한 최신 정보는 영국 정부(GOV.UK)와 관련 재외 공관 등 공식 출처에서 발표합니다. 영국의 긴급 전화번호는 999입니다.",
        "출처: [GOV.UK – Foreign travel advice](https://www.gov.uk/foreign-travel-advice)",
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
