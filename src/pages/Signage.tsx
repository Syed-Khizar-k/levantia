import { Link } from "react-router-dom";
import CtaSection from "../components/CtaSection";
import InfiniteCarousel from "../components/InfiniteCarousel";

const signageTypes = [
 {
  number: "01",
  title: "Illuminated Fascia Signs",
  desc:
   "Front-lit and back-lit fascia signage with LED technology. Built for maximum visibility day and night across retail frontages, malls, and commercial buildings.",
  image:
   "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=900",
 },
 {
  number: "02",
  title: "3D Dimensional Letters",
  desc:
   "Individually cut and finished acrylic, metal, or foam letters. Available in halo-lit, face-lit, or non-illuminated finishes for premium brand reception areas.",
  image:
   "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=900",
 },
 {
  number: "03",
  title: "Pylon & Totem Signs",
  desc:
   "Freestanding structures designed to maximize brand presence at building entries, forecourts, and roadside locations with high footfall and traffic exposure.",
  image:
   "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900",
 },
 {
  number: "04",
  title: "Wayfinding & Directional",
  desc:
   "Comprehensive wayfinding systems for commercial complexes, hospitals, airports, and corporate campuses — keeping visitors oriented and your brand consistent.",
  image:
   "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=900",
 },
 {
  number: "05",
  title: "Outdoor Hoarding & Billboards",
  desc:
   "Large-scale outdoor advertising structures — printed or digital — for construction sites, main roads, and high-visibility commercial zones across the UAE.",
  image:
   "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=900",
 },
 {
  number: "06",
  title: "Window & Glass Graphics",
  desc:
   "Full-colour vinyl prints, frosted films, and perforated window graphics for retail storefronts, office partitions, and showroom glass surfaces.",
  image:
   "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=900",
 },
];

const process = [
 {
  step: "01",
  title: "Brief & Survey",
  desc:
   "We assess the site, understand your brand requirements, and provide a feasibility and cost estimate.",
 },
 {
  step: "02",
  title: "Design",
  desc:
   "Our in-house team produces detailed 2D/3D visualisations for your approval before any fabrication begins.",
 },
 {
  step: "03",
  title: "Fabrication",
  desc:
   "All signage is produced in our Dubai facility using premium materials, CNC routing, and LED lighting systems.",
 },
 {
  step: "04",
  title: "Installation",
  desc:
   "Our certified installation crews handle everything — from structural fixing to final electrical connections and sign-off.",
 },
];

const Signage = () => {
 return (
  <main className="w-full bg-white flex flex-col">
   {/* Hero Section */}
   <section className="relative w-full min-h-[600px] lg:min-h-[700px] bg-[#111A22] flex items-end overflow-hidden">
    <img
     src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920"
     alt="Signage Production"
     className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
    />
    <div className="absolute inset-0 bg-linear-to-t from-[#111A22] via-[#111A22]/50 to-transparent" />

    {/* Floating label top-right */}
    <div className="absolute top-32 right-8 md:right-16 hidden md:flex flex-col items-end gap-1 z-10">
     <span className="text-gray-500 text-xs font-medium uppercase tracking-[0.2em]">
      Service Area
     </span>
     <span className="text-white text-sm font-semibold">Dubai, UAE</span>
    </div>

    <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 pt-36 max-w-[1536px] mx-auto w-full flex flex-col gap-6">
     <span className="text-gray-400 text-xs font-medium uppercase tracking-[0.25em]">
      Levantia Advertising — Signage Division
     </span>
     <h1 className="text-white text-[3rem] md:text-[5.5rem] lg:text-[7rem] font-black uppercase leading-[0.92] tracking-tight max-w-5xl">
      Outdoor &amp; Indoor
      <br />
      Signage
     </h1>
     <p className="text-gray-300 text-base md:text-lg font-light max-w-xl">
      End-to-end signage production and installation. From architectural fascias
      and 3D lettering to outdoor hoardings and wayfinding systems.
     </p>
     <div className="flex gap-4 mt-2">
      <Link
       to="/contact"
       className="px-7 py-3 bg-white text-[#111] font-semibold uppercase text-sm tracking-wider rounded-full hover:bg-gray-200 transition-colors">
       Get a Quote
      </Link>
      <Link
       to="/products"
       className="px-7 py-3 border border-white/30 text-white font-semibold uppercase text-sm tracking-wider rounded-full hover:bg-white/10 transition-colors">
       Browse Products
      </Link>
     </div>
    </div>
   </section>

   <InfiniteCarousel />

   {/* Intro Split Section */}
   <section className="px-4 md:px-10 lg:px-20 py-20 md:py-32 max-w-[1536px] mx-auto w-full">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
     <div className="w-full lg:w-1/2 lg:sticky lg:top-28 flex flex-col gap-6">
      <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em]">
       Our Capability
      </span>
      <h2 className="text-[#111] text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight">
       Every Sign.
       <br />
       Perfectly Built.
      </h2>
      <div className="w-10 h-1 bg-gray-900" />
      <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
       Levantia's signage division operates a fully integrated production and
       installation capability in Dubai. From the first design sketch to the
       final installation bolt, every step happens under our direct management —
       ensuring precision, consistency, and absolute accountability.
      </p>
      <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
       We work with leading retail chains, real-estate developers, hospitality
       groups, and corporate brands across the UAE and wider GCC.
      </p>
     </div>

     <div className="w-full lg:w-1/2 h-[400px] md:h-[550px] rounded-2xl overflow-hidden">
      <img
       src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=1200"
       alt="Signage Installation"
       className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
      />
     </div>
    </div>
   </section>

   {/* Signage Types Grid */}
   <section className="w-full bg-[#F5F5F5] py-20 md:py-32">
    <div className="px-4 md:px-10 lg:px-20 max-w-[1536px] mx-auto">
     <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-14">
      <div>
       <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
        What We Produce
       </span>
       <h2 className="text-[#111] text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight">
        Signage
        <br />
        Solutions
       </h2>
      </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {signageTypes.map((item) => (
       <div
        key={item.number}
        className="group flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="w-full h-52 overflow-hidden">
         <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 group-hover:grayscale grayscale-0"
         />
        </div>
        <div className="flex flex-col gap-3 p-7">
         <span className="text-gray-300 text-xs font-bold tracking-widest">
          {item.number}
         </span>
         <h3 className="text-[#111] font-bold text-xl leading-snug">
          {item.title}
         </h3>
         <p className="text-gray-500 text-sm font-light leading-relaxed">
          {item.desc}
         </p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Process Section */}
   <section className="bg-[#111A22] py-20 md:py-32 px-4 md:px-10 lg:px-20">
    <div className="max-w-[1536px] mx-auto">
     <span className="text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] block mb-5">
      How We Work
     </span>
     <h2 className="text-white text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight mb-14">
      Our Process
     </h2>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/10">
      {process.map((p) => (
       <div
        key={p.step}
        className="flex flex-col gap-5 p-8 md:p-10 border-b border-r border-white/10 group hover:bg-white/5 transition-colors">
        <span className="text-gray-600 text-3xl font-black tracking-tight">
         {p.step}
        </span>
        <h3 className="text-white text-xl font-bold">{p.title}</h3>
        <p className="text-gray-400 text-sm font-light leading-relaxed">
         {p.desc}
        </p>
       </div>
      ))}
     </div>
    </div>
   </section>

   <CtaSection />
  </main>
 );
};

export default Signage;
