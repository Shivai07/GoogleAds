
function DiscoverBox({ links }) {
  return (
    <div className="border border-gray-200 rounded-md my-6">
      <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
        <span className="font-semibold text-slate-800 text-sm">Discover more</span>
      </div>
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href || "#"}
          className="flex items-center justify-between px-5 py-4 border-b border-gray-100 last:border-none text-slate-700 text-sm hover:bg-gray-50 transition-colors"
        >
          {link.label}
          <span className="text-gray-400">›</span>
        </a>
      ))}
    </div>
  );
}

// ── Section Divider helper ────────────────────────────────────
function Section({ number, title, children }) {
  return (
    <>
      <hr className="border-gray-200 mb-8" />
      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        {number}. <strong>{title}</strong>
      </h2>
      {children}
    </>
  );
}

// ── Privacy Policy Component ──────────────────────────────────
function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* Page Label */}
        <p className="text-gray-500 text-base mb-4">Privacy Policy</p>

        {/* ── Heading ── */}
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
        <p className="font-bold text-slate-800 mb-4">Last Updated: December 1, 2024</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          This Privacy Policy outlines how we collect, use, disclose, and safeguard your
          information when you use our services. It also informs you about your privacy rights and
          how the law protects you.
        </p>

        {/* Discover More box — top */}
        {/* <DiscoverBox
          links={[
            { label: "IDM tutorial videos" },
            { label: "Custom browser extensions" },
            { label: "Android phones" },
          ]}
        /> */}

        <p className="text-slate-700 leading-relaxed mb-8">
          By accessing or using our website and services ("Service"), you consent to the collection
          and use of information in accordance with this Privacy Policy. This Policy was created
          with assistance from a Privacy Policy Generator.
        </p>

        {/* ── 1. Information We Collect (implied before section 2) ── */}
        <hr className="border-gray-200 mb-8" />
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          1. <strong>Information We Collect</strong>
        </h2>
        <p className="text-slate-700 leading-relaxed mb-8">
          We collect information you provide directly to us, as well as data collected automatically
          when you use our services.
        </p>

        {/* ── 2. Collecting and Using Your Personal Data ── */}
        <hr className="border-gray-200 mb-8" />
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          2. <strong>Collecting and Using Your Personal Data</strong>
        </h2>

        <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Data</h3>
        <p className="text-slate-700 mb-3">
          We may request the following personally identifiable information:
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-6">
          <li>First and last name</li>
          <li>Email address</li>
        </ul>

        <h3 className="text-lg font-bold text-slate-900 mb-3">Usage Data</h3>
        <p className="text-slate-700 mb-3">
          Usage Data is collected automatically and may include:
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-1 mb-8">
          <li>IP address, browser type/version</li>
          <li>Pages visited, time and date of visit, time spent</li>
          <li>Device type, operating system, unique identifiers</li>
          <li>Diagnostic and performance-related data</li>
        </ul>

        {/* ── 3. Tracking Technologies and Cookies ── */}
        <hr className="border-gray-200 mb-8" />
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          3. <strong>Tracking Technologies and Cookies</strong>
        </h2>
        <p className="text-slate-700 mb-4">
          We use cookies and similar tracking technologies (e.g., web beacons, tags) to track
          activity and improve our Service.
        </p>

        <h3 className="text-lg font-bold text-slate-900 mb-3">Types of Cookies We Use:</h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
          <li>
            <strong>Essential Cookies (Session)</strong>: Enable core functionality like user
            authentication.
          </li>
          <li>
            <strong>Cookies Policy Acceptance (Persistent)</strong>: Store your consent status.
          </li>
          <li>
            <strong>Functionality Cookies (Persistent)</strong>: Remember preferences like language
            and login info.
          </li>
        </ul>
        <p className="text-slate-700 mb-2">
          You can control or disable cookies through your browser settings. However, doing so may
          affect site functionality.
        </p>

        {/* Discover More box — cookies section */}
        {/* <DiscoverBox
          links={[
            { label: "software" },
            { label: "Software" },
            { label: "Software Utilities" },
          ]}
        /> */}

        <p className="text-slate-600 italic text-sm mb-8">
          For more information, please review our [Cookies Policy].
        </p>

        {/* ── 4. Use of Your Personal Data ── */}
        <Section number={4} title="Use of Your Personal Data">
          <p className="text-slate-700 mb-3">Your data may be used to:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1 mb-8">
            <li>Provide and maintain the Service</li>
            <li>Manage your account</li>
            <li>Fulfill legal or contractual obligations</li>
            <li>Contact you with updates, support, or notices</li>
            <li>Send promotional communications (unless you opt out)</li>
            <li>Process your requests</li>
            <li>Conduct business transfers or restructuring</li>
            <li>Improve site functionality and user experience</li>
          </ul>
        </Section>

        {/* ── 5. Sharing Your Personal Data ── */}
        <Section number={5} title="Sharing Your Personal Data">
          <p className="text-slate-700 mb-3">We may share your information:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
            <li>With Service Providers for analytics, operations, or communications</li>
            <li>During business transfers such as mergers or acquisitions</li>
            <li>With Affiliates under the same Privacy Policy</li>
            <li>With Business Partners for promotional offers</li>
            <li>In public areas of the site if you voluntarily post content</li>
            <li>With your explicit consent</li>
          </ul>

          {/* Discover More box — sharing section */}
          {/* <DiscoverBox
            links={[
              { label: "Download Managers" },
              { label: "Web Browsers" },
              { label: "Large file handler" },
            ]}
          /> */}
        </Section>

        {/* ── 6. Retention of Your Personal Data ── */}
        <Section number={6} title="Retention of Your Personal Data">
          <p className="text-slate-700 mb-3">
            We retain your information only as long as necessary for:
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-1 mb-4">
            <li>Legal or regulatory compliance</li>
            <li>Dispute resolution</li>
            <li>Service performance and improvement</li>
          </ul>
          <p className="text-slate-700 mb-8">
            Usage Data may be stored longer for security, audit, or legal purposes.
          </p>
        </Section>

        {/* ── 7. Transfer of Your Personal Data ── */}
        <Section number={7} title="Transfer of Your Personal Data">
          <p className="text-slate-700 mb-8">
            Your data may be processed and stored outside your region, including in countries with
            different data protection laws. By submitting your data, you consent to such transfers.
            We implement appropriate safeguards to ensure data security.
          </p>
        </Section>

        {/* ── 8. Deletion of Your Personal Data ── */}
        <Section number={8} title="Deletion of Your Personal Data">
          <p className="text-slate-700 mb-3">You may:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1 mb-8">
            <li>Access and update your information through your account</li>
            <li>Request correction or deletion by contacting us</li>
            <li>Request deletion of your data unless retention is legally required</li>
          </ul>
        </Section>

        {/* ── 9. Disclosure of Your Personal Data ── */}
        <Section number={9} title="Disclosure of Your Personal Data">
          <p className="text-slate-700 mb-3">We may disclose your information:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1 mb-8">
            <li>In the event of a business transaction</li>
            <li>As required by law or government authorities</li>
            <li>To protect our rights, prevent fraud, and ensure safety</li>
          </ul>
        </Section>

        {/* ── 10. Data Security ── */}
        <Section number={10} title="Data Security">
          <p className="text-slate-700 mb-8">
            We implement commercially reasonable measures to secure your data. However, no
            internet-based method of storage or transmission is 100% secure.
          </p>
        </Section>

        {/* ── 11. Children's Privacy ── */}
        <Section number={11} title="Children's Privacy">
          <p className="text-slate-700 mb-8">
            Our services are not intended for children under the age of 13. We do not knowingly
            collect data from minors. If we learn we have collected such data, we will delete it
            promptly.
          </p>
        </Section>

        {/* ── 12. Third-Party Links ── */}
        <Section number={12} title="Third-Party Links">
          <p className="text-slate-700 mb-8">
            Our site may contain links to third-party websites. We are not responsible for the
            privacy practices of these external sites. Please review their privacy policies
            individually.
          </p>
        </Section>

        {/* ── 13. Changes to This Privacy Policy ── */}
        <Section number={13} title="Changes to This Privacy Policy">
          <p className="text-slate-700 mb-8">
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page, with the updated "Last Updated" date. Where appropriate, we may also notify you
            via email or through the Service.
          </p>
        </Section>

        {/* ── 14. Contact Us ── */}
        <Section number={14} title="Contact Us">
          {/* Discover More box — contact section */}
          <DiscoverBox
            links={[
              { label: "Network Security" },
              { label: "Computer Hardware" },
              { label: "Apple iPhones" },
            ]}
          />

          <p className="text-slate-700 mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us:
          </p>
          <p className="mb-2">
            <a href="mailto:support@idmextension.xyz" className="text-blue-600 hover:underline">
              ✉️ support@idmextension.xyz
            </a>
          </p>
          <p className="mb-8">
            <a href="https://idmextension.xyz" className="text-blue-600 hover:underline">
              🌐 Visit Homepage → idmextension.xyz
            </a>
          </p>
        </Section>

      </main>

      {/* ── Footer ── */}
      {/* <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        Copyright © 2026 Praise The Sun | Powered by{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Astra WordPress Theme
        </a>
      </footer> */}
    </div>
  );
}

export default PrivacyPolicy;