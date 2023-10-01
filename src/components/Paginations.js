import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from "../redux/action/movieAction";

const Paginations = () => {
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setPageCount(pages);
  }, []);

  
  const handlePageClick = (data) => {
    dispatch(getPages(data.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< السابق"
      // class pagination not found on css put found into bootstrap
      containerClassName={"pagination justify-content-center"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Paginations;
