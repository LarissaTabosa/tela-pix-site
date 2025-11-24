import { useNavigate } from "react-router";
import { QrCode, ShoppingBag } from "lucide-react";
import PageContainer from "@/react-app/components/PageContainer";
import Button from "@/react-app/components/Button";
import ProductCard from "@/react-app/components/ProductCard";
import PriceBreakdown from "@/react-app/components/PriceBreakdown";

export default function PaymentMethod() {
  const navigate = useNavigate();

  // Mock product data - in real app this would come from cart/checkout state
  const product = {
    name: "LEGO Stranger Things - The Upside Down",
    price: 278.50,
    originalPrice: 430.00,
    image: "https://mocha-cdn.com/019ab37f-eeb9-77a4-bc36-968563d8694c/91zrMBgFY7L._AC_SX679_.jpg",
    quantity: 1
  };

  return (
    <PageContainer>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#FE2C55]" />
            <h1 className="text-lg font-bold text-gray-900">Finalizar Compra</h1>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 py-6 pb-32">
          <div className="w-full max-w-md mx-auto space-y-4">
            {/* Product Info */}
            <ProductCard {...product} />

            {/* Price Breakdown */}
            <PriceBreakdown 
              subtotal={product.price}
              shipping={0}
              total={product.price}
            />

            {/* PIX Discount Badge */}
            <div className="bg-[#FE2C55] rounded-xl p-4 text-center">
              <p className="text-white font-bold text-lg">
                35% OFF pagando no PIX
              </p>
              <p className="text-pink-100 text-sm mt-1">
                De R$ 430,00 por R$ 278,50
              </p>
            </div>

            {/* Payment Method Section */}
            <div className="pt-2">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Método de Pagamento
              </h2>
              <Button
                onClick={() => navigate("/dados")}
                icon={<QrCode className="w-6 h-6" />}
                variant="primary"
              >
                Pagar com PIX
              </Button>
              <p className="text-center text-xs text-gray-500 mt-3">
                Aprovação instantânea • Seguro e rápido
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
