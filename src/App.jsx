import React, { useState } from "react";
import Navbar from "/src/components/Navbar.jsx";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";


const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Fancy Product", price: "40.00 - 80.00", sale: false, image: "/assets/images/product1.jpg" },
    { id: 2, name: "Special Item", price: 18.0, sale: true, originalPrice: 20.0, rating: 5, image: "/assets/images/product2.jpg" },
    { id: 3, name: "Sale Item", price: 25.0, sale: true, originalPrice: 50.0, image: "/assets/images/product3.jpg" },
    { id: 4, name: "Popular Item", price: 40.0, sale: false, rating: 5, image: "/assets/images/product4.jpg" },
    { id: 5, name: "Sale Item", price: 50.0, sale: true, originalPrice: 70.0, image: "/assets/images/product5.jpg" },
    { id: 6, name: "Fancy Product", price: 90.0, sale: false, image: "/assets/images/product6.jpg" },
    { id: 7, name: "Special Item", price: 30.0, sale: true, originalPrice: 45.0, rating: 5, image: "/assets/images/product7.jpg" },
    { id: 8, name: "Popular Item", price: 60.0, sale: false, rating: 5, image: "/assets/images/product8.jpg" },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const isInCart = (productId) => cart.some((item) => item.id === productId);

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Header />
      <ProductList
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isInCart={isInCart}
      />
    </div>
  );
};

export default App;
