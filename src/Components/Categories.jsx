import React from "react";

export const Categories = ({ categoryIndex, setCategoryIndex }) => {
  const category = ["Всі", "Всі", "Всі", "Всі", "Всі", "Всі"];

  return (
    <div className="categories">
      <ul className="">
        {category.map((el, index) => {
          return (
            <li
              key={index}
              onClick={() => setCategoryIndex(index)}
              className={categoryIndex === index ? "active" : ""}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
