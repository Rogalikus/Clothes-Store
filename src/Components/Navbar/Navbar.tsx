import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar-block">
      <NavLink to="/">
        <a className={styles.button}>Кросівки</a>
      </NavLink>
      <NavLink to="/hoodie">
        <a className={styles.button}>Худі</a>
      </NavLink>
      <NavLink to="/t-shirt">
        <a className={styles.button}>Футболки</a>
      </NavLink>
    </div>
  );
};
