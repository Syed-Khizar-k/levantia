import CtaSection from "../components/CtaSection";

const Catalogue = () => {
 return (
  <main className="w-full bg-[#f9fafb] flex flex-col pt-24">
   {/* Animated Hero Area */}
   <section className="relative px-4 md:px-10 lg:px-20 w-full mx-auto max-w-[1536px] mt-8 mb-16 md:mb-24">
    {/* Decorative blur elements */}
    <div className="absolute top-0 left-1/4 w-1/2 h-32 bg-blue-500/10 blur-[100px] -z-10 rounded-full"></div>
    <div className="absolute top-20 right-1/4 w-1/3 h-32 bg-purple-500/10 blur-[100px] -z-10 rounded-full"></div>

    <div className="flex flex-col items-center text-center animate-[fade-in-up_0.8s_ease-out_forwards]">
     <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100/50 shadow-sm">
      Official Collection
     </span>
     <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-extrabold text-[#111A22] leading-[1.05] tracking-tight mb-6">
      The 3M Catalogue
     </h1>
     <p className="text-gray-500 font-light text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
      Explore our comprehensive range of 3M Architectural and Wrap Films.
      Discover the perfect premium finish for your next visionary project.
     </p>
    </div>

    {/* Quick Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-[fade-in-up_1s_ease-out_0.2s_forwards] opacity-0">
     <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-5">
       <img
        src="/home/icons/project.svg"
        alt="project"
        className="h-full w-full"
       />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
       Architectural Films
      </h3>
      <p className="text-gray-500 font-light text-sm leading-relaxed">
       Transform interior spaces with breathtaking, authentic textures and
       finishes.
      </p>
     </div>
     <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-start">
      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-5">
       <img
        src="/home/icons/tech.svg"
        alt="project"
        className="h-full w-full"
       />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">DI-NOC & FASARA</h3>
      <p className="text-gray-500 font-light text-sm leading-relaxed">
       Industry-leading glass finishes and architectural wraps for ultimate
       durability.
      </p>
     </div>
     <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-start">
      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-5">
       <img
        src="/home/icons/effeciency.svg"
        alt="project"
        className="h-full w-full"
       />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Effective</h3>
      <p className="text-gray-500 font-light text-sm leading-relaxed">
       Achieve the look of premium natural materials at a fraction of the cost.
      </p>
     </div>
    </div>
   </section>

   {/* PDF Embed Section */}
   <section className="px-4 md:px-10 lg:px-20 w-full mx-auto max-w-[1536px] mb-20">
    <div className="w-full h-[100vh] md:h-[100vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex items-center justify-center">
     <iframe
      src="/3m-catalogue.pdf"
      className="w-full h-screen border-0"
      title="3M Catalogue PDF Viewer">
      <p className="p-8 text-center text-gray-500">
       Your browser does not support embedded PDFs.
       <a href="/3m-catalogue.pdf" className="text-blue-500 underline ml-2">
        Download Instead Location
       </a>
      </p>
     </iframe>
    </div>
   </section>

   {/* CTA Section */}
   <CtaSection />
  </main>
 );
};

export default Catalogue;
