import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Kontrollera status for UK ETA-ansokan",
  description:
    "Hur du kontrollerar status for din UK ETA-ansokan. Mojliga statusar och vad de betyder.",
};

export default function StatusCheck() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Information om UK ETA", href: "/eta-info/what-is-eta/" },
          { label: "Kontrollera status" },
        ]}
      />

      <h1
        className="text-3xl md:text-4xl font-bold text-[#022444] mb-6"
        style={{ fontFamily: "var(--font-noto-serif), serif" }}
      >
        Kontrollera status for UK ETA-ansokan
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Efter att du lamnat in din UK ETA-ansokan kan du nar som helst
        kontrollera dess status via mobilappen eller pa GOV.UK:s webbplats.
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="heading-band">
          Hur kontrollerar du status?
        </h2>
        <ol className="list-decimal list-inside space-y-3">
          <li>
            Oppna appen &quot;UK ETA&quot; pa telefonen eller besok{" "}
            <a
              href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#022444] underline"
            >
              GOV.UK
            </a>
          </li>
          <li>
            Logga in pa kontot som skapades vid ansokan
          </li>
          <li>
            Ansokans status visas pa huvudskarmen
          </li>
        </ol>
        <p>
          Du far ocksa ett e-postmeddelande nar ansokans status andras.
        </p>

        <h2 className="heading-band">
          Mojliga ansokningsstatusar
        </h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-green-700 mb-1">
              Approved (Godkand)
            </h3>
            <p className="text-sm">
              Ansokan har godkants. ETA ar kopplad till ditt pass. Du kan
              resa till Storbritannien. Du behover inte skriva ut nagot
              dokument.
            </p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-yellow-600 mb-1">
              Pending (Under handlaggning)
            </h3>
            <p className="text-sm">
              Ansokan behandlas fortfarande. Kontrollera igen efter 72
              timmar. Boka inte flygbiljetter forran du fatt godkannande.
            </p>
          </div>

          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-bold text-red-600 mb-1">
              Refused (Avslagen)
            </h3>
            <p className="text-sm">
              Ansokan har avslagits. Du far ett e-postmeddelande med
              information om orsakerna till avslaget. Du kan overklaga
              eller ansoka om brittiskt visum.
            </p>
          </div>
        </div>

        <h2 className="heading-band">
          Vad gor jag om status ar &quot;Pending&quot;?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Vanta upp till 72 timmar &mdash; de flesta ansokningar behandlas
            inom denna tid
          </li>
          <li>Kontrollera status i appen eller via e-post</li>
          <li>Lamna inte in en ny ansokan &mdash; det paskyndar inte processen</li>
          <li>
            I undantagsfall kan handlaggningen ta langre tid
          </li>
        </ul>

        <h2 className="heading-band">
          Vad gor jag vid avslag?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Las noga igenom avslagsorsaken i e-postmeddelandet</li>
          <li>Du kan overklaga (administrative review)</li>
          <li>Du kan ansoka om turistvisum Standard Visitor visa</li>
          <li>Kontakta en immigrationsadvokat vid behov</li>
        </ul>

        <div className="bg-[#F5F5F5] border-l-4 border-[#022444] p-4 rounded-r text-sm">
          <strong>Tips:</strong> Spara e-postmeddelandet med bekraftelse
          av din ansokan. Det innehaller referensnumret som behovs vid
          kontakt med UK Visas and Immigration.
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/eta-info/expiration/"
          className="bg-[#022444] hover:bg-[#0a3a6b] text-white px-6 py-3 rounded font-bold text-sm transition text-center"
        >
          UK ETA giltighetstid &rarr;
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
