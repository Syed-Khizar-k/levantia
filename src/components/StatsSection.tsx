import { useState, useEffect, useRef } from "react";

// Custom Animated Counter Hook/Component
const AnimatedCounter = ({
 end,
 duration = 2000,
}: {
 end: number;
 duration?: number;
}) => {
 const [count, setCount] = useState(0);
 const countRef = useRef<HTMLSpanElement>(null);
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    if (entries[0].isIntersecting) {
     setIsVisible(true);
    }
   },
   { threshold: 0.1 }, // Start when 10% visible
  );

  if (countRef.current) {
   observer.observe(countRef.current);
  }

  return () => observer.disconnect();
 }, []);

 useEffect(() => {
  if (!isVisible) return;

  let startTime: number | null = null;
  const animate = (time: number) => {
   if (!startTime) startTime = time;
   const progress = time - startTime;

   // Easing function for smooth deceleration (ease-out-expo)
   const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
   };

   const percentage = Math.min(progress / duration, 1);
   const easedProgress = easeOutExpo(percentage);

   const currentCount = Math.floor(easedProgress * end);
   setCount(currentCount);

   if (percentage < 1) {
    requestAnimationFrame(animate);
   } else {
    setCount(end);
   }
  };

  requestAnimationFrame(animate);
 }, [isVisible, end, duration]);

 // Format with leading zero if less than 10 to match original design (e.g. 06+)
 const formattedCount = count < 10 ? `0${count}` : count;

 return <span ref={countRef}>{formattedCount}</span>;
};

const StatsSection = () => {
 return (
  <section className="px-4 md:px-10 lg:px-20 py-16 md:py-24 w-full mx-auto max-w-[1536px]">
   {/* Top Header Section */}
   <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-6 mb-16">
    <h2 className="text-[24px] md:text-[42px] font-[600] leading-tight text-gray-900 lg:w-[40%]">
     Find Perfection
     <br />
     with Levantia Advertising
    </h2>

    <div className="flex flex-col md:flex-row gap-6 md:gap-12 lg:w-[55%]">
     <p className="text-gray-600 leading-relaxed md:w-1/2">
      We transform your ideas into stunning works of art, blending creativity
      with precision to bring your vision to life. Trust us to craft exceptional
      visual experiences
     </p>
     <p className="text-gray-600 leading-relaxed md:w-1/2">
      We transform your creative ideas into stunning works of art. With a blend
      of innovation and craftsmanship, we bring your vision to life, ensuring
      every detail is meticulously crafted to perfection. Whether it's a simple
      concept or a complex design, our passion for excellence turns your
      imagination into a masterpiece. Let's create something extraordinary
      together
     </p>
    </div>
   </div>

   {/* Content Section (Cards & Images) */}
   <div className="flex flex-col lg:flex-row gap-6 -mt-[100px] md:-mt-[130px] xxl:-mt-[100px]">
    {/* Left Stats Grid - Simulated with Flexbox */}
    <div className="flex flex-col gap-6 lg:w-[40%]">
     <div className="flex flex-col sm:flex-row gap-6 h-full">
      {/* Card 1 */}
      <div className="flex-1 bg-[#EEEEEF] rounded-[1.5rem] p-8 flex flex-col justify-between aspect-square sm:aspect-auto shadow-sm">
       <h3 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-gray-900 mt-2 mb-10 flex items-center">
        <AnimatedCounter end={12} duration={2000} />+
       </h3>
       <p className="text-gray-600 text-sm md:text-base">Running Project</p>
      </div>

      {/* Card 2 */}
      <div className="flex-1 bg-[#0C1922] rounded-[1.5rem] p-8 flex flex-col justify-between aspect-square sm:aspect-auto shadow-xl">
       <h3 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-white mt-2 mb-10 flex items-center">
        <AnimatedCounter end={55} duration={2500} />+
       </h3>
       <p className="text-gray-300 text-sm md:text-base">Complete project</p>
      </div>
     </div>

     <div className="flex flex-col sm:flex-row gap-6 h-full">
      {/* Card 3 */}
      <div className="flex-1 bg-[#EEEEEF] rounded-[1.5rem] p-8 flex flex-col justify-between aspect-square sm:aspect-auto shadow-sm">
       <h3 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-gray-900 mt-2 mb-10 flex items-center">
        <AnimatedCounter end={6} duration={1800} />+
       </h3>
       <p className="text-gray-600 text-sm md:text-base">world wide work</p>
      </div>

      {/* Card 4 */}
      <div className="flex-1 bg-[#EEEEEF] rounded-[1.5rem] p-8 flex flex-col justify-between aspect-square sm:aspect-auto shadow-sm">
       <h3 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-gray-900 mt-2 mb-10 flex items-center">
        <AnimatedCounter end={82} duration={3000} />+
       </h3>
       <p className="text-gray-600 text-sm md:text-base">Active Members</p>
      </div>
     </div>
    </div>

    {/* Right Images Container - Flexbox layout */}
    <div className="flex flex-col sm:flex-row gap-6 lg:w-[60%]">
     {/* Main Large Image */}
     <div className="w-full sm:w-[55%] h-[400px] sm:h-auto min-h-[500px] rounded-[1.5rem] overflow-hidden ">
      <div className="w-full h-full flex items-center justify-center ">
       <img src="/home/tall.png" alt="tall" className="h-[500px]" />
      </div>
     </div>

     {/* Right Image */}
     <div className="w-full sm:w-[45%]  h-full   rounded-[1.5rem] overflow-hidden ">
      <div className="w-full h-full flex items-end justify-start ">
       <img src="/home/broad.png" alt="broad image" className="h-[400px]" />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default StatsSection;
