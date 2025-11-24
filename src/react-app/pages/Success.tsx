import { CheckCircle2, ShoppingBag } from "lucide-react";
import PageContainer from "@/react-app/components/PageContainer";
import Button from "@/react-app/components/Button";
import { useNavigate } from "react-router";

export default function Success() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#FE2C55]" />
            <h1 className="text-lg font-bold text-gray-900">Pedido Confirmado</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md text-center">
            <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#00D68F] shadow-lg">
              <CheckCircle2 className="w-14 h-14 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Pagamento Confirmado!
            </h2>
            
            <p className="text-base text-gray-600 mb-2">
              Seu pagamento foi processado com sucesso.
            </p>
            
            <p className="text-sm text-gray-500 mb-8">
              Você receberá a confirmação por email em breve.
            </p>

            <div className="bg-pink-50 rounded-2xl p-6 mb-6 border border-pink-100">
              <div className="text-sm text-gray-600 mb-1">Valor pago</div>
              <div className="text-3xl font-bold text-[#FE2C55]">R$ 278,50</div>
              <div className="text-sm text-gray-500 mt-2">
                <span className="line-through">R$ 430,00</span>
                <span className="text-[#00D68F] font-semibold ml-2">35% OFF com PIX</span>
              </div>
            </div>

            <Button
              onClick={() => navigate("/")}
              variant="primary"
            >
              Fazer Nova Compra
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
