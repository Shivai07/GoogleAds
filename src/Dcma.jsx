
const DISCOVER_TAGS = [
  "Laptops & Notebooks",
  "Cloud storage solutions",
  "Computer Hardware",
  "Software update guides",
  "Web Browsers",
  "Best download manager",
  "IDM installation support",
  "Software security audits",
  "USB flash drives",
  "High speed internet plans",
];

// ── Discover More box links (arrow rows) ─────────────────────
const DISCOVER_BOX_LINKS = [
  { label: "IDM tutorial videos", href: "#" },
  { label: "IDM extension fix",   href: "#" },
  { label: "External hard drives", href: "#" },
];

// ── DCMA Component ────────────────────────────────────────────
function Dcma() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* Page Label */}
        <p className="text-gray-500 text-base mb-4">DCMA</p>

        {/* ── Heading ── */}
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Digital Millennium Copyright Act (DMCA) Policy
        </h1>

        <p className="text-slate-700 leading-relaxed mb-4">
          This Digital Millennium Copyright Act Policy ("Policy") applies to the{" "}
          <a href="https://idmextension.xyz" className="text-blue-600 hover:underline">
            https://idmextension.xyz
          </a>{" "}
          website ("Website" or "Service") and any of its related products and services
          (collectively, "Services") and outlines how this Website operator ("Operator", "we",
          "us" or "our") addresses copyright infringement notifications and how you ("you" or
          "your") may submit a copyright infringement complaint.
        </p>

        <p className="text-slate-700 leading-relaxed mb-8">
          Protection of intellectual property is of utmost importance to us and we ask our users
          and their authorized agents to do the same. It is our policy to expeditiously respond to
          clear notifications of alleged copyright infringement that comply with the United States
          Digital Millennium Copyright Act ("DMCA") of 1998, the text of which can be found on the
          U.S. Copyright Office.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── What to Consider ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          What to Consider Before Submitting a Copyright Complaint
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          Please note that if you are unsure whether the material you are reporting is in fact
          infringing, you may wish to contact an attorney before filing a notification with us.
        </p>

        <p className="text-slate-700 leading-relaxed mb-8">
          The DMCA requires you to provide your personal information in the copyright infringement
          notification. If you are concerned about the privacy of your personal information, you may
          wish to appoint an agent to report infringing material for you.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── Notifications of Infringement ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Notifications of Infringement
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          If you are a copyright owner or an agent thereof, and you believe that any material
          available on our Services infringes your copyrights, then you may submit a written
          copyright infringement notification ("Notification") using the contact details below
          pursuant to the DMCA. All such Notifications must comply with the DMCA requirements.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Filing a DMCA complaint is the start of a pre-defined legal process. Your complaint will
          be reviewed for accuracy, validity, and completeness. If your complaint has satisfied
          these requirements, our response may include the removal or restriction of access to the
          allegedly infringing material.
        </p>

        {/* Discover More — inline chips */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
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

        <p className="text-slate-700 leading-relaxed mb-4">
          If we remove or restrict access to materials or terminate any account in response to a
          notification of alleged infringement, we will make a good faith effort to contact the
          affected user with information concerning the removal or restriction of access.
        </p>

        <p className="text-slate-700 leading-relaxed mb-8">
          Notwithstanding anything to the contrary contained in any portion of this Policy, the
          Operator reserves the right to take no action upon receipt of a DMCA copyright
          infringement notification if it fails to comply with all the requirements of the DMCA for
          such notifications.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── Changes and Amendments ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Changes and Amendments
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          We reserve the right to modify this Policy or its terms related to the Website and
          Services at any time at our discretion. When we do, we will post a notification on the
          main page of the Website. We may also provide notice to you in other ways at our
          discretion, such as through the contact information you have provided.
        </p>

        <p className="text-slate-700 leading-relaxed mb-8">
          An updated version of this Policy will be effective immediately upon the posting of the
          revised policy unless otherwise specified. Your continued use of the Website and Services
          after the effective date of the revised Policy (or such other act specified at that time)
          will constitute your consent to those changes.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── Reporting Copyright Infringement ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Reporting Copyright Infringement
        </h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          If you would like to notify us of the infringing material or activity, we encourage you
          to contact us using the details below:
        </p>

        <p className="mb-1">
          <a href="mailto:effectssoundproof@gmail.com" className="text-blue-600 hover:underline">
            ✉️ effectssoundproof@gmail.com
          </a>
        </p>
        <p className="text-slate-700 mb-6">
          ✉️ Or visit our{" "}
          <strong>Contact Us</strong> page at{" "}
          <a href="https://idmextension.xyz/contact" className="text-blue-600 hover:underline">
            https://idmextension.xyz/contact
          </a>
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

        <p className="text-slate-600 text-sm mb-8">
          Please allow us 2–5 business days for an email response.
        </p>

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

export default Dcma;