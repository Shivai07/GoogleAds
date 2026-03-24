
import { useState } from "react";

// ── Contact Icons (SVG inline) ────────────────────────────────
const ICONS = [
  {
    label: "Phone",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
  },
  {
    label: "Email",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "Chat",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9H7V9h6v2zm4-4H7V5h10v2z" />
      </svg>
    ),
  },
  {
    label: "Web",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    label: "At",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </svg>
    ),
  },
  {
    label: "Location",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
];

// ── Contact Component ─────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-16">

        {/* ── Heading ── */}
        <h1 className="text-4xl text-slate-800 mb-10">Contact Us</h1>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 rounded px-6 py-4 mb-8">
            ✅ Message sent! We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Name */}
            <div>
              <label className="block text-slate-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-slate-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-gray-300 rounded px-4 py-2 text-slate-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-slate-700 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={6}
                className="w-full border border-gray-300 rounded px-4 py-2 text-slate-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm resize-y"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-3 rounded transition-colors text-base"
            >
              Send
            </button>

          </form>
        )}

        {/* ── Contact Icons Grid ── */}
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-3 gap-4">
            {ICONS.map((icon) => (
              <button
                key={icon.label}
                aria-label={icon.label}
                className="w-20 h-20 rounded-full border-4 border-blue-600 bg-white text-blue-900 flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                {icon.svg}
              </button>
            ))}
          </div>
        </div>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex items-start justify-between">

          {/* Brand */}
          <span className="text-xl font-bold text-slate-900">Candle Chaart</span>

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

export default Contact;