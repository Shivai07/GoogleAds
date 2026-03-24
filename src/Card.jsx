// import Discover from './Discover';

// /**
//  * A reusable Blog Card component based on the provided design.
//  */
// const BlogCard = ({ category, title, author, date, excerpt, image }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
//       {/* Optional Top Image */}
//       {image && (
//         <div className="w-full h-48 overflow-hidden">
//           <img 
//             src={image} 
//             alt={title} 
//             className="w-full h-full object-cover"
//             onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'; }}
//           />
//         </div>
//       )}
      
//       {/* Card Content */}
//       <div className="p-8 flex flex-col gap-3">
//         {/* Category Label */}
//         <span className="text-blue-600 font-semibold text-sm tracking-wide">
//           {category}
//         </span>
        
//         {/* Title */}
//         <h2 className="text-[22px] font-bold text-slate-900 leading-snug hover:text-blue-600 cursor-pointer transition-colors">
//           {title}
//         </h2>
        
//         {/* Metadata (Author / Date) */}
//         <div className="text-blue-500 text-sm font-medium">
//           <span>{author}</span>
//           <span className="mx-1">/</span>
//           <span>{date}</span>
//         </div>
        
//         {/* Excerpt */}
//         <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-4 mt-1">
//           {excerpt}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default function App() {
//   const posts = [
//     {
//       category: "Update",
//       title: "The Update Battle We All Feel: Apple's Control vs Android's Freedom",
//       author: "admin",
//       date: "December 30, 2025",
//       excerpt: "The Update Battle We All Feel: Apple's Control vs Android's Freedom That little message saying \"Software Update Available\" does more [...]",
//       image: null
//     },
//     {
//       category: "Uncategorized",
//       title: "That Software Update You Keep Ignoring Is Protecting More Than You Think",
//       author: "admin",
//       date: "December 28, 2025",
//       excerpt: "That Software Update You Keep Ignoring Is Protecting More Than You Think Most people see software updates as interruptions. A",
//       image: null
//     },
//     {
//       category: "Uncategorized",
//       title: "Fix » Error: Cannot launch IDM, either IDM application is not installed, or some of its files are corrupted",
//       author: "admin",
//       date: "May 5, 2025",
//       excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
//       // Using a placeholder that resembles the screenshot UI
//       image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//       category: "Uncategorized",
//       title: "Fix » Error: Cannot launch IDM, either IDM application is not installed, or some of its files are corrupted",
//       author: "admin",
//       date: "May 5, 2025",
//       excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
//       // Using a placeholder that resembles the screenshot UI
//       image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//       category: "Uncategorized",
//       title: "Fix » Error: Cannot launch IDM, either IDM application is not installed, or some of its files are corrupted",
//       author: "admin",
//       date: "May 5, 2025",
//       excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
//       // Using a placeholder that resembles the screenshot UI
//       image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//       category: "Uncategorized",
//       title: "Fix » Error: Cannot launch IDM, either IDM application is not installed, or some of its files are corrupted",
//       author: "admin",
//       date: "May 5, 2025",
//       excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
//       // Using a placeholder that resembles the screenshot UI
//       image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//       category: "Uncategorized",
//       title: "Fix » Error: Cannot launch IDM, either IDM application is not installed, or some of its files are corrupted",
//       author: "admin",
//       date: "May 5, 2025",
//       excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
//       // Using a placeholder that resembles the screenshot UI
//       image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//       category: "Uncategorized",
//       title: "Fix » Error: Cannot launch IDM, either IDM application is not installed, or some of its files are corrupted",
//       author: "admin",
//       date: "May 5, 2025",
//       excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
//       // Using a placeholder that resembles the screenshot UI
//       image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//       category: "Uncategorized",
//       title: "Fix » Error: Cannot launch IDM, either IDM application is not installed, or some of its files are corrupted",
//       author: "admin",
//       date: "May 5, 2025",
//       excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
//       // Using a placeholder that resembles the screenshot UI
//       image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
//     },
//     {
//       category: "Uncategorized",
//       title: "Fix » Error: Cannot launch IDM, either IDM application is not installed, or some of its files are corrupted",
//       author: "admin",
//       date: "May 5, 2025",
//       excerpt: "Are you facing the \"Cannot Launch IDM\" error? Don't worry, we've got you covered! This issue can occur due to",
//       // Using a placeholder that resembles the screenshot UI
//       image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#f0f4f8] p-4 md:p-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Responsive Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((post, index) => (
//             <div key={index}>
//               <BlogCard {...post} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Discover />
//     </div>
//   );
// }


import { Link } from 'react-router-dom';

const Card = ({ id, category, title, author, date, excerpt, image }) => {
  return (
    <Link to={`/post/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full transition-all hover:shadow-md cursor-pointer">
        {/* Optional Top Image */}
        {image && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'; }}
            />
          </div>
        )}
        
        {/* Card Content */}
        <div className="p-8 flex flex-col gap-3">
          {/* Category Label */}
          <span className="text-blue-600 font-semibold text-sm tracking-wide">
            {category}
          </span>
          
          {/* Title */}
          <h2 className="text-[22px] font-bold text-slate-900 leading-snug hover:text-blue-600 transition-colors">
            {title}
          </h2>
          
          {/* Metadata (Author / Date) */}
          <div className="text-blue-500 text-sm font-medium">
            <span>{author}</span>
            <span className="mx-1">/</span>
            <span>{date}</span>
          </div>
          
          {/* Excerpt */}
          <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-4 mt-1">
            {excerpt}
          </p>
        </div>
      </div>
      
    </Link>
  );
};

export default Card;