import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
 return (
  <header className="bg-[#eceeed]">
   <div className="px-4 md:px-10 lg:px-20 py-6 w-full mx-auto max-w-[1536px]">
    <div className="flex items-center justify-between">
     {/* Logo */}
     <Link to="/" className="flex items-center gap-2 cursor-pointer">
      <span className="text-[18px] md:text-[24px] font-[700] text-gray-900 tracking-tight">
       Levantia Advertising LLC
      </span>
     </Link>

     {/* Desktop Nav */}
     <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
      <Link to="/" className="hover:text-black transition-colors">
       Home
      </Link>
      <Link to="/about" className="hover:text-black transition-colors">
       About us
      </Link>
      <div className="relative group py-2">
       <Link to="#" className="hover:text-black transition-colors">
        Our Service
       </Link>
       {/* Dropdown */}
       <div className="absolute top-full left-0 w-[300px] bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col pt-2">
        <div className="bg-white border text-[15px] border-gray-100 shadow-sm flex flex-col">
         <Link
          to="#"
          className="px-5 py-4 text-gray-900 border-b border-gray-200 hover:bg-gray-50 transition-colors last:border-b-0">
          3M Film Wrapping (DI-NOC & FASARA)
         </Link>
         <Link
          to="#"
          className="px-5 py-4 text-gray-900 border-b border-gray-200 hover:bg-gray-50 transition-colors last:border-b-0">
          Outdoor & Indoor Signage Production
         </Link>
         <Link
          to="#"
          className="px-5 py-4 text-gray-900 border-b border-gray-200 hover:bg-gray-50 transition-colors last:border-b-0">
          Acrylic & Wood Works
         </Link>
         <Link
          to="#"
          className="px-5 py-4 text-gray-900 border-b border-gray-200 hover:bg-gray-50 transition-colors last:border-b-0">
          Company Profile
         </Link>
         <Link
          to="#"
          className="px-5 py-4 text-gray-900 border-b border-gray-200 hover:bg-gray-50 transition-colors last:border-b-0">
          Printing Services
         </Link>
         <Link
          to="#"
          className="px-5 py-4 text-gray-900 border-b border-gray-200 hover:bg-gray-50 transition-colors last:border-b-0">
          2023 Gift Items Catalogue
         </Link>
         <Link
          to="#"
          className="px-5 py-4 text-gray-900 border-b border-gray-200 hover:bg-gray-50 transition-colors last:border-b-0">
          View Products
         </Link>
        </div>
       </div>
      </div>
      <Link to="/3m-catalogue" className="hover:text-black transition-colors">
       3M Catalogue
      </Link>
      <Link to="/contact" className="hover:text-black transition-colors">
       Contact
      </Link>
     </nav>

     {/* CTA Button */}
     <div>
      <Button href="#" className="hidden md:block">
       Contact Us
      </Button>

      {/* Mobile Menu Icon */}
      <button className="md:hidden p-2 text-gray-700">
       <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
       </svg>
      </button>
     </div>
    </div>
   </div>
  </header>
 );
};

export default Header;
