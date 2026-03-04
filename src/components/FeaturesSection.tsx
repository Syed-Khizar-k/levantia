const features = [
 {
  title: "Listen",
  description:
   "Explore cutting-edge architectural designs that seamlessly blend functionality with aesthetics, tailored to your needs",
  icon: (
   <img
    src="/home/icons/listen.svg"
    alt="Listen"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
 {
  title: "Strategies",
  description:
   "Easily and securely spend, send, and manage your transactions-all in one place. Download the app on your",
  icon: (
   <img
    src="/home/icons/strategy.svg"
    alt="Strategies"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
 {
  title: "Project Work",
  description:
   "Where our team of professionals harnesses advanced technology to streamline real estate transactions",
  icon: (
   <img
    src="/home/icons/project.svg"
    alt="Project Work"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
 {
  title: "Launch",
  description:
   "Discover cutting-edge architectural designs that blend functionality with aesthetics, tailored to your vision and needs.",
  icon: (
   <img
    src="/home/icons/launch.svg"
    alt="Launch"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
 {
  title: "Technology",
  description:
   "Achieve outstanding results quickly with our high-efficiency approach, optimizing every step for peak.",
  icon: (
   <img
    src="/home/icons/tech.svg"
    alt="Technology"
    className="h-[48px] md:h-[60px] w-auto"
   />
  ),
 },
 {
  title: "High Efficiency",
  description:
   "Maximize productivity with our high-efficiency solutions, delivering exceptional results in less time",
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
      standout features are
     </h2>
     <p className="text-gray-400 text-sm md:text-base lg:text-[1.05rem] leading-relaxed max-w-2xl font-light">
      Our key points and features include innovative designs, expert project
      <br className="hidden md:block" />
      management, and sustainable practices tailored to your unique needs and
      vision.
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
