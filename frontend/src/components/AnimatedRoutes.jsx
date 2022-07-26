import { Routes, Route, useLocation } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ContactScreen from "../screens/ContactScreen";
import AdminScreen from "../screens/AdminScreen";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {

    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/products" element={<ProductsScreen />}/>
            <Route path="/product/:id" element={<ProductScreen />}/>
            <Route path="/contact" element={<ContactScreen />}/>
            <Route path="/admin" element={<AdminScreen />}/>
    </Routes>
    </AnimatePresence>
    
  )
}

export default AnimatedRoutes