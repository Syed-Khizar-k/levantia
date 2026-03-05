import Button from "./Button";

const Hero = () => {
 return (
  <section className="w-full bg-[#ECEEED] ">
   <div className="px-4 md:px-10 lg:px-20 pb-12 pt-8 w-full mx-auto max-w-[1536px] ">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
     {/* Left Content */}
     <div className="flex flex-col justify-center max-w-xl">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl font-bold leading-[1.05] tracking-tight text-gray-900 mb-8">
       ADVERTISING
       <br />& PRODUCTION
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
       Established in UAE since 2015. We specialize in 3M Film Wrapping, Outdoor
       & Indoor Signage Production, Gift Items trading, and Graphic Designing.
       Our team creates amazing designs for your products that are visually
       beautiful and guaranteed to ascend sales.
      </p>
      <Button
       href="/about-us"
       className=" w-fit "
       bgColor="bg-[#141414]"
       textColor="text-[#FFFFFF]">
       Explore Our Services
      </Button>
     </div>

     {/* Right Image Placeholder */}
     <div className="w-full relative h-full px-4 rounded-[12px]">
      <img
       src="/bulb-cretive.jpg"
       alt="bulb"
       className="h-full w-full object-cover rounded-[12px]"
      />
     </div>
    </div>
   </div>
  </section>
 );
};

export default Hero;
