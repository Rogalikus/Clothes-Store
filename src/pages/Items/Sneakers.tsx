import React, { useCallback, useEffect, useRef } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { Categories } from "../../Components/Filters/Categories";
import { ItemsMenu } from "../../Components/itemsBlock/ItemsMenu";
import { SortedProd } from "../../Components/Filters/SortedProd";
import { Pagination } from "../../Components/Pagination/Pagination";
import { useSelector } from "react-redux";
import {
  filterSelector,
  setCategoryIndex,
  setCurrentPage,
  setFilters,
} from "../../redux/reducers/filter-reducer";
import { selectedType } from "../../Components/Filters/SortedProd";
import { fetchItems, FetchItemsType } from "../../redux/api/ItemsAPI";
import { itemsSelector } from "../../redux/reducers/items-reducer";
import { useAppDispatch } from "../../redux/store";

export const SneakersContent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  //useState`s

  //Redux
  const { fetchStatus, items } = useSelector(itemsSelector);
  const { categoryIndex, sortProd, currentPage, searchValue } =
    useSelector(filterSelector);

  //
  const getItems = async () => {
    const order = sortProd.sortId.includes("-") ? "asc" : "desc";
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : ``;
    const sortId = sortProd.sortId.replace("-", "");
    const search = searchValue ? `search=${searchValue}` : ``;
    //@ts-ignore
    dispatch(fetchItems({ currentPage, order, category, sortId, search }));
  };

  //useEffect
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortId: sortProd.sortId,
        currentPage,
        categoryIndex,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [sortProd.sortId, currentPage, categoryIndex]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as FetchItemsType;
      const sortProd = selectedType.find((obj) => obj.sortId === params.sortId);
      // if(sortProd){
      //   params.sortId = sortProd
      // }
      dispatch(
        setFilters({
          searchValue: params.search,
          categoryIndex: Number(params.category),
          currentPage: Number(params.currentPage),
          sortProd: sortProd || selectedType[0],
        })
      );

      isMounted.current = true;
    }
  }, []);

  useEffect(() => {
    getItems();

    isSearch.current = false;
    window.scrollTo(0, 0);
  }, [categoryIndex, sortProd, searchValue, currentPage]);

  //New const`s or functions

  const onChangeCategory = useCallback(
    (index: number) => {
      dispatch(setCategoryIndex(index));
    },
    [dispatch]
  );

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <>
      <div className="content__top">
        <Categories
          categoryIndex={categoryIndex}
          setCategoryIndex={onChangeCategory}
        />
        <SortedProd sortProd={sortProd} />
      </div>
      <h2 className="content__title">Всі кросівки</h2>
      {fetchStatus === "error" ? (
        <div className="content__error-info">
          <h2>
            Виникла помилка <span>😕</span>
          </h2>
          <p>Невдалося отримати одяг. Спробуйте зайти на сайт пізніше.</p>
        </div>
      ) : (
        <ItemsMenu fetchStatus={fetchStatus} items={items} />
      )}
      <Pagination value={currentPage} onChangePage={onChangePage} />
    </>
  );
};
