import Button from "./Button";

const CtaSection = () => {
 return (
  <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center overflow-hidden mt-10 md:mt-0">
   {/* Background Image (Placeholder) */}
   <img
    src="/home/contact.png"
    alt="Interior Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
   />

   {/* Dark overlay to make text readable */}
   <div className="absolute inset-0 bg-black/40 z-0"></div>

   {/* Content Container */}
   <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-10 lg:px-20 max-w-[1536px] mx-auto w-full">
    <h2 className="text-white text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium leading-[1.15] mb-8 md:mb-10 lg:mb-12 font-sans max-w-4xl tracking-tight">
     3M Approved Converter
     <br />& Architectural Products
    </h2>
    <p className="text-gray-400 text-sm md:text-base lg:text-[1.05rem] leading-relaxed max-w-2xl font-light mb-8 md:mb-10 lg:mb-12">
     We specialize in the application of 3M Architectural Finishes, Window
     Films, and Graphics to transform surfaces with minimal downtime.
    </p>

    <Button
     className="text-[16px]"
     href="/3m-catalogue"
     bgColor="bg-white"
     textColor="text-black">
     View 3M Catalog
    </Button>
   </div>
  </section>
 );
};

export default CtaSection;
