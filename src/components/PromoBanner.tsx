export default function PromoBanner() {
    return (
      <section className="bg-[url(/images/promo.jpg)] py-16 px-4 text-center relative overflow-hidden bg-no-repeat bg-cover">
        <h2 className="text-3xl text-white sm:text-4xl font-bold mb-6">Check out our best <br className="sm:hidden" /> coffee beans</h2>
        <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
          Explore our products →
        </button>
      </section>
    );
  }
  