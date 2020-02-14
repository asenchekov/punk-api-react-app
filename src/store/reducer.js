// Reducer function
export default (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        beers: action.payload,
        search: action.search,
      };
    case 'NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case 'PREV_PAGE':
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      return state;
  }
};
