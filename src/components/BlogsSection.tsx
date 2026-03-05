const blogs = [
  {
    id: 1,
    tag: "3M Solutions",
    date: "14 Feb, 2026",
    title:
      "The Future of Architectural Finishes: Why 3M Di-Noc is Leading the Market.",
    // Focus: Architectural wrapping and surface transformation
    image: "/home/blog1.png", 
  },
  {
    id: 2,
    tag: "Branding",
    date: "28 Jan, 2026",
    title: "How Environmental Branding Boosts Workplace Productivity.",
    // Focus: Office interiors and corporate identity
    image: "/home/blog2.png",
  },
  {
    id: 3,
    tag: "Sustainability",
    date: "15 Dec, 2025",
    title: "Trends in Sustainable Signage and Large Format Printing for 2026.",
    // Focus: Eco-friendly materials and UV printing
    image: "/home/blog3.png",
  },
];

const BlogsSection = () => {
 return (
  <section className="px-4 md:px-10 lg:px-20 py-20 lg:py-32 w-full mx-auto max-w-[1536px]">
   {/* Header Section */}
   <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16 mb-16">
    <h2 className="text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-medium leading-[1.1] text-[#111] lg:w-[45%] font-sans">
     Latest Updates and
     <br className="hidden md:block" /> Insights
    </h2>

    <div className="flex flex-col items-start lg:items-end gap-6 lg:w-[50%]">
     <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-[1.05rem] lg:w-[65%] lg:text-right font-light">
      Stay updated with the latest news and articles on industry trends,
      innovations, and expert insights.
     </p>

     <button className="bg-[#111] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
      Read More
     </button>
    </div>
   </div>

   {/* Blogs Grid */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    {blogs.map((blog) => (
     <div
      key={blog.id}
      className="flex flex-col bg-[#F7F7F7] rounded-4xl p-4 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
      {/* Image Container */}
      <div className="w-full aspect-square rounded-3xl overflow-hidden mb-6">
       <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
       />
      </div>

      {/* Content Container */}
      <div className="px-2 pb-4">
       {/* Meta details */}
       <div className="flex items-center gap-4 mb-4">
        <span className="px-4 py-1.5 rounded-full border border-gray-300 text-[13px] text-gray-800 font-medium">
         {blog.tag}
        </span>
        <span className="text-[13px] text-gray-500 font-light">
         {blog.date}
        </span>
       </div>

       {/* Title */}
       <h3 className="text-[1.35rem] md:text-[1.5rem] font-medium leading-[1.3] text-[#111]">
        {blog.title}
       </h3>
      </div>
     </div>
    ))}
   </div>
  </section>
 );
};

export default BlogsSection;
