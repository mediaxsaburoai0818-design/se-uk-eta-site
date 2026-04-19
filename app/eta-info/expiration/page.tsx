import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "UK ETA giltighetstid - Nar ska du fornya?",
  description:
    "UK ETA galler i 2 ar fran godkannande. Lar dig nar du behover fornya auktoriseringen och vilka andringar som ogiltigforklarar den.",
};

export default function Expiration() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Giltighet" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        UK ETA giltighetstid
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        UK ETA-auktoriseringen galler i <strong>2 ar</strong> fran
        utfardandedatumet eller tills passet gar ut &mdash; beroende pa
        vad som intraffar forst.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Giltighetsregler
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Giltig i 2 ar fran utfardandedatumet</li>
          <li>Gar ut tillsammans med passet (om passet gar ut tidigare)</li>
          <li>Tillater flera inresor till UK under giltighetstiden</li>
          <li>Varje vistelse far inte overstiga 6 manader</li>
          <li>ETA ar kopplad till ett specifikt pass</li>
        </ul>

        <h2 className="heading-band">
          Nar behover du ansoka pa nytt?
        </h2>
        <p>
          En ny UK ETA-ansokan kravs i foljande fall:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Efter 2 ar fran utfardandet av ETA</li>
          <li>Efter att du fatt ett nytt pass</li>
          <li>Efter namnbyte</li>
          <li>Efter byte av medborgarskap</li>
          <li>Efter konsbyte</li>
          <li>Efter forandrade omstandigheter som paverkar behorighetenen</li>
        </ul>

        <h2 className="heading-band">
          Kan jag resa med en ETA som snart gar ut?
        </h2>
        <p>
          UK ETA maste vara giltig vid inresan till Storbritannien. Den
          behover inte vara giltig under hela vistelseperioden &mdash; det
          viktiga ar att den ar giltig pa ankomstdagen. Det rekommenderas
          dock att ansoka om en ny ETA i god tid.
        </p>

        <h2 className="heading-band">
          Hur kontrollerar jag giltighetsdatumet?
        </h2>
        <p>
          Giltighetsdatumet for UK ETA kan kontrolleras i mobilappen
          &quot;UK ETA&quot; eller pa GOV.UK:s webbplats genom att logga in
          pa kontot som skapades vid ansokan.
        </p>

        <h2 className="heading-band">
          Vad hander om jag byter pass under ETA:s giltighetstid?
        </h2>
        <p>
          ETA ar kopplad till ett specifikt pass. Om du far ett nytt pass
          (t.ex. efter att det gamla gatt ut eller vid namnbyte) maste du
          ansoka om en ny ETA och betala avgiften pa &pound;10 igen. Den
          gamla ETA:n slutar galla.
        </p>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Tips:</strong> Det rekommenderas att ansoka om UK ETA
          minst 72 timmar fore den planerade resan for att ha tid for
          handlaggning av ansokan.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/eta-info/status-check/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          Kontrollera ansokningsstatus &rarr;
        </Link>
        <a
          href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-md mx-auto bg-[#8d1812] hover:bg-[#6d120e] rounded-lg py-5 px-6 text-center transition shadow-lg"
          style={{ color: "white", textDecoration: "none" }}
        >
          <span className="text-white text-lg font-bold" style={{ color: "white" }}>Ansok om UK ETA</span>
        </a>
      </div>
    </div>
  );
}
