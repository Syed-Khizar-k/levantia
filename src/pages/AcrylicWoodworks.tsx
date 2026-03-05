import { Link } from "react-router-dom";
import CtaSection from "../components/CtaSection";
import InfiniteCarousel from "../components/InfiniteCarousel";

const offerings = [
 {
  title: "Acrylic Display Stands",
  desc:
   "Custom-designed display stands for retail products, awards, and exhibitions. Crystal-clear or coloured acrylic cut to precision.",
  image:
   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=900",
 },
 {
  title: "Dimensional Acrylic Letters",
  desc:
   "Individually cut and polished acrylic letters for signage, reception walls, and branded environments — face-lit, halo-lit, or plain.",
  image:
   "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=900",
 },
 {
  title: "Acrylic Partitions & Panels",
  desc:
   "Office partitions, room dividers, and decorative panels in frosted, clear, or tinted acrylic — combining function and aesthetics.",
  image:
   "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=900",
 },
 {
  title: "Custom Wood Furniture",
  desc:
   "Bespoke display cabinets, reception counters, shelving systems, and feature walls crafted from premium timber and engineered wood.",
  image:
   "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=900",
 },
 {
  title: "Menu Boards & Frames",
  desc:
   "Restaurant menu boards, poster frames, and display holders in wood, metal, or acrylic combinations for hospitality environments.",
  image:
   "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=900",
 },
 {
  title: "Retail Shopfitting",
  desc:
   "Complete retail interior fit-out: gondolas, product plinths, cash wrap counters, and feature displays — all fabricated in-house.",
  image:
   "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=900",
 },
];

const materials = [
 { name: "Cast Acrylic", property: "Crystal-clear, durable, polishable" },
 {
  name: "Extruded Acrylic",
  property: "Cost-effective for large-format applications",
 },
 {
  name: "Frosted Acrylic",
  property: "Diffused light, privacy, modern aesthetic",
 },
 {
  name: "Solid Oak & Walnut",
  property: "Premium hardwood for luxury finishes",
 },
 {
  name: "MDF & Plywood",
  property: "Versatile engineered wood for shopfitting",
 },
 {
  name: "Veneer Panels",
  property: "Natural wood grain on manufactured boards",
 },
];

const AcrylicWoodworks = () => {
 return (
  <main className="w-full bg-white flex flex-col">
   {/* Hero — Minimal, Typography-First */}
   <section className="relative w-full min-h-[650px] bg-white flex items-center overflow-hidden border-b border-gray-100 pt-24">
    {/* Large muted background text */}
    <span className="absolute right-0 bottom-0 text-[12rem] md:text-[18rem] font-black text-gray-50 leading-none tracking-tighter select-none pointer-events-none uppercase translate-y-8">
     Craft
    </span>

    <div className="px-4 md:px-10 lg:px-20 max-w-[1536px] mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
     {/* Left: Text */}
     <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.25em]">
       Levantia Advertising — Workshop Division
      </span>
      <h1 className="text-[#111] text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-black uppercase leading-[0.95] tracking-tight">
       Acrylic &amp;
       <br />
       Wood Works
      </h1>
      <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed max-w-lg">
       Precision craftsmanship in every piece. Our in-house workshop produces
       bespoke acrylic fabrications and custom wood furniture for retail,
       hospitality, and corporate environments across the UAE.
      </p>
      <div className="flex items-center gap-6 mt-2">
       <Link
        to="/contact"
        className="px-7 py-3 bg-[#111] text-white font-semibold uppercase text-sm tracking-wider rounded-full hover:bg-gray-800 transition-colors">
        Request a Custom Piece
       </Link>
      </div>

      {/* Quick stats inline */}
      <div className="flex gap-10 mt-6 pt-6 border-t border-gray-100">
       <div>
        <span className="block text-2xl font-black text-[#111]">100%</span>
        <span className="block text-xs text-gray-400 uppercase tracking-wider mt-0.5">
         In-house Production
        </span>
       </div>
       <div>
        <span className="block text-2xl font-black text-[#111]">10+</span>
        <span className="block text-xs text-gray-400 uppercase tracking-wider mt-0.5">
         Years Craftsmanship
        </span>
       </div>
       <div>
        <span className="block text-2xl font-black text-[#111]">UAE</span>
        <span className="block text-xs text-gray-400 uppercase tracking-wider mt-0.5">
         Based Workshop
        </span>
       </div>
      </div>
     </div>

     {/* Right: Stacked Images */}
     <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
      <div className="absolute top-0 right-0 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-xl z-20">
       <img
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=900"
        alt="Custom Wood Furniture"
        className="w-full h-full object-cover"
       />
      </div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[65%] rounded-2xl overflow-hidden shadow-lg z-10 border-4 border-white">
       <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=900"
        alt="Acrylic Display"
        className="w-full h-full object-cover grayscale"
       />
      </div>
     </div>
    </div>
   </section>

   <InfiniteCarousel />

   {/* What We Make — Clean Grid */}
   <section className="px-4 md:px-10 lg:px-20 py-20 md:py-28 max-w-[1536px] mx-auto w-full">
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
     <div>
      <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] block mb-3">
       Our Craft
      </span>
      <h2 className="text-[#111] text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight">
       What We Make
      </h2>
     </div>
     <p className="text-gray-500 text-sm md:text-base font-light max-w-sm md:text-right leading-relaxed">
      Every piece is designed, cut, assembled, and finished entirely within our
      Dubai facility.
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {offerings.map((item, idx) => (
      <div key={idx} className="group flex flex-col gap-0 cursor-pointer">
       <div className="w-full h-56 rounded-2xl overflow-hidden bg-gray-50">
        <img
         src={item.image}
         alt={item.title}
         className="w-full h-full object-cover group-hover:grayscale grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
        />
       </div>
       <div className="flex flex-col gap-2 pt-5 px-1">
        <h3 className="text-[#111] font-bold text-lg leading-snug">
         {item.title}
        </h3>
        <p className="text-gray-500 text-sm font-light leading-relaxed">
         {item.desc}
        </p>
       </div>
      </div>
     ))}
    </div>
   </section>

   {/* Materials — Dark Band */}
   <section className="bg-[#111A22] py-20 md:py-28 px-4 md:px-10 lg:px-20">
    <div className="max-w-[1536px] mx-auto">
     <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-14">
      <div>
       <span className="text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
        Premium Inputs
       </span>
       <h2 className="text-white text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight">
        Materials
        <br />
        We Work With
       </h2>
      </div>
      <p className="text-gray-400 text-base font-light max-w-sm md:text-right leading-relaxed">
       We source only grade-A acrylic and certified timber, ensuring a premium
       finish that holds up over time.
      </p>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
      {materials.map((m) => (
       <div
        key={m.name}
        className="flex flex-col gap-2 p-8 border-b border-r border-white/10 hover:bg-white/5 transition-colors group">
        <span className="w-8 h-px bg-gray-600 group-hover:bg-white transition-colors mb-2" />
        <h3 className="text-white font-bold text-lg">{m.name}</h3>
        <p className="text-gray-400 text-sm font-light">{m.property}</p>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Process — Light, Numbered steps */}
   <section className="px-4 md:px-10 lg:px-20 py-20 md:py-28 bg-[#F7F7F7]">
    <div className="max-w-[1536px] mx-auto">
     <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
      Workflow
     </span>
     <h2 className="text-[#111] text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight mb-14">
      From Concept
      <br />
      to Completion
     </h2>
     <div className="flex flex-col gap-0 divide-y divide-gray-200">
      {[
       {
        n: "01",
        title: "Consultation & Briefing",
        desc:
         "We understand your space, brand, and budget to define the right materials, dimensions, and finish for your project.",
       },
       {
        n: "02",
        title: "Design & Technical Drawing",
        desc:
         "Our designers produce scaled drawings and 3D renders so you can visualise the finished piece before any material is touched.",
       },
       {
        n: "03",
        title: "CNC Fabrication & Cutting",
        desc:
         "Precision-cut using our CNC routing machines — ensuring every edge, curve, and joint is exact to the millimetre.",
       },
       {
        n: "04",
        title: "Assembly, Finishing & Delivery",
        desc:
         "Hand-assembled, polished, and quality-checked in our facility before delivery and professional on-site installation.",
       },
      ].map((step) => (
       <div
        key={step.n}
        className="group flex flex-col md:flex-row gap-4 md:gap-12 py-8 hover:bg-white hover:px-6 hover:rounded-2xl transition-all duration-300">
        <span className="text-gray-200 font-black text-4xl md:text-5xl w-20 shrink-0 leading-none group-hover:text-gray-300 transition-colors">
         {step.n}
        </span>
        <div className="flex flex-col gap-2">
         <h3 className="text-[#111] font-bold text-xl md:text-2xl">
          {step.title}
         </h3>
         <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed max-w-2xl">
          {step.desc}
         </p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   <CtaSection />
  </main>
 );
};

export default AcrylicWoodworks;
