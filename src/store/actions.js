export const fetchData = async (dispatch, search, page = 1) => {
  const url = search
    ? `https://api.punkapi.com/v2/beers?beer_name=${search}&page=${page}&per_page=15`
    : `https://api.punkapi.com/v2/beers?page=${page}&per_page=15`;
  const data = await fetch(url);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON,
    search,
  });
};

export const nextPage = (dispatch) => dispatch({
  type: 'NEXT_PAGE',
});

export const prevPage = (dispatch) => dispatch({
  type: 'PREV_PAGE',
});

// export const searchBeer = async (dispatch, beerName, page = 1) => {
//   const url = `https://api.punkapi.com/v2/beers?beer_name=${beerName}&page=${page}&per_page=15`;
//   const data = await fetch(url);
//   const dataJSON = await data.json();
//   dispatch({
//     type: 'SEARCH_BEER',
//     payload: {
//       dataJSON,
//       beerName,
//     },
//   });
// };
