import React from "react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
 bgColor?: string;
 textColor?: string;
 className?: string;
 children: React.ReactNode;
}

const Button = ({
 bgColor = "bg-[#FDBA21]",
 textColor = "text-gray-900",
 className = "",
 children,
 ...props
}: ButtonProps) => {
 return (
  <a
   className={`cursor-pointer  text-center font-medium px-8 py-3 rounded-full transition-all hover:opacity-90 ${bgColor} ${textColor} ${className}`}
   {...props}>
   {children}
  </a>
 );
};

export default Button;
