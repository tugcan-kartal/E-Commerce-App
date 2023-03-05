import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavbarView from "./features/NavbarView";
import ProductsView from "./features/ProductsView";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarView />

        <Routes>
          <Route path="/" element={<ProductsView />}/>
          <Route path="/cards" />
        </Routes>   
      </Router>   
    </div>
  );
}

export default App;
