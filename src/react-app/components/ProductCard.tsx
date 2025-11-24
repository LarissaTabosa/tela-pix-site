interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity?: number;
}

export default function ProductCard({ name, price, originalPrice, image, quantity = 1 }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex gap-4">
        <img 
          src={image} 
          alt={name}
          className="w-20 h-20 object-cover rounded-xl bg-gray-100"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1">
            {name}
          </h3>
          <p className="text-xs text-gray-500 mb-1">Quantidade: {quantity}</p>
          <div className="flex items-center gap-2">
            {originalPrice && (
              <p className="text-sm text-gray-400 line-through">
                R$ {originalPrice.toFixed(2).replace('.', ',')}
              </p>
            )}
            <p className="text-lg font-bold text-[#FE2C55]">
              R$ {price.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
