import { useKeenSlider } from "keen-slider/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice"; // Acción de Redux para agregar al carrito
import { coffees, Coffee } from "../data/coffee"; // Asegúrate de que el tipo Coffee esté importado correctamente
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CoffeeSlider() {
  const dispatch = useDispatch(); // Usamos useDispatch para acceder al dispatch de Redux
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 28 },
      },
    },
  });

  const handleAddToCart = (coffee: Coffee) => {
    dispatch(addToCart(coffee)); // Disparamos la acción para agregar el café al carrito
  };

  return (
    <section className="bg-[#f9f6f2] py-10 px-4 relative">
      <h2 className="text-center text-2xl font-semibold mb-8">Our Special Coffee</h2>

      {/* FLECHAS */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <ArrowLeft size={20} />
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <ArrowRight size={20} />
      </button>

      {/* SLIDER */}
      <div ref={sliderRef} className="keen-slider max-w-7xl mx-auto">
        {coffees.map((coffee) => (
          <div key={coffee.id} className="keen-slider__slide bg-white rounded-lg shadow-md overflow-hidden">
            <img src={coffee.image} alt={coffee.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{coffee.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{coffee.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-md font-semibold">Rs. {coffee.price}</span>
                <button
                  onClick={() => handleAddToCart(coffee)} // Usamos la nueva función que usa Redux
                  className="bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-800"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
