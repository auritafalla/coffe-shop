import { Coffee } from "../data/coffee";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice"; // Acción para agregar al carrito

interface CoffeeCardProps {
  coffee: Coffee;
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(coffee)); // Disparar la acción para agregar al carrito
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={coffee.image} alt={coffee.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{coffee.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{coffee.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-md font-semibold">Rs. {coffee.price}</span>
          <button
            onClick={handleAddToCart} // Llamada a la nueva función que usa Redux
            className="bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-800"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
