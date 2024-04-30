import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, createContext } from "react";

import About from "./COMPONENTS/ABOUT.jsx";
import Header from "./COMPONENTS/HEADER.jsx";
import Home from "./COMPONENTS/HOME.jsx";
import Product from "./COMPONENTS/PRODUCT.jsx";
import Cart from "./COMPONENTS/CART.jsx";
import Data from "./FUNCTIONS/DATA.json";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = Data;

 
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log("Added to cart:", product);
    console.log(cartItems)
  };
  
  return (
    <Router>
      <main className="app">
        <ShopContext.Provider value={{ cartItems, products, addToCart }}>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/product">
                <Product  />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </ShopContext.Provider>
      </main>
    </Router>
  );
}

export default App;
