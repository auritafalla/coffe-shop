import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/index";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}
