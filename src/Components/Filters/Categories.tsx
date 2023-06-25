import { useWhyDidYouUpdate } from "ahooks";
import React from "react";

type CategoriesPropsType = {
  categoryIndex: number;
  setCategoryIndex: (index: number) => void;
};

export const Categories: React.FC<CategoriesPropsType> = React.memo(
  ({ categoryIndex, setCategoryIndex }) => {
    useWhyDidYouUpdate("Categories", {
      categoryIndex,
      setCategoryIndex,
    });

    const category = ["Всі", "Nike", "Converse", "Всі", "Всі", "Всі"];

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
  }
);
