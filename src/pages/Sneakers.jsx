import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";
import qs from "qs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Categories } from "../Components/Categories";
import { ItemsMenu } from "../Components/ItemsMenu";
import { SortedProd } from "../Components/SortedProd";
import { Pagintaion } from "../Components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoryIndex,
  setCurrentPage,
  setFilters,
} from "../redux/reducers/filter-reducer";
import { ValueContext } from "../Components/Context/Context";
import { selectedType } from "./../Components/SortedProd";

export const SneakersContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  //useState`s

  const [items, setitems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //useContext

  const { searchValues } = useContext(ValueContext);

  //Redux

  const categoryIndex = useSelector((state) => state.filter.categoryIndex);
  const sortProd = useSelector((state) => state.filter.sortProd);
  const currentPage = useSelector((state) => state.filter.currentPage);
  //
  const fetchItems = () => {
    setIsLoading(true);

    const order = sortProd.sortId.includes("-") ? "asc" : "desc";
    const category = categoryIndex > 0 ? `category=${categoryIndex}` : ``;
    const sort = sortProd.sortId.replace("-", "");
    const search = searchValues ? `search=${searchValues}` : ``;

    axios
      .get(
        `https://63a1d3dfa543280f77624573.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort}&order=${order}&${search}`
      )
      .then((res) => setitems(res.data))
      .then(() => setIsLoading(false));
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
      const params = qs.parse(window.location.search.substring(1));
      const sortProd = selectedType.find((obj) => obj.sortId === params.sortId);

      dispatch(setFilters({ ...params, sortProd }));

      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      fetchItems();
    }

    isSearch.current = false;
    window.scrollTo(0, 0);
  }, [categoryIndex, sortProd, searchValues, currentPage]);

  //New const`s or functions

  const onChangeCategory = (id) => {
    dispatch(setCategoryIndex(id));
  };

  const onChangePage = (number) => {
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
      <ItemsMenu isLoading={isLoading} items={items} />
      <Pagintaion value={currentPage} onChangePage={onChangePage} />
    </>
  );
};
