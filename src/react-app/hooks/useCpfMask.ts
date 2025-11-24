import { ChangeEvent } from "react";

export function useCpfMask(
  cpf: string,
  setCpf: (value: string) => void
) {
  const formatCpf = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
  };

  const handleCpfChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numbers = value.replace(/\D/g, "");
    setCpf(numbers);
  };

  return {
    maskedValue: formatCpf(cpf),
    handleCpfChange,
  };
}
