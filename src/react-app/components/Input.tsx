import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        className={`w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#FE2C55] focus:ring-4 focus:ring-pink-100 outline-none transition-all text-gray-900 placeholder-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
}
