import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Asegúrate que esté correcto según la ubicación del store
import { removeFromCart, clearCart } from "../features/cartSlice";
import { X } from "lucide-react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClearCart: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart); // Accede al estado del carrito

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-end z-50">
      <div className="bg-white w-full max-w-md p-6 shadow-lg overflow-y-auto relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Rs. {item.price}</p>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="pt-4 border-t font-semibold text-right">
              Total: Rs. {total}
            </div>

            {/* Vaciar carrito */}
            <div className="mt-4 text-center">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
