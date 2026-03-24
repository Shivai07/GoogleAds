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
    {
      id: 0,
      category: "Update",
      title: "The Update Battle We All Feel: Apple's Control vs Android's Freedom",
      author: "admin",
      date: "December 30, 2025",
      excerpt: "The Update Battle We All Feel: Apple's Control vs Android's Freedom That little message saying \"Software Update Available\" does more [...]",
      image: null
    },
    {
      id: 1,
      category: "Uncategorized",
      title: "That Software Update You Keep Ignoring Is Protecting More Than You Think",
      author: "admin",
      date: "December 28, 2025",
      excerpt: "That Software Update You Keep Ignoring Is Protecting More Than You Think Most people see software updates as interruptions. A",
      image: null
    },
   {
  id: 2,
  category: "Uncategorized",
  title: "The Beginner’s Guide to Mutual Funds: Invest Smart, Save More, Grow Wealth",
  author: "admin",
  date: "May 5, 2025",

  excerpt: "Want to grow your wealth without taking high risks? Mutual funds offer a smart and disciplined way to invest, save more, and beat inflation.",

//   description: `If you’re serious about building wealth, the important question is: where do I put my money? Chilling your money in savings accounts appears too slow, buying and selling stocks yourself is too risky, and keeping your money in fixed deposits doesn’t fight inflation.

// The answer recommended by many financial experts is – mutual funds. Mutual funds are much more than just an investment vehicle; they are a systematic way of wealth creation with discipline, offering flexibility, professional management, and compounding.`,
  image: "/photos/bar.jpg"
},
    {
      id: 3,
      category: "Uncategorized",
      title: "Finance",
      author: "admin",
      date: "May 5, 2025",
      excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
      image: "/photos/finance.png"
    },
    {
      id: 4,
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
       <Advertisement
        title="Your Ad Title"
        sponsoredBy="Sponsored by: Your Brand"
        buttonText="LEARN MORE"
        onLearnMore={() => window.open('https://your-link.com', '_blank')}
      />
    </div>
  );
}

export default Home;