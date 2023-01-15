import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../../redux/reducers/cart-reducer";

export const ItemsBlock = ({ id, image, title, sizes, price, types }) => {
  const [activeType, setActiveType] = useState(2);
  const [activeSize, setActiveSize] = useState(5);
  //const itemsCount = useSelector((state) => state.cart.items.length);
  const dispatch = useDispatch();
  const countItems = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = countItems ? countItems.count : 0;

  const onClickFunc = () => {
    const items = {
      id,
      title,
      price,
      image,
      type: typesNames[activeType],
      sizes: sizes[activeSize],
    };
    dispatch(addItems(items));
  };

  const typesNames = ["Білий", "Чорний"];

  return (
    <div className="block-wrapper">
      <div className="pizza-block">
        <img
          className="pizza-block__image"
          style={{ borderRadius: 15 }}
          src={image}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((el) => (
              <li
                key={el}
                onClick={() => setActiveType(el)}
                className={activeType === el ? "active" : ""}
              >
                {el === typesNames.indexOf("Білий")
                  ? typesNames[0]
                  : typesNames[1]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((el) => (
              <li
                key={el}
                onClick={() => setActiveSize(el)}
                className={activeSize === el ? "active" : ""}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₴</div>
          <button
            className="button button--outline button--add"
            onClick={onClickFunc}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Додати</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
