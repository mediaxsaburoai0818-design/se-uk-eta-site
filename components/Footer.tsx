import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#011a33]" style={{ color: "white" }}>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Site info */}
            <div>
              <p
                className="text-lg font-bold mb-3 text-white"
                style={{
                  fontFamily: "var(--font-noto-serif), serif",
                }}
              >
                UK ETA Online
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "white" }}>
                Den kompletta guiden till Electronic Travel Authorisation
                (ETA) till Storbritannien.
              </p>
            </div>

            {/* ETA Info links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Information om UK ETA
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "white" }}>
                <li>
                  <Link
                    href="/eta-info/what-is-eta/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Vad är UK ETA?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/application/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Så ansöker du
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/fee/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Avgifter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/expiration/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Giltighetstid
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/status-check/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Kontrollera status
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Senaste nyheterna
                  </Link>
                </li>
                <li>
                  <Link href="/uk-entry/wjazd-i-wiza/" className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}>
                    Inresa till UK och visum
                  </Link>
                </li>
                <li>
                  <Link href="/uk-entry/lotnisko-heathrow/" className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}>
                    Heathrow flygplats
                  </Link>
                </li>
                <li>
                  <Link href="/uk-entry/lotniska-londynu/" className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}>
                    Londons flygplatser
                  </Link>
                </li>
              </ul>
            </div>

            {/* Site info links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Information om webbplatsen
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "white" }}>
                <li>
                  <Link
                    href="/site-info/about/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Om oss
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/contact/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/privacy-policy/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Integritetspolicy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/site-info/agreement/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Användarvillkor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Webbplatskarta
                  </Link>
                </li>
              </ul>
            </div>

            {/* Official links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Officiella webbplatser
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "white" }}>
                <li>
                  <a
                    href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Officiell UK ETA-sida (GOV.UK)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/check-uk-visa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Kontrollera viseringskrav för Storbritannien
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swedenabroad.se/en/embassies/united-kingdom-london/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Sveriges ambassad i London
                  </a>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-[#022444] border border-white/10 rounded text-xs" style={{ color: "white" }}>
                Denna webbplats är inte kopplad till den brittiska regeringen. Officiell
                UK ETA-sida:{" "}
                <a
                  href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                  className="underline hover:text-white"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gov.uk/eta
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-4">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-xs text-center" style={{ color: "white" }}>
              &copy; {new Date().getFullYear()} UK ETA Online. Med ensamrätt.
              | Informationswebbplats &mdash; inte den brittiska regeringens
              officiella webbplats.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
