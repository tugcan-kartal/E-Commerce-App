import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavbarView from "./features/NavbarView";
import ProductsView from "./features/ProductsView";
import CartView from "./features/CartView";

function App() {
  return (
    <div className="bg-gray-200">
      <Router>
        <NavbarView />

        <Routes>
          <Route path="/" element={<ProductsView />}/>
          <Route path="/Cart" element={<CartView />}/>
        </Routes>   
      </Router>   
    </div>
  );
}

export default App;
