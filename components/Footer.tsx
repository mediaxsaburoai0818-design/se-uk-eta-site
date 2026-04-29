import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#0e3a56]">
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
                Komplett guide om elektronisk reseauktorisering
                (ETA) till Storbritannien.
              </p>
            </div>

            {/* ETA Info links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Information om UK ETA
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/eta-info/what-is-eta/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Vad ar UK ETA?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eta-info/application/"
                    className="hover:text-gray-200 transition" style={{ color: "white", textDecoration: "underline" }}
                  >
                    Hur ansoker man?
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
                    Giltighet
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
              </ul>
            </div>

            {/* Site info links */}
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "white" }}>
                Om webbplatsen
              </h3>
              <ul className="space-y-2 text-sm">
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
                    Anvandningsvillkor
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
              <ul className="space-y-2 text-sm">
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
                    Kontrollera visumkrav for UK
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
              <div className="mt-4 p-3 bg-[#1a5276] border border-white/10 rounded text-xs text-gray-200">
                Denna webbplats ar inte ansluten till Storbritanniens regering. Officiell
                UK ETA-sida:{" "}
                <a
                  href="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta"
                  className="text-gray-200 underline hover:text-white"
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
            <p className="text-xs text-center text-gray-200">
              &copy; {new Date().getFullYear()} UK ETA Online. Alla rattigheter
              forbehallna. | Informationswebbplats &mdash; detta ar inte en officiell
              webbplats for Storbritanniens regering.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
