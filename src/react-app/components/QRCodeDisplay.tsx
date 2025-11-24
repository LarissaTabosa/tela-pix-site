interface QRCodeDisplayProps {
  imageUrl: string;
}

export default function QRCodeDisplay({ imageUrl }: QRCodeDisplayProps) {
  return (
    <div className="flex justify-center">
      <div className="bg-white p-4 rounded-2xl shadow-inner border-4 border-gray-100">
        <img 
          src={imageUrl} 
          alt="QR Code PIX"
          className="w-[280px] h-[280px] object-contain"
        />
      </div>
    </div>
  );
}
