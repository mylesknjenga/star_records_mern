import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ContactScreen from "./screens/ContactScreen";

const App = () => {
  return (
    <Router>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/products" element={<ProductsScreen />}/>
            <Route path="/product/:id" element={<ProductScreen />}/>
            <Route path="/contact" element={<ContactScreen />}/>
          </Routes>
        </main>
      <Footer />
    </Router>
  );
};

export default App;
