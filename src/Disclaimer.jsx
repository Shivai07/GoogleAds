
const DISCOVER_BOX_LINKS = [
  { label: "Computer Hardware",                    href: "#" },
  { label: "Premium download manager subscriptions", href: "#" },
  { label: "software",                             href: "#" },
];

// ── Discover More — inline chip tags ─────────────────────────
const DISCOVER_TAGS = [
  "Data recovery services",
  "IDM software licenses",
  "Cloud storage solutions",
  "IDM tutorial videos",
  "Antivirus & Malware",
  "Software security audits",
  "Online tech support",
  "Automated update system",
  "Apple iPhones",
  "Best download manager",
];

// ── Disclaimer Component ──────────────────────────────────────
function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* Page Label */}
        <p className="text-gray-500 text-base mb-4">Disclaimer</p>

        {/* ── Heading ── */}
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Disclaimer for idmextension.xyz
        </h1>

        <p className="text-slate-700 leading-relaxed mb-4">
          If you require any more information or have any questions about our site's disclaimer,
          please feel free to contact us by email at{" "}
          <a href="mailto:effectssoundproof@gmail.com" className="text-blue-600 font-semibold hover:underline">
            effectssoundproof@gmail.com
          </a>
          .
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          The information provided on <strong>idmextension.xyz</strong> is for general informational
          purposes only. While we strive to ensure that the information is accurate and up-to-date,
          we make no warranties or representations about the completeness, reliability, or
          suitability of the information contained on this site.
        </p>

        {/* Discover More — arrow box */}
        <div className="border border-gray-200 rounded-md mb-6">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
            <span className="font-semibold text-slate-800 text-sm">Discover more</span>
          </div>
          {DISCOVER_BOX_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="flex items-center justify-between px-5 py-4 border-b border-gray-100 last:border-none text-slate-700 text-sm hover:bg-gray-50 transition-colors"
            >
              {link.label}
              <span className="text-gray-400">›</span>
            </a>
          ))}
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Any reliance you place on such information is therefore strictly at your own risk. We
          shall not be liable for any losses or damages arising from the use of{" "}
          <strong>idmextension.xyz</strong> or from the use of any information provided on it.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          The content on <strong>idmextension.xyz</strong> may include links to other websites or
          resources. These links are provided for your convenience and do not signify endorsement
          of the linked sites. We have no control over the nature, content, or availability of
          those sites and accept no responsibility for them.
        </p>

        <p className="text-slate-700 leading-relaxed mb-8">
          The views and opinions expressed on <strong>idmextension.xyz</strong> are those of the
          authors and do not necessarily reflect the views of any organizations or entities with
          which they are affiliated.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── Consent ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Consent</h2>
        <p className="text-slate-700 leading-relaxed mb-8">
          By continuing to use our website, you acknowledge and agree to the terms of this
          disclaimer.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── Updates ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Updates</h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          We reserve the right to update or modify this document at any time. Any changes will be
          clearly posted on this page.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          If you wish to contact us, please email us at{" "}
          <a href="mailto:effectssoundproof@gmail.com" className="text-blue-600 font-semibold hover:underline">
            effectssoundproof@gmail.com
          </a>{" "}
          or use the <strong>Contact Us</strong> page available on our website.
        </p>

        {/* Go to homepage link */}
        <p className="mb-4">
          <a href="/" className="text-blue-600 hover:underline">
            👉 Go to homepage → idmextension.xyz
          </a>
        </p>

        {/* Discover More — inline chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-slate-700 font-medium mr-1">Discover more</span>
          {DISCOVER_TAGS.map((tag) => (
            <a
              key={tag}
              href="#"
              className="flex items-center gap-1 border border-blue-400 text-blue-600 text-sm px-3 py-1 rounded-full hover:bg-blue-50 transition-colors"
            >
              <span className="text-blue-400">⊕</span>
              {tag}
            </a>
          ))}
        </div>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        Copyright © 2026 Praise The Sun | Powered by{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Astra WordPress Theme
        </a>
      </footer>
    </div>
  );
}

export default Disclaimer;