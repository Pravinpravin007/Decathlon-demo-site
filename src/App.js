// import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./Logintask/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Logintask/Loginform";
import { Signup } from "./Logintask/Signup";
import { Wishlist } from "./Logintask/Wishlist";
import { Support } from "./Logintask/Support";
import { Mystore } from "./Logintask/Mystore";
import { Change1 } from "./Logintask/Change1";
// import { Cart } from "./Logintask/Cart";
import { Home } from "./Logintask/Home";
import { Admin } from "./Admin/Admin";
import Men from "./Catagorie/Men";
import Womens from "./Catagorie/Womens";


function App() {
  return(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Mystore" element={<Mystore />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Change1" element={<Change1 />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        {/* <Route path="/Cart" element={<Cart />} /> */}
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Womens" element={<Womens />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
