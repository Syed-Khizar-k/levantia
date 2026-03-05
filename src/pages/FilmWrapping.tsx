import { Link } from "react-router-dom";
import CtaSection from "../components/CtaSection";
import InfiniteCarousel from "../components/InfiniteCarousel";

const filmTypes = [
 {
  code: "DI-NOC",
  title: "Architectural Film",
  tagline: "Surfaces Reimagined",
  desc:
   "Transform walls, ceilings, columns, furniture, and fixtures without demolition. Available in wood grain, stone, metal, fabric, and abstract patterns. Ideal for retail interiors, hotel lobbies, and corporate fit-outs.",
  image:
   "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
  specs: [
   "500+ patterns & finishes",
   "Up to 7-year interior warranty",
   "Removable & repositionable",
   "Fire-rated options available",
  ],
 },
 {
  code: "FASARA",
  title: "Glass Film",
  tagline: "Light, Privacy & Design",
  desc:
   "Elegant frosted, matte, and patterned films for glass partitions, windows, and shower screens. Provides privacy while maintaining natural light flow. Perfect for offices, clinics, retail showrooms, and residential interiors.",
  image:
   "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
  specs: [
   "Frosted, etched & geometric patterns",
   "UV protection integrated",
   "Easy-clean surface",
   "Quick-change interior update",
  ],
 },
 {
  code: "WRAP",
  title: "Vehicle Wrap Film",
  tagline: "Mobile Brand Impact",
  desc:
   "Full or partial vehicle wraps using 3M Scotchprint films. Whether it's a single company car, a delivery fleet, or a luxury vehicle colour change — we handle design, print, and installation end-to-end from our Dubai facility.",
  image:
   "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200",
  specs: [
   "Full & partial wrap available",
   "Gloss, matte & satin finishes",
   "OEM paint protection",
   "Fleet branding specialists",
  ],
 },
];

const applications = [
 {
  title: "Hotel & Hospitality",
  image:
   "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
 },
 {
  title: "Retail & Commercial",
  image:
   "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
 },
 {
  title: "Corporate Offices",
  image:
   "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
 },
 {
  title: "Vehicle Fleets",
  image:
   "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
 },
];

const FilmWrapping = () => {
 return (
  <main className="w-full bg-white flex flex-col">
   {/* Hero */}
   <section className="relative w-full min-h-[640px] lg:min-h-[720px] bg-[#0a0a0a] flex items-end overflow-hidden">
    <img
     src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1920"
     alt="3M Film Application"
     className="absolute inset-0 w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

    {/* 3M Badge */}
    <div className="absolute top-32 right-8 md:right-16 z-10 hidden md:flex flex-col items-end gap-1">
     <span className="text-white/40 text-xs uppercase tracking-[0.2em]">
      Authorized Converter
     </span>
     <span className="text-white font-bold text-sm tracking-wider">
      3M Approved
     </span>
    </div>

    <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-28 pt-36 max-w-[1536px] mx-auto w-full">
     <span className="block text-gray-500 text-xs font-medium uppercase tracking-[0.3em] mb-5">
      Levantia Advertising — 3M Film Division
     </span>
     <h1 className="text-white text-[3.5rem] md:text-[6rem] lg:text-[8rem] font-black uppercase leading-[0.88] tracking-tight max-w-5xl mb-6">
      3M Film
      <br />
      Wrapping
     </h1>
     <p className="text-gray-400 text-base md:text-lg font-light max-w-xl mb-8 leading-relaxed">
      As an authorized 3M Approved Converter, Levantia applies DI-NOC
      architectural films, FASARA glass finishes, and Scotchprint vehicle wrap
      films with certified precision across the UAE.
     </p>
     <div className="flex flex-wrap gap-4">
      <Link
       to="/contact"
       className="px-7 py-3 bg-white text-[#111] font-bold uppercase text-sm tracking-wider rounded-full hover:bg-gray-200 transition-colors">
       Request Application
      </Link>
      <Link
       to="/products"
       className="px-7 py-3 border border-white/20 text-white font-semibold uppercase text-sm tracking-wider rounded-full hover:bg-white/10 transition-colors">
       View 3M Products
      </Link>
     </div>
    </div>
   </section>

   <InfiniteCarousel />

   {/* Film Type Deep-Dives */}
   <section className="py-0">
    {filmTypes.map((film, idx) => (
     <div
      key={film.code}
      className={`flex flex-col lg:flex-row ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""} min-h-[500px]`}>
      {/* Image half */}
      <div className="w-full lg:w-1/2 min-h-[350px] lg:min-h-[500px] overflow-hidden">
       <img
        src={film.image}
        alt={film.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        style={{ minHeight: "350px" }}
       />
      </div>

      {/* Content half */}
      <div
       className={`w-full lg:w-1/2 flex flex-col justify-center gap-6 px-8 md:px-16 lg:px-20 py-16 ${idx === 1 ? "bg-[#F7F7F7]" : "bg-white"}`}>
       <div className="flex items-center gap-4">
        <span className="px-3 py-1 bg-[#111] text-white text-xs font-bold uppercase tracking-widest rounded-full">
         3M {film.code}
        </span>
       </div>
       <div>
        <span className="text-gray-400 text-sm font-light tracking-widest uppercase block mb-2">
         {film.tagline}
        </span>
        <h2 className="text-[#111] text-[2rem] md:text-[3rem] font-black uppercase leading-[1.05] tracking-tight">
         {film.title}
        </h2>
       </div>
       <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed max-w-lg">
        {film.desc}
       </p>
       <ul className="flex flex-col gap-2 mt-2">
        {film.specs.map((spec) => (
         <li
          key={spec}
          className="flex items-center gap-3 text-gray-700 text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0" />
          {spec}
         </li>
        ))}
       </ul>
       <Link
        to="/contact"
        className="mt-4 self-start flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#111] hover:text-gray-500 transition-colors group">
        Enquire About {film.code}
        <svg
         width="16"
         height="16"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2.5"
         strokeLinecap="round"
         strokeLinejoin="round"
         className="group-hover:translate-x-1 transition-transform">
         <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
       </Link>
      </div>
     </div>
    ))}
   </section>

   {/* Application Areas */}
   <section className="bg-[#111A22] py-20 md:py-28 px-4 md:px-10 lg:px-20">
    <div className="max-w-[1536px] mx-auto">
     <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
      <div>
       <span className="text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] block mb-3">
        Where We Apply
       </span>
       <h2 className="text-white text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight">
        Application
        <br />
        Sectors
       </h2>
      </div>
      <p className="text-gray-400 text-sm font-light max-w-sm text-left md:text-right leading-relaxed">
       3M film solutions deployed across a wide range of sectors throughout the
       UAE and GCC.
      </p>
     </div>

     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {applications.map((app) => (
       <div
        key={app.title}
        className="relative group overflow-hidden rounded-2xl aspect-square bg-gray-800 cursor-pointer">
        <img
         src={app.image}
         alt={app.title}
         className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
         <h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wide leading-snug">
          {app.title}
         </h3>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Why 3M Section */}
   <section className="px-4 md:px-10 lg:px-20 py-20 md:py-28 max-w-[1536px] mx-auto w-full">
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-14">
     <div>
      <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
       The 3M Advantage
      </span>
      <h2 className="text-[#111] text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight">
       Why Choose
       <br />
       3M Films?
      </h2>
     </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-100">
     {[
      {
       title: "Certified Quality",
       desc:
        "Every film meets 3M's rigorous international quality and safety standards — tested for UAE climate conditions.",
      },
      {
       title: "No Renovation",
       desc:
        "Achieve a complete surface transformation without demolition, downtime, or construction waste.",
      },
      {
       title: "Warranty Backed",
       desc:
        "3M films carry manufacturer warranties of up to 7 years interior and 5 years exterior depending on application.",
      },
      {
       title: "Authorized Application",
       desc:
        "As a certified 3M converter, our installers are factory-trained to ensure warranty compliance and perfect results.",
      },
     ].map((item, idx) => (
      <div
       key={idx}
       className="group flex flex-col gap-4 p-8 border-b border-r border-gray-100 hover:bg-[#111] transition-colors duration-300">
       <h3 className="text-[#111] group-hover:text-white font-bold text-xl transition-colors">
        {item.title}
       </h3>
       <p className="text-gray-500 group-hover:text-gray-300 text-sm font-light leading-relaxed transition-colors">
        {item.desc}
       </p>
      </div>
     ))}
    </div>
   </section>

   <CtaSection />
  </main>
 );
};

export default FilmWrapping;
