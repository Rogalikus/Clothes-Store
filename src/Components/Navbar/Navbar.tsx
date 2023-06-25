import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar-block">
      <NavLink to="/">
        <div className={styles.button}>Кросівки</div>
      </NavLink>
      <NavLink to="/hoodie">
        <div className={styles.button}>Худі</div>
      </NavLink>
      <NavLink to="/t-shirt">
        <div className={styles.button}>Футболки</div>
      </NavLink>
    </div>
  );
};
