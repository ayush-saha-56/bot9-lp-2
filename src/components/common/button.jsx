import React from "react";

const Button = ({ children, variant, size = "default", className = "" }) => {
  const baseClasses = "font-medium rounded-md sm:rounded-[0.416vw] transition-colors duration-200";
  const variantClasses = {
    text: "text-[#667185] hover:text-[#5755FF]",
    outline: "border border-[#D0D5DD] text-[#101928] hover:bg-gray-50",
    primary: "bg-[#5755FF] text-white hover:bg-[#4644CC]",
  };
  const sizeClasses = {
    default: "text-base px-4 py-2 sm:px-[1.11vw] sm:py-[0.55vw]",
    large: "text-lg px-6 py-3 sm:px-[1.66vw] sm:py-[0.83vw]",
    custom: "", // No default sizing for custom size
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;