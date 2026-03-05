import Button from "./Button";

const Hero = () => {
 return (
  <section className="w-full bg-[#ECEEED] overflow-hidden">
   <div className="px-4 md:px-10 lg:px-20 pb-12 pt-8 w-full mx-auto max-w-[1536px]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
     {/* Left Content — staggered fade-up */}
     <div className="flex flex-col justify-center max-w-xl">
      {/* Eyebrow tag */}
      <div className="hero-fade-up delay-100 flex items-center gap-3 mb-6">
       <span className="w-6 h-px bg-gray-500" />
       <span className="text-gray-500 text-xs font-semibold uppercase tracking-[0.2em]">
        UAE Since 2015 · 3M Approved Converter
       </span>
      </div>

      {/* Main Headline */}
      <h1 className="hero-fade-up delay-200 text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] font-bold leading-[1.05] tracking-tight text-gray-900 mb-8">
       ADVERTISING
       <br />
       <span className="text-gray-500">&amp; PRODUCTION</span>
      </h1>

      {/* Description */}
      <p className="hero-fade-up delay-300 text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
       Established in UAE since 2015. We specialize in 3M Film Wrapping, Outdoor
       &amp; Indoor Signage Production, Gift Items trading, and Graphic
       Designing. Our team creates amazing designs for your products that are
       visually beautiful and guaranteed to ascend sales.
      </p>

      {/* CTA */}
      <div className="hero-fade-up delay-400">
       <Button
        href="/about-us"
        className="w-fit"
        bgColor="bg-[#141414]"
        textColor="text-[#FFFFFF]">
        Explore Our Services
       </Button>
      </div>

      {/* Floating stat pills */}
      <div className="hero-fade-up delay-500 flex flex-wrap gap-4 mt-10 pt-8 border-t border-gray-300/50">
       {[
        { val: "12+", label: "Years Experience" },
        { val: "200+", label: "Corporate Clients" },
        { val: "6", label: "Service Lines" },
       ].map((s) => (
        <div key={s.label} className="flex items-center gap-2">
         <span className="text-xl font-black text-gray-900">{s.val}</span>
         <span className="text-xs text-gray-500 font-medium uppercase tracking-wide leading-tight max-w-[4rem]">
          {s.label}
         </span>
        </div>
       ))}
      </div>
     </div>

     {/* Right Image — slides in from right + subtle float */}
     <div className="hero-fade-right delay-300 w-full relative h-full px-4 rounded-[12px]">
      <img
       src="/bulb-creative.png"
       alt="Levantia Creative Work"
       className="hero-scale-in delay-200 h-full w-full object-cover rounded-[12px]"
      />
     </div>
    </div>
   </div>
  </section>
 );
};

export default Hero;
