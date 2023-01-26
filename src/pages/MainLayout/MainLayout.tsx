import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { Navbar } from "../../Components/Navbar/Navbar";

export const MainLayout = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
