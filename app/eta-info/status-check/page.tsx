import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Kontrollera status på UK ETA-ansökan 2026 - vad statusarna betyder",
  description:
    "Kontrollera status på din UK ETA: officiella verktyget gov.uk/check-eta, beslut via e-post inom 1 dag (max 3 arbetsdagar) och vad du gör om beskedet dröjer.",
};

export default function StatusCheck() {
  return (
    <div>
      <section className="sub-hero relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sub-hero/status-check.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 sub-hero-scrim" />
        <div className="relative max-w-4xl mx-auto px-6 pt-12 pb-12 md:pt-14 md:pb-16">
          <p className="kicker mb-3 mt-4">INFORMATION OM UK ETA</p>
          <h1
            className="deco-head text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-noto-serif), serif" }}
          >
            <span className="deco-line" />
            Kontrollera status på UK ETA-ansökan
          </h1>
          <p className="text-white/85 leading-relaxed">
            Beslutet om din UK ETA skickas via e-post från UK Visas and
            Immigration (UKVI). Här förklarar vi hur lång tid det tar, hur du
            använder det officiella kontrollverktyget på GOV.UK och vad du gör
            om beskedet dröjer.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Två saker som ofta blandas ihop</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Det finns ingen sida där du kan följa hur långt handläggningen av
            en pågående ansökan har kommit. Skilj därför på två olika saker:
          </p>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-1">
                1. Beslutet om din ansökan &mdash; kommer via e-post
              </h3>
              <p className="text-sm text-gray-600">
                UKVI meddelar beslutet (godkänd eller avslagen) via e-post till
                den adress du angav i ansökan. Så länge du väntar på det
                mejlet är ansökan under handläggning.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-[#022444] mb-1">
                2. Om du redan har en giltig ETA &mdash; kontrolleras på GOV.UK
              </h3>
              <p className="text-sm text-gray-600">
                Med det officiella verktyget{" "}
                <a
                  href="https://www.gov.uk/check-eta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#022444] underline"
                >
                  gov.uk/check-eta
                </a>{" "}
                kan du se om det finns en ETA kopplad till ditt pass och när
                den löper ut. Verktyget visar däremot inte hur en pågående
                ansökan fortskrider.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">
            Så använder du det officiella kontrollverktyget
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>
              Gå in på{" "}
              <a
                href="https://www.gov.uk/check-eta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#022444] underline"
              >
                gov.uk/check-eta
              </a>{" "}
              (&quot;Check if you have an ETA&quot;)
            </li>
            <li>Ha det pass du använde vid ansökan till hands &mdash; ETA är kopplad till just det passet</li>
            <li>Verktyget visar om du har en giltig ETA och dess utgångsdatum</li>
          </ol>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Det är särskilt användbart om du ansökte för en tidigare resa och
            inte minns om tillståndet fortfarande gäller. En ETA är giltig i
            2 år eller tills passet löper ut, beroende på vilket som inträffar
            först.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Hur lång tid tar beslutet?</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-green-700 mb-1">Oftast inom en dag</h3>
              <p className="text-sm text-gray-600">
                De flesta får beslutet via e-post inom ett dygn. Den som
                ansöker via den officiella appen &quot;UK ETA&quot; får i många
                fall ett automatiskt beslut redan inom några minuter.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-yellow-600 mb-1">Som längst 3 arbetsdagar</h3>
              <p className="text-sm text-gray-600">
                Räkna med upp till 3 arbetsdagar (måndag&ndash;fredag) som
                yttersta gräns. Helger räknas inte som arbetsdagar &mdash; en
                ansökan som lämnas in på fredag kväll kan därför få besked
                först i mitten av veckan därpå.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4 bg-white">
              <h3 className="font-bold text-red-600 mb-1">Längre än 3 arbetsdagar?</h3>
              <p className="text-sm text-gray-600">
                Kontrollera först skräpposten. Om beskedet fortfarande saknas
                kan du kontakta UKVI &mdash; se nästa avsnitt.
              </p>
            </div>
          </div>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Viktigt:</strong> Enligt GOV.UK ska du inte resa till
            Storbritannien förrän du har fått godkännandet via e-post. Att
            resa medan ansökan fortfarande handläggs är inte tillåtet.
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">
            Inget e-postmeddelande? Gör så här
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Beslutsmejlet innehåller ett <strong>referensnummer på 16
            siffror</strong> för din ETA. Om mejlet inte dyker upp:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>
              <strong>Kontrollera skräpposten</strong> (spam/junk) &mdash; det
              vanligaste skälet till att beskedet &quot;saknas&quot;
            </li>
            <li>
              <strong>Kontakta UKVI via webbchatt:</strong>{" "}
              <a
                href="https://ukvi-eta-support-webchat.homeoffice.gov.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#022444] underline break-all"
              >
                ukvi-eta-support-webchat.homeoffice.gov.uk
              </a>
            </li>
          </ol>
          <div className="bg-gray-50 border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700 mt-6">
            <strong>Observera:</strong> UKVI:s support för ETA-frågor sker
            endast via webbchatt &mdash; det finns inget telefonnummer att
            ringa. Lämna inte in en ny ansökan bara för att beskedet dröjer;
            det snabbar inte på handläggningen.
          </div>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">Om ansökan avslås</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              Ett avslag kan <strong>inte överklagas</strong> &mdash; det finns
              ingen omprövningsprocess för ETA-beslut
            </li>
            <li>
              Vill du ändå resa till Storbritannien är vägen framåt att{" "}
              <strong>ansöka om visum</strong> (t.ex. Standard Visitor visa)
            </li>
            <li>
              Avgiften på &pound;20 <strong>återbetalas inte</strong>, inte
              heller vid avslag
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Läs mer på vår sida{" "}
            <Link href="/eta-info/eta-avslag/" className="text-[#022444] underline">
              om avslag på UK ETA
            </Link>{" "}
            och om{" "}
            <Link href="/eta-info/eta-eller-visum/" className="text-[#022444] underline">
              skillnaden mellan ETA och visum
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">När ETA är godkänd</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              ETA kopplas <strong>elektroniskt till ditt pass</strong> &mdash;
              det finns inget fysiskt dokument och inget behöver skrivas ut
            </li>
            <li>Vid resan visar du bara upp passet som vanligt</li>
            <li>
              Giltig i <strong>2 år</strong> eller tills passet löper ut,
              beroende på vilket som inträffar först
            </li>
            <li>
              En godkänd ETA <strong>garanterar inte inresa</strong> &mdash;
              det slutliga beslutet fattas alltid vid gränskontrollen
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="heading-band mb-6">
            Betalade du mer än &pound;20? Var uppmärksam
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Den officiella avgiften för UK ETA är <strong>&pound;20</strong>{" "}
            per person. Om du har betalat väsentligt mer har du sannolikt
            ansökt via en förmedlare eller en inofficiell webbplats &mdash;
            inte direkt hos den brittiska staten. Ansökan görs säkrast via den
            officiella appen &quot;UK ETA&quot; eller på GOV.UK.
          </p>
          <div className="bg-white border-l-4 border-[#022444] p-4 rounded-r text-sm text-gray-700">
            <strong>Tips:</strong> Spara beslutsmejlet från UKVI. Det
            innehåller referensnumret på 16 siffror som du behöver om du
            kontaktar UK Visas and Immigration.
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/eta-info/expiration/"
              className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
            >
              UK ETA:s giltighetstid &rarr;
            </Link>
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-xl border-2 border-white py-5 px-6 text-center transition shadow-lg"
              style={{ color: "white", textDecoration: "none" }}
            >
              <span className="text-white text-lg font-bold" style={{ color: "white" }}>Lämna in UK ETA-ansökan</span>
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-8 leading-relaxed">
            Källor: GOV.UK &mdash;{" "}
            <a
              href="https://www.gov.uk/check-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Check if you have an ETA
            </a>
            ,{" "}
            <a
              href="https://www.gov.uk/eta"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Electronic travel authorisation
            </a>{" "}
            samt Home Office ETA factsheet (april 2026). Senast uppdaterad:
            3 juli 2026.
          </p>
        </div>
      </section>
      {/* breadcrumb-bottom */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-6 pb-2">
          <Breadcrumb
            items={[
              { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
              { label: "Kontrollera status" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
