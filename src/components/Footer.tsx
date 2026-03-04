const Footer = () => {
 return (
  <footer className="bg-[#111A22] w-full pt-20 pb-10">
   <div className="px-4 md:px-10 lg:px-20 mx-auto max-w-[1536px]">
    {/* Top Section */}
    <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16 md:mb-24">
     {/* Logo & Description */}
     <div className="flex flex-col gap-6 lg:w-[35%] xl:w-[30%]">
      <div className="flex items-center gap-2">
       <span className="text-white text-2xl font-semibold tracking-tight">
        Levantia Advertising LLC
       </span>
      </div>
      <p className="text-gray-400 text-sm md:text-[0.95rem] leading-[1.7] font-light max-w-sm">
       Our team consists of seasoned professionals who understand the market
       intricately, ensuring you receive accurate insights and advice tailored
       to your needs.
      </p>
     </div>

     {/* Links Grid & Newsletter */}
     <div className="flex flex-col md:flex-row justify-between gap-12 lg:w-[60%] xl:w-[50%]">
      {/* Company Links */}
      <div className="flex flex-col gap-6">
       <h4 className="text-white font-semibold text-[0.95rem] tracking-wider mb-2">
        COMPANY
       </h4>
       <ul className="flex flex-col gap-4">
        <li>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-[0.95rem] font-light">
          About
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-[0.95rem] font-light">
          Properties
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-[0.95rem] font-light">
          Our Agents
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-[0.95rem] font-light">
          Services
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-[0.95rem] font-light">
          Blogs
         </a>
        </li>
       </ul>
      </div>

      {/* Help Links */}
      <div className="flex flex-col gap-6">
       <h4 className="text-white font-semibold text-[0.95rem] tracking-wider mb-2">
        HELP
       </h4>
       <ul className="flex flex-col gap-4">
        <li>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-[0.95rem] font-light">
          Contact us
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-[0.95rem] font-light">
          Conditions
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-[0.95rem] font-light">
          Privacy
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-[0.95rem] font-light">
          Policy
         </a>
        </li>
        <li>
         <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-[0.95rem] font-light">
          Rules
         </a>
        </li>
       </ul>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col gap-6 w-full md:w-[280px]">
       <h4 className="text-white font-semibold text-[0.95rem] tracking-wider mb-2">
        CONTACT
       </h4>
       <div className="flex flex-col gap-4 w-full">
        <input
         type="email"
         placeholder="Enter mail"
         className="w-full bg-[#1C252E] text-white placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-gray-500 transition-all font-light text-[0.95rem]"
        />
        <button className="w-full bg-white text-gray-900 font-medium rounded-lg px-4 py-3 hover:bg-gray-100 transition-colors text-[0.95rem]">
         Newsletter
        </button>
       </div>
      </div>
     </div>
    </div>

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
     <p className="text-gray-400 text-sm font-light">
      &copy; Copyright 2026, All Rights Reserved by Levantia Advertising LLC
     </p>

     {/* Social Icons */}
     <div className="flex items-center gap-4">
      <a
       href="#"
       className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
       <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-gray-900">
        <path d="M24 12.073C24 5.405 18.627 0 12 0C5.373 0 0 5.405 0 12.073C0 18.106 4.414 23.097 10.125 24V15.565H7.078V12.073H10.125V9.414C10.125 6.42 11.905 4.779 14.61 4.779C15.918 4.779 17.288 5.013 17.288 5.013V7.957H15.78C14.293 7.957 13.832 8.881 13.832 9.832V12.073H17.147L16.617 15.565H13.832V24C19.586 23.097 24 18.106 24 12.073Z" />
       </svg>
      </a>
      <a
       href="#"
       className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors text-gray-400">
       <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
       </svg>
      </a>
      <a
       href="#"
       className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors text-gray-400">
       <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
       </svg>
      </a>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
