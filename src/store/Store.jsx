import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import reducer from './reducer';


const initialState = {
  beers: [],
  currentPage: 1,
  search: '',
};

export const Store = createContext(initialState);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{ children }</Store.Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
