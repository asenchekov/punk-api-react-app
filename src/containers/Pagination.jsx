import React, { useContext } from 'react';

import { Store } from '../store/Store';
import { nextPage, prevPage } from '../store/actions';


const Pagination = () => {
  const { state, dispatch } = useContext(Store);
  const goNextPage = () => {
    nextPage(dispatch);
  };

  const goPrevPage = () => {
    if (state.currentPage === 1) {
      return;
    }
    prevPage(dispatch);
  };

  return (
    <div id="pagination">
      <div id="prev">
        <button type="button" onClick={goPrevPage}>PREV</button>
      </div>
      <div>
        {/* eslint-disable-next-line */}
        <p>page {state.currentPage}</p>
      </div>
      <div id="next">
        <button type="button" onClick={goNextPage}>NEXT</button>
      </div>
    </div>
  );
};

Pagination.propTypes = {

};

export default Pagination;
