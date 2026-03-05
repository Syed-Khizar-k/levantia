const features = [
 {
  title: "Expert Design",
  description:
   "Bespoke creative solutions tailored to your brand identity and architectural requirements.",
  icon: (
   <img
    src="/home/icons/listen.svg"
    alt="Listen"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
 {
  title: "Turnkey Solutions",
  description:
   " We manage everything from site surveys and production to final installation and maintenance.",
  icon: (
   <img
    src="/home/icons/strategy.svg"
    alt="Strategies"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
 {
  title: "Project Analysis",
  description:
   " Detailed planning and material selection to ensure longevity and aesthetic impact.",
  icon: (
   <img
    src="/home/icons/project.svg"
    alt="Project Work"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
 {
  title: "Advanced Tech",
  description:
   "Utilizing industry-leading large-format printers and precision cutting tools.",
  icon: (
   <img
    src="/home/icons/launch.svg"
    alt="Launch"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
 {
  title: "High Reliability",
  description:
   "Trusted by developers and interior designers across the Middle East for over a decade.",
  icon: (
   <img
    src="/home/icons/tech.svg"
    alt="Technology"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
 {
  title: "3M Certified",
  description:
   " As an approved converter, we guarantee the highest standards of material application and warranty.",
  icon: (
   <img
    src="/home/icons/effeciency.svg"
    alt="High Efficiency"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
];

const FeaturesSection = () => {
 return (
  <section className="bg-[#111A22] w-full py-20 lg:py-32">
   <div className="px-4 md:px-10 lg:px-20 mx-auto max-w-[1536px]">
    {/* Header Text */}
    <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
     <h2 className="text-white text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-medium leading-[1.15] max-w-2xl font-sans">
      Our main points and
      <br />
      standout features
     </h2>
     <p className="text-gray-400 text-sm md:text-base lg:text-[1.05rem] leading-relaxed max-w-2xl font-light">
      From certified 3M material conversion to bespoke signage engineering,
      <br className="hidden md:block" />
      we combine advanced manufacturing technology with expert craftsmanship to
      bring architectural visions to life.
     </p>
    </div>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {features.map((feature, index) => (
      <div
       key={index}
       className="bg-white rounded-4xl p-8 md:p-10 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
       <div className="text-gray-800 mb-8">{feature.icon}</div>
       <h3 className="text-gray-900 text-xl md:text-[1.4rem] font-bold mb-4">
        {feature.title}
       </h3>
       <p className="text-gray-600 leading-[1.6] text-sm md:text-[0.95rem] font-light">
        {feature.description}
       </p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default FeaturesSection;
