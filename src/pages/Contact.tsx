import { useState, useRef } from "react";
import type { MouseEvent } from "react";

// Magnetic Spotlight Wrapper Component
const MagneticCard = ({
 children,
 className = "",
 spotlightColor = "rgba(0,0,0,0.05)",
}: {
 children: React.ReactNode;
 className?: string;
 spotlightColor?: string;
}) => {
 const [position, setPosition] = useState({ x: 0, y: 0 });
 const [opacity, setOpacity] = useState(0);
 const cardRef = useRef<HTMLDivElement>(null);

 const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
  if (!cardRef.current) return;
  const rect = cardRef.current.getBoundingClientRect();
  setPosition({
   x: e.clientX - rect.left,
   y: e.clientY - rect.top,
  });
 };

 const handleMouseEnter = () => setOpacity(1);
 const handleMouseLeave = () => setOpacity(0);

 return (
  <div
   ref={cardRef}
   onMouseMove={handleMouseMove}
   onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}
   className={`relative overflow-hidden group transition-transform hover:-translate-y-1 hover:shadow-lg duration-300 ${className}`}>
   {/* Background Spotlight Layer */}
   <div
    className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
    style={{
     opacity,
     background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
    }}
   />

   {/* Content wrapper ensuring it sits above spotlight */}
   <div className="relative z-10 w-full h-full flex flex-col items-center">
    {children}
   </div>
  </div>
 );
};

const Contact = () => {
 return (
  <main className="w-full bg-white flex flex-col pt-32 pb-0 font-sans">
   {/* Header Area */}
   <section className="px-4 md:px-10 lg:px-20 w-full mx-auto max-w-[1000px] text-center mb-16 md:mb-24">
    <h1 className="text-[3.5rem] md:text-[5rem] font-bold text-[#111A22] leading-[1.1] tracking-tight mb-6 animate-[fade-in-up_0.8s_ease-out_forwards]">
     Let's talk.
    </h1>
    <p className="text-gray-500 font-light text-lg md:text-xl leading-relaxed mx-auto max-w-2xl animate-[fade-in-up_1s_ease-out_0.2s_forwards] opacity-0">
     Get in touch with our team to discuss your next project, request a quote,
     or explore how Levantia Advertising can elevate your brand.
    </p>
   </section>

   {/* Contact Cards Grid */}
   <section className="px-4 md:px-10 lg:px-20 w-full mx-auto max-w-[1536px] mb-20 md:mb-32 animate-[fade-in-up_1s_ease-out_0.4s_forwards] opacity-0">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
     {/* Office Card */}
     <MagneticCard
      className="bg-[#fcfcfc] border border-gray-100 rounded-3xl p-10 text-center"
      spotlightColor="rgba(17,26,34,0.06)">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-[#111A22]">
       <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
       </svg>
      </div>
      <h3 className="text-xl font-bold text-[#111A22] mb-3">Our Office</h3>
      <p className="text-gray-500 font-light leading-relaxed">
       Al Qusais Industrial 3<br />
       Warehouse S2
       <br />
       Dubai, UAE
      </p>
     </MagneticCard>

     {/* Phone Card */}
     <MagneticCard
      className="bg-[#111A22] border-0 rounded-3xl p-10 text-center text-white shadow-2xl shadow-black/10"
      spotlightColor="rgba(255,255,255,0.08)">
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white backdrop-blur-md border border-white/10">
       <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
       </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">Phone & Chat</h3>
      <div className="flex flex-col gap-2 font-light text-gray-300">
       <a
        href="tel:+971559976313"
        className="hover:text-white transition-colors">
        +971 55 997 6313
       </a>
       <a
        href="tel:+971544114242"
        className="hover:text-white transition-colors">
        +971 54 411 4242
       </a>
       <a
        href="https://wa.me/971559976313"
        target="_blank"
        rel="noreferrer"
        className="mt-4 text-[#25D366] font-medium hover:text-[#20bd5a] flex items-center justify-center gap-2 transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        Message on WhatsApp
       </a>
      </div>
     </MagneticCard>

     {/* Email Card */}
     <MagneticCard
      className="bg-[#fcfcfc] border border-gray-100 rounded-3xl p-10 text-center"
      spotlightColor="rgba(17,26,34,0.06)">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-[#111A22]">
       <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
       </svg>
      </div>
      <h3 className="text-xl font-bold text-[#111A22] mb-3">Email Address</h3>
      <p className="text-gray-500 font-light leading-relaxed mb-4">
       Drop us a line anytime.
      </p>
      <a
       href="mailto:adnan@levantiaadv.com"
       className="text-[#111A22] font-semibold hover:underline">
       adnan@levantiaadv.com
      </a>
     </MagneticCard>
    </div>
   </section>

   {/* Form Section */}
   <section className="px-4 md:px-10 w-full mx-auto max-w-[800px] mb-24 md:mb-32">
    <div className="text-center mb-10">
     <h2 className="text-[2.5rem] font-bold text-[#111A22] mb-4">
      Send us a message
     </h2>
     <p className="text-gray-500 font-light">
      Fill out the form below and we'll get back to you within 24 hours.
     </p>
    </div>

    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
       <label
        htmlFor="name"
        className="text-sm font-semibold text-gray-900 ml-1">
        Full Name
       </label>
       <input
        type="text"
        id="name"
        placeholder="John Doe"
        className="w-full px-5 py-4 bg-[#f9fafb] rounded-2xl border border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-light"
       />
      </div>
      <div className="flex flex-col gap-2">
       <label
        htmlFor="email"
        className="text-sm font-semibold text-gray-900 ml-1">
        Email Address
       </label>
       <input
        type="email"
        id="email"
        placeholder="john@example.com"
        className="w-full px-5 py-4 bg-[#f9fafb] rounded-2xl border border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-light"
       />
      </div>
     </div>

     <div className="flex flex-col gap-2">
      <label
       htmlFor="message"
       className="text-sm font-semibold text-gray-900 ml-1">
       Your Message
      </label>
      <textarea
       id="message"
       rows={6}
       placeholder="How can we help you?"
       className="w-full px-5 py-4 bg-[#f9fafb] rounded-2xl border border-gray-200 focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-light resize-none"></textarea>
     </div>

     <button
      type="submit"
      className="w-full md:w-auto md:self-center mt-4 bg-[#111A22] border-2 border-[#111A22] text-white px-12 py-4 rounded-full text-[1rem] font-medium hover:bg-transparent hover:text-[#111A22] transition-colors shadow-lg hover:shadow-none duration-300">
      Submit Message
     </button>
    </form>
   </section>

   {/* Map Section */}
   <section className="w-full h-[400px] md:h-[500px] relative">
    <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.3658808343766!2d55.3912938!3d25.299656799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f9d3c00fedcd%3A0x931acd76e12b8fe7!2sLEVANTIA%20ADVERTISING!5e1!3m2!1sen!2sae!4v1772643007741!5m2!1sen!2sae"
     width="100%"
     height="100%"
     style={{ border: 0 }}
     allowFullScreen={true}
     loading="lazy"
     title="Office Location"
     referrerPolicy="no-referrer-when-downgrade"
     className="absolute inset-0"></iframe>
   </section>
  </main>
 );
};

export default Contact;
