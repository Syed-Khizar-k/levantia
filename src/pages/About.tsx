import CtaSection from "../components/CtaSection";
import InfiniteCarousel from "../components/InfiniteCarousel";

const About = () => {
 return (
  <main className="w-full bg-white flex flex-col">
   {/* Hero Section */}
   <section className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center overflow-hidden">
    {/* Background Image (Placeholder) */}
    <img
     src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
     alt="Office Background"
     className="absolute inset-0 w-full h-full object-cover z-0"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60 z-0"></div>

    {/* Hero Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-12 md:mt-20">
     <span className="text-gray-300 tracking-[0.2em] text-xs md:text-sm font-medium uppercase mb-4">
      Levantia Advertising
     </span>
     <h1 className="text-white text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold leading-[1.1] mb-6 tracking-tight">
      Why Choose Us
     </h1>
     <p className="text-gray-200 text-base md:text-lg lg:text-xl font-light max-w-2xl">
      We bring your ideas to life and create powerful solutions that ascend your
      sales.
     </p>
    </div>
   </section>
   <InfiniteCarousel />
   {/* About Us Content Section */}
   <section className="px-4 md:px-10 lg:px-20 py-20 md:py-32 w-full mx-auto max-w-[1536px]">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
     {/* Left Text Content */}
     <div className="flex flex-col gap-6 lg:w-1/2">
      <h2 className="text-[#111A22] text-[2.5rem] md:text-[3rem] font-bold leading-tight mb-2">
       About Us
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
       <strong className="font-semibold text-gray-900">
        Levantia Advertising LLC
       </strong>{" "}
       was established in the UAE in 2015. We specialize in 3M Film Wrapping
       (DI-NOC & FASARA), Outdoor & Indoor Signage Production, Gift Items
       trading, Branding, and Graphic Designing and Printing Services.
      </p>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
       Our team creates amazing designs for your products using our creativity
       and ideological potential. We offer each client solutions and concepts
       that are not only visually beautiful, but are guaranteed to ascend sales.
      </p>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
       We view ourselves as partners with our suppliers, customers, community,
       and environment. Our services are the key to your success.
      </p>
     </div>

     {/* Right Image */}
     <div className="lg:w-1/2 w-full">
      <div className="relative aspect-4/3 rounded-4xl overflow-hidden shadow-2xl">
       <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
        alt="Creative Team Working"
        className="w-full h-full object-cover"
       />
      </div>
     </div>
    </div>
   </section>

   {/* Vision & Mission Section (Dark Theme) */}
   <section className="bg-[#111A22] w-full py-20 px-4 md:px-10 lg:px-20">
    <div className="max-w-[1536px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">
     {/* Vision */}
     <div className="flex flex-col gap-6 md:w-1/2 p-8 md:p-12 bg-white/5 rounded-4xl border border-white/10 hover:bg-white/10 transition-colors">
      <h3 className="text-white text-[2rem] font-bold">Our Vision</h3>
      <p className="text-gray-300 leading-relaxed font-light text-lg">
       To deliver professional and cost effective solutions by providing our
       clients a distinct experience across our entire range of products and
       services.
      </p>
     </div>

     {/* Mission */}
     <div className="flex flex-col gap-6 md:w-1/2 p-8 md:p-12 bg-white/5 rounded-4xl border border-white/10 hover:bg-white/10 transition-colors">
      <h3 className="text-white text-[2rem] font-bold">Our Mission</h3>
      <p className="text-gray-300 leading-relaxed font-light text-lg">
       To provide superior quality in our products and services that will
       enhance our clients' business opportunities and personalize their brand
       to ensure brand loyalty.
      </p>
     </div>
    </div>
   </section>

   {/* Services Grid Section */}
   <section className="px-4 md:px-10 lg:px-20 py-20 md:py-32 w-full mx-auto max-w-[1536px]">
    <div className="flex flex-col items-center text-center mb-16 md:mb-24">
     <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4">
      What We Do
     </span>
     <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-[#111A22] leading-[1.15]">
      Levantia Services
     </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
     {[
      "3M Film Wrapping (DI-NOC & FASARA)",
      "Sticker Application",
      "Outdoor & Indoor Signage Production",
      "Acrylic & Wood works",
      "Stationary (BC, Envelopes, Letterhead, Rollups, Menu, Flyers)",
      "Boxes, Shopping Bags",
      "Branding",
      "Promotional Items",
     ].map((service, idx) => (
      <div
       key={idx}
       className="group bg-[#F7F7F7] p-8 rounded-4xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col justify-center min-h-[220px]">
       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-gray-800 group-hover:bg-[#111A22] group-hover:text-white transition-colors duration-300">
        <span className="text-xl font-bold">{idx + 1}</span>
       </div>
       <h3 className="text-xl font-bold text-gray-900 leading-snug">
        {service}
       </h3>
      </div>
     ))}
    </div>
   </section>

   {/* Call to Action Section */}
   <CtaSection />
  </main>
 );
};

export default About;
