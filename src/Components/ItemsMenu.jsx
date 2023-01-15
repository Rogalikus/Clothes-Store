import React, { useContext } from "react";
import { ValueContext } from "./Context/Context";
import { ItemsBlock } from "./PizzaBlock/ItemsBlock";
import { MyLoader } from "./PizzaBlock/Preloader";

export const ItemsMenu = ({ isLoading, items }) => {
  const value = useContext(ValueContext);

  const realItems = items
    .filter((sne) => {
      if (sne.title.toLowerCase().includes(value.searchValues.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((sne) => (
      <ItemsBlock
        id={sne.id}
        image={sne.imageUrl}
        title={sne.title}
        price={sne.price}
        key={sne.id}
        sizes={sne.sizes}
        types={sne.types}
      />
    ));
  const loadingItems = [...new Array(9)].map((_, index) => (
    <MyLoader key={index} />
  ));
  return (
    <div className="content__items">{isLoading ? loadingItems : realItems}</div>
  );
};
