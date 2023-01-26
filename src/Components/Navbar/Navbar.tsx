import React from "react";
//import styles from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar-block">
      <div className="active">Кросівки</div>
      <div>Футболки</div>
      <div>Худі</div>
    </div>
  );
};
