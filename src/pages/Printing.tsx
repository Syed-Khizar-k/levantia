import CtaSection from "../components/CtaSection";
import InfiniteCarousel from "../components/InfiniteCarousel";

const galleryImages = [
 {
  src: "/printing/poster1.jpg",
  alt: "Kabrita",
 },
 {
  src: "/printing/poster2.jpg",
  alt: "Sushi Restaurant",
 },
 {
  src: "/printing/poster3.jpg",
  alt: "Happiness Dental Clinic",
 },
];

const Printing = () => {
 return (
  <main className="w-full bg-white flex flex-col font-sans">
   <section className="relative w-full min-h-[500px] lg:min-h-[600px] flex items-center bg-[#F4F4F4] overflow-hidden pt-24 pb-16">
    <div className="px-4 md:px-10 lg:px-20 mx-auto max-w-[1536px] w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
     <div className="w-full lg:w-[45%] flex flex-col pt-10 lg:pt-0">
      <span className="text-gray-500 font-medium tracking-wide text-xs md:text-sm uppercase mb-6 block border-b border-gray-300 pb-2 w-max">
       Production & Printing Center
      </span>
      <h1 className="text-[#111] text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-8">
       Precision in Every Print.
      </h1>
      <p className="text-gray-600 text-base md:text-lg lg:text-[1.05rem] font-light max-w-lg leading-relaxed mb-10">
       As an authorized 3M converter, Levantia operates a state-of-the-art
       production facility in Dubai. We specialize in large format printing,
       architectural finishes, and bespoke corporate branding that meets
       international standards.
      </p>
      <div>
       <a
        href="/contact"
        className="inline-block px-8 py-3 bg-[#111] text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
        Request a Quote
       </a>
      </div>
     </div>

     <div className="w-full lg:w-[55%] relative flex justify-end">
      <div className="w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden">
       <img
        src="/printing/poster1.jpg"
        alt="Large Format Printer in Action"
        className="w-full h-full object-cover hover:grayscale grayscale-0 transition-all duration-700"
       />
      </div>
     </div>
    </div>
   </section>

   <InfiniteCarousel />

   {/* Expertise Section */}
   <section className="px-4 md:px-10 lg:px-20 py-20 md:py-32 w-full mx-auto max-w-[1536px]">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-20 gap-8">
     <div className="w-full md:w-1/2">
      <h2 className="text-[#111] text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
       Industrial Capacity,
       <br /> Boutique Attention.
      </h2>
     </div>
     <div className="w-full md:w-1/2 pt-2 md:pt-4">
      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
       Equipped with cutting-edge digital and offset technology, our Dubai
       facility ensures perfect color reproduction, exact tolerances, and
       flawless application for every project—whether it's a single corporate
       vehicle wrap or a multi-site retail rollout.
      </p>
     </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
     {[
      {
       title: "Large Format",
       desc:
        "High-impact banners, hoardings, architectural wraps, and vehicle graphics built to last.",
      },
      {
       title: "Corporate Signage",
       desc:
        "3D illuminated lettering, wayfinding, and premium reception area branding.",
      },
      {
       title: "Digital & Offset",
       desc:
        "From short-run urgent marketing collaterals to high-volume commercial printing.",
      },
      {
       title: "Custom Fabrication",
       desc:
        "In-house CNC routing, acrylic works, and wooden display stand fabrication.",
      },
     ].map((feature, idx) => (
      <div
       key={idx}
       className="flex flex-col gap-4 p-8 border border-gray-200 rounded-3xl hover:bg-gray-50 transition-colors cursor-pointer group">
       <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-[#111] group-hover:text-white transition-colors duration-300">
        <span className="font-semibold text-sm">0{idx + 1}</span>
       </div>
       <h3 className="text-[#111] font-bold text-xl mt-2">{feature.title}</h3>
       <p className="text-gray-600 font-light text-sm leading-relaxed">
        {feature.desc}
       </p>
      </div>
     ))}
    </div>
   </section>

   {/* Elegant Poster Gallery Section */}
   <section className="w-full bg-white py-20 md:py-32 border-t border-gray-100">
    <div className="px-4 md:px-10 lg:px-20 mx-auto max-w-[1536px]">
     <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
      <div className="max-w-xl">
       <h2 className="text-[#111] text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-4">
        Recent Production
       </h2>
       <p className="text-gray-600 text-base md:text-lg font-light">
        A look inside our facility and recent installations across the UAE.
       </p>
      </div>
      <a
       href="#"
       className="hidden md:inline-flex items-center gap-2 text-[#111] font-medium hover:text-gray-500 transition-colors uppercase text-sm tracking-wider">
       View Full Gallery
       <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
       </svg>
      </a>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {galleryImages.map((img, idx) => (
       <div
        key={idx}
        className="relative group bg-gray-100 overflow-hidden rounded-2xl aspect-video md:aspect-16/10">
        <img
         src={img.src}
         alt={img.alt}
         className="w-full h-full object-cover group-hover:grayscale opacity-90 grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <p className="text-white font-medium tracking-wide text-sm">
          {img.alt}
         </p>
        </div>
       </div>
      ))}
     </div>

     <div className="mt-8 text-center md:hidden">
      <a
       href="#"
       className="inline-flex items-center gap-2 text-[#111] font-medium hover:text-gray-500 transition-colors uppercase text-sm tracking-wider">
       View Full Gallery
       <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
       </svg>
      </a>
     </div>
    </div>
   </section>

   {/* Shared CTA Section */}
   <CtaSection />
  </main>
 );
};

export default Printing;
