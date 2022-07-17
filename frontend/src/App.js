import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {

  return (
    <Router>
      <Header />
        <main>
          <AnimatedRoutes/>
        </main>
      <Footer />
    </Router>
  );
};

export default App;
