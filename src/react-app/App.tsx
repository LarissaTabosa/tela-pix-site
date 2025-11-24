import { BrowserRouter as Router, Routes, Route } from "react-router";
import PaymentMethodPage from "@/react-app/pages/PaymentMethod";
import BuyerDataPage from "@/react-app/pages/BuyerData";
import PixPaymentPage from "@/react-app/pages/PixPayment";
import SuccessPage from "@/react-app/pages/Success";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentMethodPage />} />
        <Route path="/dados" element={<BuyerDataPage />} />
        <Route path="/pagamento" element={<PixPaymentPage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}
