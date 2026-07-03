// Senaste nyheterna om UK ETA och resor till Storbritannien.
// Endast fakta från 2025-2026 (källor: GOV.UK / Home Office).

// Stable category keys (do NOT translate the keys). Only translate CATEGORY_LABEL values per language.
export type NewsCategory = "fee" | "eta" | "travel" | "safety";

export const CATEGORY_LABEL: Record<NewsCategory, string> = {
  fee: "Avgifter",
  eta: "ETA",
  travel: "Inresa & resa",
  safety: "Säkerhet",
};

export const CATEGORY_STYLE: Record<NewsCategory, { bg: string; fg: string }> = {
  fee: { bg: "#C5A24A", fg: "#1c1505" },
  eta: { bg: "#022444", fg: "#ffffff" },
  travel: { bg: "#8d1812", fg: "#ffffff" },
  safety: { bg: "#44403c", fg: "#ffffff" },
};

export interface NewsItem {
  slug: string;
  date: string; // YYYY-MM-DD
  category: NewsCategory;
  title: string;
  summary: string;
  body: string[];
  source?: { label: string; href: string };
}

export const newsItems: NewsItem[] = [
  {
    slug: "oplata-uk-eta-20-funtow",
    date: "2026-04-08",
    category: "fee",
    title: "Avgiften för UK ETA höjdes till £20 (från 8 april 2026)",
    summary:
      "Från och med 8 april 2026 är avgiften för UK ETA £20 i stället för tidigare £16 (en ökning med 25 %). Det är ansökningsdatumet som avgör.",
    body: [
      "Home Office har bekräftat höjningen av avgiften för UK ETA (Electronic Travel Authorisation) från £16 till £20. Den nya taxan gäller från och med 8 april 2026.",
      "Det är ansökningsdatumet som avgör avgiftens storlek: den som lämnade in sin ansökan före 8 april 2026 betalade £16, medan ansökningar som lämnas in 8 april eller senare kostar £20 (cirka 250 kr).",
      "Det är ännu en höjning i systemets historia: ETA startade med en avgift på £10, höjdes sedan till £16 och har nu nått £20. Auktorisationen förblir giltig i 2 år och ger rätt till flera inresor (varje vistelse upp till 6 månader).",
      "Höjningen berör medborgare i över 50 länder som behöver UK ETA för att resa in i Storbritannien.",
    ],
    source: { label: "GOV.UK - Apply for an ETA", href: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
  },
  {
    slug: "uk-eta-w-pelni-obowiazkowa-luty-2026",
    date: "2026-02-25",
    category: "eta",
    title: "UK ETA fullt obligatorisk från 25 februari 2026",
    summary:
      "Från och med 25 februari 2026 tillämpas UK ETA fullt ut: flygbolagen släpper inte ombord en passagerare utan giltig auktorisation.",
    body: [
      "Den 25 februari 2026 avslutades övergångsperioden för införandet av UK ETA. Från och med detta datum tillämpas kravet fullt ut.",
      "I praktiken innebär det att transportörer (flygbolag, färjor, Eurostar) inte tillåter resenärer som behöver ETA men saknar den att gå ombord. Transportörer riskerar böter för att frakta en passagerare utan giltig auktorisation.",
      "Därför bör ETA skaffas före resan - helst några dagar i förväg, eftersom handläggningen av ansökan kan ta upp till 72 timmar.",
    ],
    source: { label: "GOV.UK - Apply for an ETA", href: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
  },
  {
    slug: "obywatele-ue-uk-eta-od-kwietnia-2025",
    date: "2025-04-02",
    category: "eta",
    title: "EU-medborgare måste ha UK ETA från 2 april 2025",
    summary:
      "Från och med 2 april 2025 måste medborgare i EU, EES och Schweiz skaffa UK ETA före resa till Storbritannien.",
    body: [
      "Från och med 2 april 2025 omfattar systemet UK ETA medborgare i Europeiska unionen, Europeiska ekonomiska samarbetsområdet samt Schweiz.",
      "ETA krävs vid turist- och affärsresor, släktbesök samt vid transit som kräver passage av gränskontrollen. Detta gäller även barn och spädbarn - varje person lämnar in en egen ansökan.",
      "Auktorisationen är elektroniskt kopplad till det pass som använts i ansökan och tillåter flera inresor under 2 år.",
    ],
    source: { label: "GOV.UK - Apply for an ETA", href: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
  },
  {
    slug: "podwyzka-oplat-imigracyjnych-uk-2026",
    date: "2026-04-08",
    category: "travel",
    title: "Högre invandringsavgifter i Storbritannien från april 2026",
    summary:
      "Tillsammans med ETA höjdes från 8 april 2026 även andra avgifter hos Home Office - bland annat för inresevisum, bosättning och medborgarskap.",
    body: [
      "Den 8 april 2026 uppdaterade Home Office sin officiella avgiftstabell. Förutom höjningen av ETA till £20 höjdes även de flesta andra invandrings- och medborgarskapsavgifter.",
      "Det gäller bland annat besöksvisum (visit visa), bosättningsavgifter (settlement) samt ansökningar om brittiskt medborgarskap.",
      "Om du planerar en längre vistelse eller en annan typ av visum än ETA, kontrollera den aktuella avgiften på den officiella GOV.UK-sidan innan du lämnar in din ansökan.",
    ],
    source: { label: "GOV.UK - Visa fees", href: "https://www.gov.uk/government/publications/visa-regulations-revised-table" },
  },
  {
    slug: "bezpieczenstwo-podrozy-wielka-brytania",
    date: "2026-03-01",
    category: "safety",
    title: "Ressäkerhet till Storbritannien - vad du bör tänka på",
    summary:
      "Inför avresan är det klokt att kontrollera aktuella säkerhetsmeddelanden samt försäkra sig om att passet och ETA är giltiga.",
    body: [
      "Storbritannien är ett populärt och i allmänhet säkert resmål, men inför varje resa är det klokt att kontrollera myndigheternas aktuella meddelanden.",
      "Innan du reser, försäkra dig om att: passet är giltigt under hela vistelsen, att du har en giltig UK ETA kopplad till detta pass, samt att du har en reseförsäkring.",
      "Aktuell information om läget och hotnivån publiceras av officiella källor - Storbritanniens regering (GOV.UK) samt berörda diplomatiska representationer. I nödsituationer i UK gäller larmnumret 999.",
    ],
    source: { label: "GOV.UK - Foreign travel advice", href: "https://www.gov.uk/foreign-travel-advice" },
  },
];
