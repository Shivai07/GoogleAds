function DiscoverBox({ links }) {
  return (
    <div className="border border-gray-200 rounded-md my-6">
      <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
        <span className="font-semibold text-slate-800 text-sm">Discover more</span>
      </div>
      {links.map((label, i) => (
        <a
          key={i}
          href="#"
          className="flex items-center justify-between px-5 py-4 border-b border-gray-100 last:border-none text-slate-700 text-sm hover:bg-gray-50 transition-colors"
        >
          {label}
          <span className="text-gray-400">›</span>
        </a>
      ))}
    </div>
  );
}

// ── Terms Component ───────────────────────────────────────────
function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* ── Heading ── */}
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Terms and Conditions</h1>
        <p className="font-bold text-slate-800 mb-4">Last updated: December 01, 2024</p>
        <p className="text-slate-700 leading-relaxed mb-8">
          Please read these terms and conditions carefully before using Our Service.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── Interpretation and Definitions ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Interpretation and Definitions
        </h2>

        <h3 className="text-lg font-bold text-slate-900 mb-3">Interpretation</h3>
        <p className="text-slate-700 leading-relaxed mb-8">
          The words of which the initial letter is capitalized have meanings defined under the
          following conditions. The following definitions shall have the same meaning regardless of
          whether they appear in singular or in plural.
        </p>

        {/* ── Definitions ── */}
        <h3 className="text-lg font-bold text-slate-900 mb-3">Definitions</h3>
        <p className="text-slate-700 mb-4">
          For the purposes of these Terms and Conditions:
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-3 mb-8 leading-relaxed">
          <li>
            <strong>Affiliate</strong> means an entity that controls, is controlled by or is under
            common control with a party, where "control" means ownership of 50% or more of the
            shares, equity interest or other securities entitled to vote for election of directors
            or other managing authority.
          </li>
          <li>
            <strong>Country</strong> refers to: Uttar Pradesh, India
          </li>
          <li>
            <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in
            this Agreement) refers to IDM Extension.
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service such as a
            computer, a cellphone or a digital tablet.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and
            Conditions that form the entire agreement between You and the Company regarding the use
            of the Service.
          </li>
          <li>
            <strong>Third-party Social Media Service</strong> means any services or content
            (including data, information, products or services) provided by a third-party that may
            be displayed, included or made available by the Service.
          </li>
          <li>
            <strong>Website</strong> refers to IDM Extension, accessible from{" "}
            <a
              href="https://idmextension.xyz/"
              className="text-blue-600 hover:underline"
            >
              https://idmextension.xyz/
            </a>
          </li>
          <li>
            <strong>You</strong> means the individual accessing or using the Service, or the
            company, or other legal entity on behalf of which such individual is accessing or using
            the Service, as applicable.
          </li>
        </ul>

        <hr className="border-gray-200 mb-8" />

        {/* ── Acknowledgment ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Acknowledgment</h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          These are the Terms and Conditions governing the use of this Service and the agreement
          that operates between You and the Company. These Terms and Conditions set out the rights
          and obligations of all users regarding the use of the Service.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Your access to and use of the Service is conditioned on Your acceptance of and compliance
          with these Terms and Conditions. These Terms and Conditions apply to all visitors, users
          and others who access or use the Service.
        </p>

        {/* <DiscoverBox
          links={["Apple iPhones", "Software security audits", "External hard drive"]}
        /> */}

        <p className="text-slate-700 leading-relaxed mb-4">
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If
          You disagree with any part of these Terms and Conditions then You may not access the
          Service.
        </p>

        <p className="text-slate-700 leading-relaxed mb-4">
          You represent that you are over the age of 18. The Company does not permit those under 18
          to use the Service.
        </p>

        <p className="text-slate-700 leading-relaxed mb-8">
          Your access to and use of the Service is also conditioned on Your acceptance of and
          compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our
          policies and procedures on the collection, use and disclosure of Your personal information
          when You use the Application or the Website and tells You about Your privacy rights and
          how the law protects You. Please read Our Privacy Policy carefully before using Our
          Service.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── Links to Other Websites ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Links to Other Websites</h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          Our Service may contain links to third-party web sites or services that are not owned or
          controlled by the Company.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          The Company has no control over, and assumes no responsibility for, the content, privacy
          policies, or practices of any third party web sites or services. You further acknowledge
          and agree that the Company shall not be responsible or liable, directly or indirectly, for
          any damage or loss caused or alleged to be caused by or in connection with the use of or
          reliance on any such content, goods or services available on or through any such web sites
          or services.
        </p>

        {/* <DiscoverBox
          links={[
            "Premium download manager subscriptions",
            "App installation wizard",
            "High speed internet plans",
          ]}
        /> */}

        <p className="text-slate-700 leading-relaxed mb-8">
          We strongly advise You to read the terms and conditions and privacy policies of any
          third-party web sites or services that You visit.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── Termination ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Termination</h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          We may terminate or suspend Your access immediately, without prior notice or liability,
          for any reason whatsoever, including without limitation if You breach these Terms and
          Conditions.
        </p>

        <p className="text-slate-700 leading-relaxed mb-8">
          Upon termination, Your right to use the Service will cease immediately.
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── Limitation of Liability ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>

        <p className="text-slate-700 leading-relaxed mb-4">
          Notwithstanding any damages that You might incur, the entire liability of the Company and
          any of its suppliers under any provision of this Terms and Your exclusive remedy for all
          of the foregoing shall be limited to the amount actually paid by You through the Service
          or 100 USD if You haven't purchased anything through the Service.
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          To the maximum extent permitted by applicable law, in no event shall the Company or its
          suppliers be liable for any special, incidental, indirect, or consequential damages
          whatsoever...
        </p>

        {/* <DiscoverBox
          links={["download manager", "VPN services", "Update reminder service"]}
        /> */}

        {/* <p className="text-slate-600 italic text-sm mb-8">
          [Note: Remainder remains unchanged — apply the same edits where the company or domain
          name appears.]
        </p> */}

        <hr className="border-gray-200 mb-8" />

        {/* ── Governing Law ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>

        <p className="text-slate-700 leading-relaxed mb-8">
          The laws of the Country, excluding its conflicts of law rules, shall govern this Terms
          and Your use of the Service...
        </p>

        <hr className="border-gray-200 mb-8" />

        {/* ── Contact Us ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>

        <p className="text-slate-700 mb-4">
          If you have any questions about these Terms and Conditions, You can contact us:
        </p>

        <ul className="list-disc list-inside text-slate-700">
          <li>
            <strong>By email</strong>:{" "}
            <a
              href="mailto:support@idmextension.xyz"
              className="text-blue-600 hover:underline"
            >
              support@idmextension.xyz
            </a>
          </li>
        </ul>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 mt-12">
        Copyright © 2026 Praise The Sun | Powered by{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Astra WordPress Theme
        </a>
      </footer>
    </div>
  );
}

export default Terms;