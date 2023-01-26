import React from "react";
import { ItemsBlock } from "./ItemsBlock";
import { MyLoader } from "./Preloader";
import { useSelector } from "react-redux";
import { filterSelector } from "../../redux/reducers/filter-reducer";

type Items = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  sizes: Array<number>;
  types: Array<number>;
  count: number;
};

type ItemsMenuType = {
  fetchStatus: String;
  items: Items[];
};

export const ItemsMenu: React.FC<ItemsMenuType> = ({ fetchStatus, items }) => {
  const { searchValue } = useSelector(filterSelector);

  const realItems = items
    .filter((sne) => {
      if (sne.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((sne) => (
      <ItemsBlock
        id={sne.id}
        key={sne.id}
        image={sne.imageUrl}
        title={sne.title}
        price={sne.price}
        sizes={sne.sizes}
        types={sne.types}
      />
    ));
  const loadingItems = [...new Array(9)].map((_, index) => (
    <MyLoader key={index} />
  ));
  return (
    <div className="content__items">
      {fetchStatus === "loading" ? loadingItems : realItems}
    </div>
  );
};
