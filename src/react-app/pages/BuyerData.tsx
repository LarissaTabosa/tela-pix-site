import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import PageContainer from "@/react-app/components/PageContainer";
import Button from "@/react-app/components/Button";
import Input from "@/react-app/components/Input";
import ProductCard from "@/react-app/components/ProductCard";
import { useCpfMask } from "@/react-app/hooks/useCpfMask";

export default function BuyerData() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const { maskedValue, handleCpfChange } = useCpfMask(cpf, setCpf);

  const product = {
    name: "LEGO Stranger Things - The Upside Down",
    price: 278.50,
    originalPrice: 430.00,
    image: "https://mocha-cdn.com/019ab37f-eeb9-77a4-bc36-968563d8694c/91zrMBgFY7L._AC_SX679_.jpg",
    quantity: 1
  };

  const isValid = cpf.replace(/\D/g, "").length === 11 && email.includes("@");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      navigate("/pagamento", { state: { cpf, email } });
    }
  };

  return (
    <PageContainer>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#FE2C55]" />
              <h1 className="text-lg font-bold text-gray-900">Dados do Comprador</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 py-6 pb-32">
          <div className="w-full max-w-md mx-auto space-y-4">
            {/* Product Summary */}
            <ProductCard {...product} />

            {/* Form Section */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-base font-bold text-gray-900 mb-4">
                Informações de Pagamento
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="CPF"
                  type="text"
                  placeholder="000.000.000-00"
                  value={maskedValue}
                  onChange={handleCpfChange}
                  maxLength={14}
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </form>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-4 shadow-lg">
          <div className="w-full max-w-md mx-auto">
            <Button 
              onClick={handleSubmit}
              variant="primary" 
              disabled={!isValid}
            >
              Continuar para Pagamento
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
