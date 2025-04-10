import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {

  return (
    
    <header className="absolute top-0 left-0 w-full z-10">
      <nav className="flex justify-between items-center px-8 py-6 text-white bg-black/40 backdrop-blur-sm">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          COFFEE
        </Link>
      
          
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm uppercase font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/coffee">Coffee</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>

        {/* Search Icon */}
        <button>
          <Search size={20} />
        </button>
      </nav>
    </header>
  );
}
