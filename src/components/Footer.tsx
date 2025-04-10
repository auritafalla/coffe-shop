export default function Footer() {
    return (
      <footer className="bg-[#231f20] text-white py-10 px-4 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          <div className="col-span-2 md:col-span-1 font-bold text-lg">COFFEE</div>
          <div>
            <p className="mb-2 font-semibold">Privacy</p>
            <ul>
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold">Services</p>
            <ul>
              <li>Order ahead</li>
              <li>Menu</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold">About us</p>
            <ul>
              <li>Our brand</li>
              <li>Our process</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold">Information</p>
            <ul>
              <li>Prices & pricing</li>
              <li>Sell your product</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-semibold">Social Media</p>
            <ul className="flex gap-4">
              <li>🐦</li>
              <li>📘</li>
              <li>📸</li>
              <li>💼</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  