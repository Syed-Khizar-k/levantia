import { useEffect, useRef, useState } from "react";
import CtaSection from "../components/CtaSection";
import InfiniteCarousel from "../components/InfiniteCarousel";

function CountUp({
 end,
 suffix = "",
 duration = 1800,
}: {
 end: number;
 suffix?: string;
 duration?: number;
}) {
 const [count, setCount] = useState(0);
 const ref = useRef<HTMLSpanElement>(null);
 const started = useRef(false);

 useEffect(() => {
  const el = ref.current;
  if (!el) return;
  const observer = new IntersectionObserver(
   ([entry]) => {
    if (entry.isIntersecting && !started.current) {
     started.current = true;
     const startTime = performance.now();
     const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(end);
     };
     requestAnimationFrame(step);
    }
   },
   { threshold: 0.5 },
  );
  observer.observe(el);
  return () => observer.disconnect();
 }, [end, duration]);

 return (
  <span ref={ref}>
   {count}
   {suffix}
  </span>
 );
}

const services = [
 {
  title: "3M Film Wrapping",
  sub: "DI-NOC & FASARA",
  desc:
   "Interior architectural films that transform surfaces into premium finishes — wood, stone, metal, fabric, and more — without renovation.",
 },
 {
  title: "Outdoor & Indoor Signage",
  sub: "Production & Installation",
  desc:
   "High-impact illuminated signs, fascias, pylons, and wayfinding systems engineered for longevity and visual impact.",
 },
 {
  title: "Acrylic & Wood Works",
  sub: "Custom Fabrication",
  desc:
   "In-house CNC routing and fabrication of acrylic displays, dimensional letters, shelving, and bespoke interior furniture.",
 },
 {
  title: "Printing Services",
  sub: "Large Format & Offset",
  desc:
   "From large format roll-ups and flex banners to premium business stationery — full-service print production under one roof.",
 },
 {
  title: "Branding & Graphic Design",
  sub: "Identity & Strategy",
  desc:
   "Logo design, brand identity systems, and marketing collateral that communicate your brand's values with clarity and distinction.",
 },
 {
  title: "Gift Items & Promotions",
  sub: "Corporate Gifting",
  desc:
   "Custom-branded promotional merchandise and corporate gifting solutions tailored to any occasion, budget, or recipient.",
 },
];

const milestones = [
 { year: "2015", label: "Founded in Dubai, UAE" },
 { year: "2017", label: "Became 3M Authorized Converter" },
 { year: "2019", label: "Expanded to full-service production facility" },
 { year: "2022", label: "Reached 200+ corporate clients" },
 { year: "2024", label: "Launched architectural products division" },
];

const CompanyProfile = () => {
 return (
  <main className="w-full bg-white flex flex-col">
   {/* Hero */}
   <section className="relative w-full min-h-[520px] md:min-h-[620px] bg-[#111A22] flex items-end overflow-hidden">
    <img
     src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
     alt="Levantia Office"
     className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
    />
    <div className="absolute inset-0 bg-linear-to-t from-[#111A22] via-transparent to-transparent" />

    <div className="relative z-10 px-4 md:px-10 lg:px-20 pb-16 md:pb-24 pt-32 max-w-[1536px] mx-auto w-full">
     <span className="block text-gray-400 text-xs font-medium uppercase tracking-[0.25em] mb-5">
      Levantia Advertising LLC — Est. 2015, Dubai UAE
     </span>
     <h1 className="text-white text-[3rem] md:text-[5.5rem] lg:text-[7rem] font-black uppercase leading-[0.92] tracking-tight max-w-4xl">
      Company
      <br />
      Profile
     </h1>
    </div>
   </section>

   {/* Stats Bar */}
   <section className="bg-white border-b border-gray-100">
    <div className="max-w-[1536px] mx-auto px-4 md:px-10 lg:px-20 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
     {[
      { end: 10, suffix: "+", label: "Years of Experience" },
      { end: 200, suffix: "+", label: "Corporate Clients" },
      { end: 6, suffix: "", label: "Core Service Lines" },
      { end: 100, suffix: "%", label: "3M Certified Converter" },
     ].map((stat) => (
      <div
       key={stat.label}
       className="flex flex-col items-center justify-center py-10 px-4 gap-1 text-center">
       <span className="text-[#111] text-3xl md:text-4xl font-black">
        <CountUp end={stat.end} suffix={stat.suffix} />
       </span>
       <span className="text-gray-500 text-xs md:text-sm font-light uppercase tracking-wider">
        {stat.label}
       </span>
      </div>
     ))}
    </div>
   </section>

   <InfiniteCarousel />

   {/* About Section */}
   <section className="px-4 md:px-10 lg:px-20 py-20 md:py-32 max-w-[1536px] mx-auto w-full">
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
     <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:sticky lg:top-28">
      <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em]">
       Who We Are
      </span>
      <h2 className="text-[#111] text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight">
       Built on
       <br />
       Trust & Craft.
      </h2>
      <div className="w-10 h-1 bg-gray-900" />
     </div>

     <div className="w-full lg:w-1/2 flex flex-col gap-6 text-gray-600 text-base md:text-lg font-light leading-relaxed">
      <p>
       <strong className="font-bold text-gray-900">
        Levantia Advertising LLC
       </strong>{" "}
       was established in the UAE in 2015 with a clear mandate: to deliver
       premium advertising, branding, and production services that give
       businesses a distinctive edge in the marketplace.
      </p>
      <p>
       As an authorized{" "}
       <strong className="font-semibold text-gray-900">
        3M Approved Converter (Architectural Products)
       </strong>
       , we are equipped to handle the full spectrum of 3M DI-NOC and FASARA
       film applications — from conception through to installation — with the
       precision and quality that the world's most demanding brands demand.
      </p>
      <p>
       Our Dubai-based facility houses a team of experienced designers,
       production specialists, and installation engineers who work together
       seamlessly to deliver results on time, within budget, and beyond
       expectations.
      </p>
      <p>
       We view ourselves not as vendors, but as long-term partners to our
       clients — invested in their success, growth, and brand equity.
      </p>
     </div>
    </div>
   </section>

   {/* Vision & Mission */}
   <section className="bg-[#111A22] py-20 md:py-32 px-4 md:px-10 lg:px-20">
    <div className="max-w-[1536px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
     {[
      {
       label: "Our Vision",
       body:
        "To be the most trusted advertising and production partner in the UAE, renowned for quality, innovation, and client-centric service delivery across every project we undertake.",
      },
      {
       label: "Our Mission",
       body:
        "To provide superior quality in our products and services that will enhance our clients' business opportunities, personalize their brand, and ensure lasting brand loyalty through exceptional execution.",
      },
     ].map((item) => (
      <div
       key={item.label}
       className="flex flex-col gap-5 p-10 md:p-12 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
       <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em]">
        {item.label}
       </span>
       <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
        {item.body}
       </p>
      </div>
     ))}
    </div>
   </section>

   {/* Services Grid */}
   <section className="px-4 md:px-10 lg:px-20 py-20 md:py-32 max-w-[1536px] mx-auto w-full">
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
     <div>
      <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
       What We Do
      </span>
      <h2 className="text-[#111] text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight">
       Our Services
      </h2>
     </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
     {services.map((s, idx) => (
      <div
       key={idx}
       className="group flex flex-col gap-4 p-8 md:p-10 border-b border-r border-gray-100 hover:bg-[#111] transition-colors duration-300 cursor-pointer">
       <span className="text-gray-400 group-hover:text-gray-500 text-xs font-semibold uppercase tracking-widest">
        {s.sub}
       </span>
       <h3 className="text-[#111] group-hover:text-white text-xl md:text-2xl font-bold transition-colors">
        {s.title}
       </h3>
       <p className="text-gray-500 group-hover:text-gray-300 text-sm font-light leading-relaxed transition-colors">
        {s.desc}
       </p>
      </div>
     ))}
    </div>
   </section>

   {/* Timeline */}
   <section className="bg-[#F5F5F5] px-4 md:px-10 lg:px-20 py-20 md:py-28">
    <div className="max-w-[1536px] mx-auto">
     <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em] block mb-6">
      Our Journey
     </span>
     <h2 className="text-[#111] text-[2.5rem] md:text-[3.5rem] font-black uppercase leading-[1.05] tracking-tight mb-14">
      Milestones
     </h2>
     <div className="relative flex flex-col gap-0">
      {/* Vertical line */}
      <div className="absolute left-[90px] md:left-[120px] top-0 bottom-0 w-px bg-gray-200" />
      {milestones.map((m, idx) => (
       <div key={idx} className="flex items-start gap-8 md:gap-12 py-7 group">
        <span className="text-gray-400 text-sm font-bold uppercase tracking-wider w-[70px] md:w-[100px] text-right shrink-0 pt-0.5">
         {m.year}
        </span>
        <div className="relative flex items-center shrink-0">
         <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-[#111] transition-colors duration-300 relative z-10 -translate-x-1.5" />
        </div>
        <p className="text-gray-900 font-medium text-base md:text-lg leading-snug pt-0 -ml-4">
         {m.label}
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

export default CompanyProfile;
