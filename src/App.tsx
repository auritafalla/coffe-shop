import { useState } from "react";
import { useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { clearCart } from "./features/cartSlice";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AppRoutes from "./routes";
import CartModal from "./components/CartModal";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* Botón flotante del carrito */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 z-50"
      >
        <ShoppingCart size={24} />
      </button>

      {/* Modal del carrito */}
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onClearCart={() => dispatch(clearCart())}
      />

      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
