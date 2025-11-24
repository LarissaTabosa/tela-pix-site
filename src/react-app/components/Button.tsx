import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "w-full py-4 px-6 rounded-full font-semibold text-base transition-all duration-200 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg";
  
  const variantStyles = {
    primary: "bg-[#FE2C55] text-white hover:bg-[#E6194B] shadow-pink-200",
    secondary: "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#FE2C55] hover:bg-pink-50 shadow-gray-100",
    success: "bg-[#00D68F] text-white shadow-green-200",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
