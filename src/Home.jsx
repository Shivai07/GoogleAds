    // import Card from './Card';
    // import Discover from './Discover';
    

    // function Home() {
    // return (
    //     <div>
    //     <Discover />
    //     <Card />
       
    //     </div>
    // )
    // }

    // export default Home
import Card from './Card';
import Discover from './Discover';
import Advertisement from './Advertisement';


function Home() {
  const allPosts = [
    // {
    //   id: 0,
    //   category: "Update",
    //   title: "The Update Battle We All Feel: Apple's Control vs Android's Freedom",
    //   author: "admin",
    //   date: "December 30, 2025",
    //   excerpt: "The Update Battle We All Feel: Apple's Control vs Android's Freedom That little message saying \"Software Update Available\" does more [...]",
    //   image: null
    // },
    // {
    //   id: 1,
    //   category: "Uncategorized",
    //   title: "That Software Update You Keep Ignoring Is Protecting More Than You Think",
    //   author: "admin",
    //   date: "December 28, 2025",
    //   excerpt: "That Software Update You Keep Ignoring Is Protecting More Than You Think Most people see software updates as interruptions. A",
    //   image: null
    // },
   {
  id: 0,
  category: "Uncategorized",
  title: "The Beginner’s Guide to Mutual Funds: Invest Smart, Save More, Grow Wealth",
  author: "admin",
  date: "May 5, 2025",
  excerpt: "Want to grow your wealth without taking high risks? Mutual funds offer a smart and disciplined way to invest, save more, and beat inflation.",
  image: "/photos/bar.jpg"
},
    {
      id: 1,
      category: "Uncategorized",
      title: "Finance",
      author: "admin",
      date: "May 5, 2025",
      excerpt: "Finance is the management of money and includes activities such as investing, borrowing, lending, budgeting, saving, and forecasting. It encompasses personal finance, corporate finance, and public finance, each playing a crucial role in the economic ecosystem.",
      image: "/photos/finance.png"
    },
    {
      id: 2,
      category: "Uncategorized",
      title: "Is Gold Still a Good Investment in 2025?",
      author: "admin",
      date: "May 5, 2025",
      excerpt: "Gold has been a symbol of wealth and stability for hundreds of years. As far as modern economics from ancient civilizations, it has remained the test of time as a safe haven property. But as we go deeper into 2025—with cryptocurrencies, AI-driven markets, and digital assets taking center stage—the big question remains:",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      category: "Uncategorized",
      title: "How Real Estate Creates Long-Term Wealth",
      author: "admin",
      date: "May 5, 2025",
      excerpt: "One asset that has continuously proven to be a true wealth-building powerhouse in a world full of volatile stock markets and intricate financial instruments is real estate.Property ownership has long been the keystone of financial stability and a major factor in the prosperity of successive generations. Having a roof over your head is not enough; you also need to use a material asset wisely in order to create a stable financial future. From rental income to property appreciation, real estate can help you grow your wealth steadily over time.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      category: "Uncategorized",
      title: "Tax Benefits You Can Avail on Your Home Loan in India",
      author: "admin",
      date: "May 5, 2025",
      excerpt: "Purchasing a house of your own is a major life milestone. It provides you with a feeling of safety and pride. However, with the high rates of property, most individuals rely on home loans to turn this dream into reality. The silver lining is that the Indian government provides multiple tax benefits on home loans that can ease your financial burden. Being aware of these benefits can save you a substantial amount of money annually.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      category: "Uncategorized",
      title: "Investment Strategies for Long-Term Wealth Creation",
      author: "admin",
      date: "May 5, 2025",
      excerpt: "When dealing with money, the dream of everyone is to create wealth for decades. However, simply keeping money in your account doesn't amount to much. To actually build wealth, you have to begin investing wisely. Investing can appear to be complex, but it is really about being patient, being consistent, and knowing how money can make you wealthier. These are five easy investment tips that can make you wealthy for decades.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      category: "Uncategorized",
      title: "💰 How to Build a Monthly Budget That Actually Works",
      author: "admin",
      date: "May 5, 2025",
      excerpt: "Managing money isn’t just about saving—it’s about making your income work for you. Whether you’re a student, a working professional, or running a family, having a monthly budget is the foundation of financial stability. Yet, most people either skip budgeting or make one that fails after the first week. The truth is, a good budget isn’t about restricting your lifestyle; it’s about giving every rupee (or dollar) a purpose.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      category: "Uncategorized",
      title: "Fix » Error: Cannot launch IDM, either IDM application is not installed, or some of its files are corrupted",
      author: "admin",
      date: "May 5, 2025",
      excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      category: "Uncategorized",
      title: "Fix » Error: Cannot launch IDM, either IDM application is not installed, or some of its files are corrupted",
      author: "admin",
      date: "May 5, 2025",
      excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Blog Section */}
      <div className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          {/* <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Latest Articles
            </h1>
            <p className="text-lg text-slate-600">
              Discover insights and solutions for your tech challenges
            </p>
          </div> */}
      {/* <Discover /> */}

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <Card key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>

      {/* Discover Section */}
      <div className="bg-white py-16">
        {/* <Discover /> */}
      </div>
       {/* <Advertisement
        title="Your Ad Title"
        sponsoredBy="Sponsored by: Your Brand"
        buttonText="LEARN MORE"
        onLearnMore={() => window.open('https://your-link.com', '_blank')}
      /> */}
    </div>
  );
}

export default Home;