interface PriceBreakdownProps {
  subtotal: number;
  shipping?: number;
  total: number;
}

export default function PriceBreakdown({ subtotal, shipping = 0, total }: PriceBreakdownProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Subtotal</span>
        <span className="text-gray-900">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
      </div>
      {shipping > 0 && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Frete</span>
          <span className="text-gray-900">R$ {shipping.toFixed(2).replace('.', ',')}</span>
        </div>
      )}
      {shipping === 0 && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Frete</span>
          <span className="text-[#00D68F] font-medium">Grátis</span>
        </div>
      )}
      <div className="pt-2 border-t border-gray-200">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-900">Total</span>
          <span className="font-bold text-xl text-[#FE2C55]">R$ {total.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
    </div>
  );
}
