import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

type PaginationType = {
  value: number;
  onChangePage: (event: number) => void;
  size: number;
};


export const Pagination: React.FC<PaginationType> = ({
  value,
  onChangePage, size
}) => {
  return (
    <div className={styles.pagination}>
      <ReactPaginate
        className={styles.items}
        breakLabel="..."
        nextLabel="-->"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={5}
        forcePage={value - 1}
        previousLabel="<--"
        renderOnZeroPageCount={() => null}
      />
    </div>
  );
};
