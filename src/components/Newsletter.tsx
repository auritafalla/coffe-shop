export default function Newsletter() {
    return (
      <section className="bg-[#f3eee8] py-12 text-center px-4">
        <h2 className="text-xl font-semibold mb-2">Join in and get 15% Off!</h2>
        <p className="text-sm text-gray-600 mb-6">
          Subscribe to our newsletter and get 15% off discount code.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="📧 Email address"
            className="px-4 py-2 rounded-full border w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
          >
            Subscribe
          </button>
        </form>
      </section>
    );
  }
  