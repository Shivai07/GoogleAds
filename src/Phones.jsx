// ============================================================
//  Phones.jsx  –  Tailwind CSS version
//  "Praise The Sun" website
// ============================================================

import { useState } from "react";

// ── Discover More chip tags ───────────────────────────────────
const DISCOVER_TAGS = [
  "IDM software licenses",
  "Update reminder service",
  "Software",
  "Software update guides",
  "Software Utilities",
  "PC optimization tools",
  "IDM troubleshooting service",
  "Download Manager",
  "Network Security",
  "USB flash drives",
];

// ── Phones Component ──────────────────────────────────────────
function Phones() {
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    // Wire up your real search logic here
    console.log("Searching for:", query);
  }

  return (
    <div className="min-h-screen bg-[#e8f0f7] flex flex-col">

      {/* ── Main Content ── */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 flex flex-col gap-4">

        {/* ── Title Card ── */}
        <div className="bg-white rounded-md px-8 py-10">
          <h1 className="text-3xl font-bold text-slate-900">Phones</h1>
        </div>

        {/* ── Search Card ── */}
        <div className="bg-white rounded-md px-8 py-10">
          <p className="text-slate-700 mb-6">
            It seems we can't find what you're looking for. Perhaps searching can help.
          </p>

          <form onSubmit={handleSearch} className="flex flex-col gap-0">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-sm px-4 py-2 text-slate-700 text-sm focus:outline-none focus:border-blue-500"
            />
            <div className="mt-0">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 text-sm transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-white border-t border-gray-200 pt-6 pb-8 text-center">
        <p className="text-sm text-gray-500 mb-4">
          Copyright © 2026 Praise The Sun | Powered by{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Astra WordPress Theme
          </a>
        </p>

        {/* Discover More chips */}
        <div className="flex flex-wrap justify-center items-center gap-2 px-4">
          <span className="text-slate-700 font-medium text-sm mr-1">Discover more</span>
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
      </footer>

    </div>
  );
}

export default Phones;