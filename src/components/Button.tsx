import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
 bgColor?: string;
 textColor?: string;
 className?: string;
 children: React.ReactNode;
 href?: any;
}

const Button = ({
 bgColor = "bg-[#FDBA21]",
 textColor = "text-gray-900",
 className = "",
 href,
 children,
 ...props
}: ButtonProps) => {
 return (
  <Link
   to={href}
   className={`cursor-pointer  text-center font-medium px-8 py-3 rounded-full transition-all hover:opacity-90 ${bgColor} ${textColor} ${className}`}
   {...props}>
   {children}
  </Link>
 );
};

export default Button;
