const CarouselSection = () => {
 const categories = ["Interior", "Design", "Plan & Project", "Architect"];

 const slides = [
  {
   id: 1,
   title: "Cultural Complex Centre",
   description:
    "Located near Muscat main entrance, the Cultural Centre emerges from a unique landscape,...",
   // Using similar dark modern office interior
   image:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  },
  {
   id: 2,
   title: "Find Your Perfect Branding",
   description:
    "Grown at high altitudes with stunning views of the Pacific Ocean, these beans undergo a meticulous process. They ar",
   // Using similar warm living room interior
   image:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
  },
  {
   id: 3,
   title: "Sustainable Architecture",
   description:
    "Integrating organic materials with modern technology to provide sustainable living spaces...",
   image:
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200",
  },
  {
   id: 4,
   title: "Luxurious Living Spaces",
   description:
    "Experience the pinnacle of comfort and style with our carefully curated interior designs that speak volumes.",
   image: "/home/luxury.png",
  },
 ];

 return (
  <section className="py-16 md:py-24 w-full bg-[#EAECEB]">
   {/* Top Header Section */}
   <div className="px-4 md:px-10 lg:px-20 mx-auto max-w-[1536px]">
    <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 mb-12 lg:mb-16 items-start">
     <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight text-[#111] lg:w-[45%]">
      Grow, Succeed
      <br />
      Thrive, Excel,
      <br />
      Lead
     </h2>

     <div className="flex flex-col gap-8 lg:w-[45%] lg:pt-4">
      <p className="text-gray-600 leading-relaxed text-base md:text-[1.05rem]">
       Our team of experts uses cutting-edge technology to simplify real estate
       transactions. Join us to experience a smarter approach to buying,
       selling, or managing properties.
      </p>

      <div className="flex flex-wrap gap-3">
       {categories.map((category) => (
        <button
         key={category}
         className="px-5 cursor-pointer py-2 rounded-full border border-gray-400 text-sm font-medium text-gray-800 hover:bg-gray-900 hover:text-white transition-colors">
         {category}
        </button>
       ))}
      </div>
     </div>
    </div>
   </div>

   {/* Carousel Section */}
   <div className="w-full relative overflow-hidden group/carousel">
    <div className="flex w-max animate-scroll group-hover/carousel:[animation-play-state:paused] pb-12 pt-4">
     {/* 
        We render the slides multiple times to create an infinite scroll illusion.
      */}
     {[...slides, ...slides, ...slides, ...slides].map((slide, i) => (
      <div
       key={`${slide.id}-${i}`}
       className="relative w-[85vw] md:w-[45vw] lg:w-[400px] xl:w-[460px] h-[450px] md:h-[550px] lg:h-[600px] rounded-[2rem] overflow-hidden flex-shrink-0 group cursor-pointer mr-4 md:mr-6">
       {/* Image */}
       <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
       />

       {/* Top Right Arrow Button */}
       <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-105 z-10 shadow-lg">
        <svg
         width="20"
         height="20"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg">
         <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        </svg>
       </div>

       {/* Bottom Content Overlay */}
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10 pointer-events-none">
        <h3 className="text-white text-[1.5rem] md:text-[2rem] font-bold mb-3 leading-tight pointer-events-none">
         {slide.title}
        </h3>
        <p className="text-white/80 text-sm md:text-base leading-relaxed font-light pointer-events-none">
         {slide.description}
        </p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default CarouselSection;
