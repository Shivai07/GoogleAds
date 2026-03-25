
const CORE_VALUES = [
  {
    title: "Our Mission",
    description:
      "To empower individuals with financial knowledge and tools to make informed decisions about their money and build lasting wealth.",
  },
  {
    title: "Community First",
    description:
      "We believe in creating a supportive community where everyone can learn, share, and grow together on their financial journey.",
  },
  {
    title: "Quality Content",
    description:
      "We provide accurate, actionable, and easy-to-understand financial information backed by research and expert insights.",
  },
  {
    title: "Your Growth",
    description:
      "Your financial success is our success. We're committed to helping you achieve your financial goals, one step at a time.",
  },
];

// ── What We Offer Data ────────────────────────────────────────
const OFFERINGS = [
  {
    title: "Educational Content:",
    description: "In-depth articles, guides, and tutorials on personal finance topics",
  },
  {
    title: "Financial Tools:",
    description: "Calculators and tools to help you plan and manage your finances",
  },
  {
    title: "Expert Insights:",
    description: "Tips and strategies from financial professionals",
  },
  {
    title: "Community Support:",
    description: "A platform to learn from and connect with others on similar financial journeys",
  },
];

// ── About Component ───────────────────────────────────────────
function About() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-6 py-16">

          <p className="text-gray-500 text-base mb-2">About Us</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-10">About Us</h1>
 

        {/* ── Who Are We ── */}
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Who are we ?</h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          We are a passionate team of financial experts, educators, and technology enthusiasts
          dedicated to making financial literacy accessible to everyone. Founded with the belief
          that everyone deserves the knowledge and tools to achieve financial independence, we've
          built a platform that simplifies complex financial concepts.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          Our journey began with a simple observation: despite the abundance of financial
          information available, many people still struggle with basic money management. We saw an
          opportunity to bridge this gap by creating content that is not only informative but also
          practical and easy to understand.
        </p>

        <p className="text-gray-600 leading-relaxed mb-16">
          Today, we serve thousands of users who trust us for reliable financial guidance, from
          budgeting basics to advanced investment strategies. Our commitment remains the same: to
          help you make smarter financial decisions and build a secure financial future.
        </p>

        {/* ── Our Core Values ── */}
        <h2 className="text-2xl font-bold text-slate-900 mb-10">Our Core Values</h2>

        <div className="flex flex-col gap-16 mb-20">
          {CORE_VALUES.map((value) => (
            <div key={value.title} className="grid grid-cols-2 gap-8 items-start">
              {/* Left — Yellow-green title */}
              <h3
                className="text-2xl font-bold text-right pr-8"
                style={{ color: "#c8d93a" }}
              >
                {value.title}
              </h3>
              {/* Right — Description */}
              <p className="text-gray-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* ── What We Offer ── */}
        {/* <div className="text-center mb-2">
          <span className="text-3xl">👇</span>
        </div> */}

        <h2 className="text-2xl font-bold text-slate-900 mb-10">What We Offer</h2>

        <div className="flex flex-col gap-8">
          {OFFERINGS.map((item) => (
            <p key={item.title} className="text-gray-600 leading-relaxed">
              •{" "}
              <span className="font-bold underline text-slate-800">{item.title}</span>{" "}
              {item.description}
            </p>
          ))}
        </div>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex items-start justify-between">

          {/* Brand */}
          {/* <span className="text-xl font-bold text-slate-900">Candle Chaart</span> */}

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-x-24 gap-y-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-800 transition-colors">Blog</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Events</a>
            <a href="#" className="hover:text-gray-800 transition-colors">About</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Shop</a>
            <a href="#" className="hover:text-gray-800 transition-colors">FAQs</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Patterns</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Authors</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Themes</a>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default About;