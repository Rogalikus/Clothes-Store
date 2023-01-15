import React from "react";
import { NavLink } from "react-router-dom";

export const EmptyCart = () => {
  return (
    // <div class="container container--cart">
    <div class="cart cart--empty">
      <h2>
        Корзина пуста <icon>😕</icon>
      </h2>
      <p>
        Скоріше за все, ви не замовили ще одяг.
        <br />
        Для того, щоб замовити одяг, перейдіть на головну сторінку.
      </p>
      <img src="/img/empty-cart.png" alt="Empty cart" />
      <NavLink to="/">
        <div class="button button--black">
          <span>Повернутися назад</span>
        </div>
      </NavLink>
    </div>
    // </div>
  );
};
