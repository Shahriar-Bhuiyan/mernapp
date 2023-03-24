import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const App = () => {
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/products/:category" element={<ProductList />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
    <Route path="/product/:id" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/success" element={<Success />} />
  </Routes>
</BrowserRouter>
  );
};

export default App;