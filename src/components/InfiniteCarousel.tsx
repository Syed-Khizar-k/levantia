const logos = [
 "c1.png",
 "c10.png",
 "c11.jpg",
 "c12.png",
 "c13.jpg",
 "c14.jpg",
 "c15.png",
 "c16.jpg",
 "c17.png",
 "c18.png",
 "c19.png",
 "c2.png",
 "c20.png",
 "c21.png",
 "c22.png",
 "c23.png",
 "c24.png",
 "c25.png",
 "c26.png",
 "c27.png",
 "c28.png",
 "c29.png",
 "c3.jpg",
 "c30.png",
 "c31.png",
 "c32.png",
 "c33.png",
 "c34.png",
 "c35.png",
 "c36.png",
 "c37.png",
 "c38.png",
 "c39.png",
 "c4.jpg",
 "c40.png",
 "c41.png",
 "c42.png",
 "c43.jpg",
 "c44.png",
 "c45.jpg",
 "c46.png",
 "c47.png",
 "c48.png",
 "c49.jpg",
 "c5.png",
 "c50.png",
 "c51.png",
 "c52.jpg",
 "c53.jpg",
 "c54.png",
 "c6.png",
 "c7.png",
 "c8.png",
 "c9.png",
];

const InfiniteCarousel = () => {
 return (
  <section className="w-full bg-white py-10 md:py-16 overflow-hidden relative border-b border-gray-100">
   <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
   <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

   <div className="flex w-max animate-logo-scroll hover:[animation-play-state:paused] items-center">
    {/* First set of logos */}
    <div className="flex gap-12 md:gap-20 px-6 md:px-10 items-center">
     {logos.map((logo, index) => (
      <div
       key={`logo-1-${index}`}
       className="w-24 md:w-36 lg:w-48 shrink-0 flex items-center justify-center transition-all duration-300 hover:grayscale">
       <img
        src={`/companies/${logo}`}
        alt={`Client Partner ${index + 1}`}
        className="max-w-full max-h-20 md:max-h-24 object-contain"
        loading="lazy"
       />
      </div>
     ))}
    </div>

    {/* Second set of logos for seamless infinite scroll */}
    <div className="flex gap-12 md:gap-20 px-6 md:px-10 items-center">
     {logos.map((logo, index) => (
      <div
       key={`logo-2-${index}`}
       className="w-24 md:w-36 lg:w-48 shrink-0 flex items-center justify-center transition-all duration-300 hover:grayscale">
       <img
        src={`/companies/${logo}`}
        alt={`Client Partner ${index + 1} Duplicate`}
        className="max-w-full max-h-20 md:max-h-24 object-contain"
        loading="lazy"
       />
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default InfiniteCarousel;
