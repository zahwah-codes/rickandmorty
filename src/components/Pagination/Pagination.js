import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css"

const Pagination = ({ pageNumber, info, setPageNumber}) => {

    let pageChange = (data) => {
        setPageNumber(data.selected + 1)
    }

    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);


  return (

      <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>

    <ReactPaginate
    className={`${styles.pages} d-flex justify-content-center gap-4 my-4`}
    nextLabel="Next"
    previousLabel="Prev"
    previousClassName= {`${styles.btn} prev`}
    nextClassName={`${styles.btn} next`}
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    activeClassName="active"
    marginPagesDisplayed={width < 576 ? 1 : 2}
    pageRangeDisplayed={width < 576 ? 1 : 2}
    pageCount={info?.pages}
    onPageChange={pageChange}
    pageClassName="page-item"
    pageLinkClassName="page-link"
    />
  </>
)}

export default Pagination