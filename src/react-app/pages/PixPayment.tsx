import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Copy, CheckCircle2, ArrowLeft, ShoppingBag } from "lucide-react";
import PageContainer from "@/react-app/components/PageContainer";
import Button from "@/react-app/components/Button";
import QRCodeDisplay from "@/react-app/components/QRCodeDisplay";
import CountdownTimer from "@/react-app/components/CountdownTimer";
import ProductCard from "@/react-app/components/ProductCard";

export default function PixPayment() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  
  const product = {
    name: "LEGO Stranger Things - The Upside Down",
    price: 278.50,
    originalPrice: 430.00,
    image: "https://mocha-cdn.com/019ab37f-eeb9-77a4-bc36-968563d8694c/91zrMBgFY7L._AC_SX679_.jpg",
    quantity: 1
  };

  const pixCode = "00020126580014br.gov.bcb.pix01362d61f272-98af-4d30-bc76-d5971efe34d55204000053039865406278.505802BR5915raquel cristina6005Betim62070503***630476BC";

  useEffect(() => {
    // Simulate payment approval after 5 minutes
    const timer = setTimeout(() => {
      navigate("/sucesso");
    }, 300000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <PageContainer>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/dados")}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#FE2C55]" />
              <h1 className="text-lg font-bold text-gray-900">Pagamento PIX</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 py-6 pb-32">
          <div className="w-full max-w-md mx-auto space-y-4">
            {/* Product Summary */}
            <ProductCard {...product} />

            {/* Timer Card */}
            <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
              <p className="text-xs text-gray-600 text-center mb-2">Tempo restante</p>
              <CountdownTimer initialMinutes={15} />
            </div>

            {/* QR Code Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <p className="text-center text-sm font-medium text-gray-700 mb-4">
                Escaneie o QR Code
              </p>
              <QRCodeDisplay imageUrl="https://mocha-cdn.com/019ab37f-eeb9-77a4-bc36-968563d8694c/IMG_0238.jpg" />
            </div>

            {/* PIX Code Section */}
            <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Ou copie o código PIX
              </p>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-3">
                <p className="text-xs text-gray-600 break-all font-mono leading-relaxed">
                  {pixCode}
                </p>
              </div>
              <Button
                onClick={handleCopy}
                variant={copied ? "success" : "secondary"}
                icon={copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              >
                {copied ? "Código Copiado!" : "Copiar Código PIX"}
              </Button>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                Seu pedido será confirmado automaticamente assim que o pagamento for identificado.
              </p>
              <p className="text-xs text-[#FE2C55] font-medium mt-2 text-center">
                O pagamento é aprovado instantaneamente!
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
