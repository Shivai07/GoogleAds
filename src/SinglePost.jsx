import { useParams } from 'react-router-dom';
import Discover from './Discover';
import Advertisement from "./Advertisement";
function SinglePost() {
  const { id } = useParams();

  // Blog posts data - same as Home.jsx
  const allPosts = [
    {
      id: 0,
      category: "Update",
      title: "The Update Battle We All Feel: Apple's Control vs Android's Freedom",
      author: "admin",
      date: "December 30, 2025",
      excerpt: "The Update Battle We All Feel: Apple's Control vs Android's Freedom That little message saying \"Software Update Available\" does more [...]",
      image: null,
      content: `
        <h2>The Update Battle We All Feel: Apple's Control vs Android's Freedom</h2>
        
        <p>That little message saying "Software Update Available" does more than interrupt your day. It quietly exposes how you feel about technology itself.</p>
        
        <p>Some people see it as reassurance—like a trusted caretaker making sure everything runs smoothly. Others see it as interference, a reminder that someone else is making decisions for their device without asking first.</p>
        
        <p>And that reaction perfectly explains the long-running difference between iPhone and Android updates. This debate isn't really about which phone updates faster or longer. It's about control, trust, and how much responsibility you want over your digital life.</p>
        
        <h3>Why iPhone Updates Feel Effortless (and Safe)</h3>
        
        <p>If you value simplicity and predictability, Apple's update system often feels comforting.</p>
        
        <h4>1. You Know You're Covered for Years</h4>
        
        <p>When you buy an iPhone, you're not just buying hardware—you're buying long-term support. Apple has a track record of updating phones for six years or more, sometimes even longer. Phones released back in 2018 are still receiving new iOS versions today.</p>
        
        <p>There's no guessing game. Apple updates arrive every year, around the same time, and if your phone is supported, you get them. That kind of certainty is rare in tech.</p>
        
        <h4>2. Everyone Updates Together</h4>
        
        <p>When Apple releases a new iOS version, it rolls out to all supported iPhones at once. No delays. No carrier approvals. No brand-specific versions.</p>
        
        <p>This means most iPhone users are on the latest software within weeks. From a security perspective, that's powerful. One update closes the door on millions of devices at the same time.</p>
        
        <h4>3. Security Happens Quietly</h4>
        
        <p>Apple also fixes many security issues silently in the background. Some updates don't even require a full system install—just a quick restart of a browser or app.</p>
        
        <p>You don't have to think about it. Protection just happens. For many users, that invisible security is the real appeal.</p>
        
        <h3>Why Android Updates Feel Liberating (and Sometimes Messy)</h3>
        
        <p>Android takes a very different approach—and for many people, that's the appeal.</p>
        
        <h4>1. You Get Choices—With Consequences</h4>
        
        <p>Android phones come in every shape, size, and price. That freedom is exciting, but it also means updates depend on who made your phone.</p>
        
        <p>A Google Pixel or Samsung flagship usually gets solid update support. A cheaper phone may not. Android gives you the choice—but it also asks you to do your homework.</p>
        
        <h4>2. Innovation Happens Faster</h4>
        
        <p>Android is often where new ideas show up first: foldable phones, experimental cameras, advanced customization, and niche AI tools.</p>
        
        <p>Apple tends to wait, refine, and polish. Android tends to experiment early. If you enjoy being on the edge of what's new, Android feels more alive.</p>
        
        <h4>3. Apps Evolve Rapidly</h4>
        
        <p>Even when system updates are slow, Android apps move fast. Developers push updates frequently, sometimes weekly. You also have the option to install apps outside the official app store—something Apple doesn't allow.</p>
        
        <p>That flexibility has trade-offs. But if you enjoy having options, Android's openness is freeing.</p>
      `
    },
    {
      id: 1,
      category: "Uncategorized",
      title: "That Software Update You Keep Ignoring Is Protecting More Than You Think",
      author: "admin",
      date: "December 28, 2025",
      excerpt: "That Software Update You Keep Ignoring Is Protecting More Than You Think Most people see software updates as interruptions. A",
      image: null,
      content: `
        <h2>That Software Update You Keep Ignoring Is Protecting More Than You Think</h2>
        
        <p>Most people see software updates as interruptions. A notification, a delay, a minor annoyance that gets in the way of what you're actually trying to do.</p>
        
        <p>But that update you're ignoring? It's quietly protecting more of your digital life than you realize.</p>
        
        <h3>The Hidden Security Inside Updates</h3>
        
        <p>Software updates fix vulnerabilities—cracks in the code that hackers exploit. These aren't theoretical threats. They're active, real-world attack vectors that criminals are actively targeting.</p>
        
        <p>When you delay an update, you're leaving that door open. Not forever, but long enough.</p>
        
        <h3>Why Updates Take Time</h3>
        
        <p>The reason updates exist isn't just to add new features. Most of the work happens in the background: security patches, performance tweaks, bug fixes, and compatibility improvements.</p>
        
        <p>Your software is constantly being tested against new threats, and when vulnerabilities are discovered, they're patched. It's an endless cycle of defense.</p>
      `
    },
    {
      id: 2,
      category: "Uncategorized",
      title: "The Beginner’s Guide to Mutual Funds: Invest Smart, Save More, Grow Wealth",
      author: "admin",
      date: "December 28, 2025",
      excerpt: "That Software Update You Keep Ignoring Is Protecting More Than You Think Most people see software updates as interruptions. A",
      image: null,
      content: `
      <h2><b>Introduction:</b> A Guide to Smart Investments and Wealth Building</h2>
        
        <p>If you’re serious about building wealth, the important question is: where do I put my money? Chilling your money in savings accounts appears too slow, buying and selling stocks yourself is too risky, and keeping your money in fixed deposits doesn’t fight inflation.</p>
        
        <p>The answer recommended by many financial experts is – mutual funds. Mutual funds are much more than just an investment vehicle; they are a systematic way of wealth creation with discipline, offering flexibility, professional management, and compounding.</p>
        

      `
    },
    {
      id: 3,
      category: "Uncategorized",
      title: "What is Finance?",
      author: "admin",
      date: "December 28, 2025",
      excerpt: "That Software Update You Keep Ignoring Is Protecting More Than You Think Most people see software updates as interruptions. A",
      image: null,
      content: `
      <h2><b>Introduction:</b> A Guide to Smart Investments and Wealth Building</h2>
        
        <h1>Finance is the management of money and includes activities such as investing, borrowing, lending, budgeting, saving, and forecasting. It encompasses personal finance, corporate finance, and public finance, each playing a crucial role in the economic ecosystem.</h1>
        <p>At its core, finance is about making informed decisions regarding the allocation of resources over time. Whether you’re planning for retirement, managing a business, or investing in the stock market, understanding financial principles is essential for long-term success.</p>
        <p>The answer recommended by many financial experts is – mutual funds. Mutual funds are much more than just an investment vehicle; they are a systematic way of wealth creation with discipline, offering flexibility, professional management, and compounding.</p>
        <p>Personal finance focuses on individual money management, including budgeting, saving for emergencies, investing for the future, and planning for major life events. By mastering these fundamentals, you can build wealth, achieve financial independence, and secure your financial future.</p>
        

      `
    }
  ];

  const post = allPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-900">Post not found</h1>
      </div>
    );
  }

  return (
    // <div className="min-h-screen bg-white">
<div className="min-h-screen bg-white pb-28">
      {/* Post Header */}
      <div className="py-16 px-4 md:px-8 lg:px-12 border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-blue-600 font-medium">
            <span>By {post.author}</span>
            <span>/</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-96 object-cover"
              />
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '') }} />
          </div>

          {/* Post Meta */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600">
                  Written by <span className="font-semibold text-slate-900">{post.author}</span>
                </p>
                <p className="text-slate-500 text-sm mt-1">{post.date}</p>
              </div>
              <div className="text-right">
                <p className="text-blue-600 font-semibold">{post.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="py-16 px-4 md:px-8 lg:px-12 border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Leave a Comment</h2>
          
          <p className="text-slate-600 mb-8">
            Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
          </p>

          {/* Comment Form */}
          <form className="space-y-6 bg-white p-8 rounded-lg border border-slate-200">
            {/* Discover More Section */}
            <div className="mb-8 pb-8 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Discover more</h3>
              <div className="space-y-3">
                <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors rounded flex justify-between items-center">
                  <span className="text-slate-900 font-medium">IT consulting</span>
                  <span className="text-gray-400">›</span>
                </div>
                <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors rounded flex justify-between items-center">
                  <span className="text-slate-900 font-medium">Network routers</span>
                  <span className="text-gray-400">›</span>
                </div>
                <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors rounded flex justify-between items-center">
                  <span className="text-slate-900 font-medium">Corrupted file recovery</span>
                  <span className="text-gray-400">›</span>
                </div>
              </div>
            </div>

            {/* Comment Textarea */}
            <div>
              <textarea
                rows="6"
                placeholder="Type here.."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email*"
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Website"
                className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-slate-700 text-sm">Save my name, email, and website in this browser for the next time I comment.</span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>

      {/* Discover Section */}
      <div className="bg-white py-16">
        <Discover />
      </div>
      <Advertisement
  title="Your Ad Title"
  sponsoredBy="Sponsored by: Your Brand"
  buttonText="LEARN MORE"
  onLearnMore={() => window.open('https://your-link.com', '_blank')}
/>
    </div>
  );
}

export default SinglePost;