import React, { useState } from "react";
import Pagination from "react-js-pagination";

const Paging = ( {page, count, setPage}) => {
  
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={8}
      totalItemsCount={100}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setPage}
    />
  );
};

export default Paging;
