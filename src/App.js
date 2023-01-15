import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Cart } from "./pages/Cart";
import { EmptyCart } from "./pages/EmptyCart";
import { NotFound } from "./pages/NotFound/NotFound";
import { SneakersContent } from "./pages/Sneakers";
import { ValueContext } from "./Components/Context/Context";

import "./scss/app.scss";

const App = () => {
  const [searchValues, setSearchValue] = useState("");

  return (
    <ValueContext.Provider value={{ searchValues, setSearchValue }}>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<SneakersContent />} />
                <Route path="/empty_cart" element={<EmptyCart />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </ValueContext.Provider>
  );
};

export default App;
