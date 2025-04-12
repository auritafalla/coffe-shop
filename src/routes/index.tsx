import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Singup from "../pages/Singup";
import About from "../pages/About";
import Login from "../pages/Login";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Singup" element={<Singup/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;