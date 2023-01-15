import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export const Pagintaion = ({ value, onChangePage }) => {
  //   const [itemOffset, setItemOffset] = useState(0);

  //   const endOffset = itemOffset + itemsPerPage;
  //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  //   const currentItems = items.slice(itemOffset, endOffset);
  //   const pageCount = Math.ceil(items.length / itemsPerPage);

  //   const handlePageClick = (event) => {
  //     const newOffset = (event.selected * itemsPerPage) % items.length;
  //     console.log(
  //       `User requested page number ${event.selected}, which is offset ${newOffset}`
  //     );
  //     setItemOffset(newOffset);
  //   };
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
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
