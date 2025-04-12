import CoffeeSlider from "../components/CoffeeSlider";
import PromoBanner from "../components/PromoBanner";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-screen w-full">
        <img
          src="../images/coffee.jpg"
          alt="Coffee background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 h-full flex items-center px-8 text-white">
          <div>
            <p className="text-lg mb-2">Welcome!</p>
            <h1 className="text-5xl font-bold max-w-lg leading-tight">
              We serve the richest coffee <br /> in the city!
            </h1>
            <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Carrusel de café */}
      <CoffeeSlider />

      {/* Banner promo */}
      <PromoBanner />

      {/* Testimonios */}
      <Testimonials />

      {/* Newsletter + Footer */}
      <Newsletter />
    
    </>
  );
}
