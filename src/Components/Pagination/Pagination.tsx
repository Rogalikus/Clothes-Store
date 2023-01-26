import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

type PaginationType = {
  value: number;
  onChangePage: (event: number) => void;
};
// ((props: PaginationType) => void | null)
//   | undefined

export const Pagination: React.FC<PaginationType> = ({
  value,
  onChangePage,
}) => {
  return (
    <div className={styles.pagination}>
      <ReactPaginate
        className={styles.items}
        breakLabel="..."
        nextLabel="-->"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={value - 1}
        previousLabel="<--"
        renderOnZeroPageCount={() => null}
      />
    </div>
  );
};
