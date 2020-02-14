import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({
  name,
  abv,
  volume,
  ingredients,
}) => (
  <tr>
    <td>{name}</td>
    <td>{abv}</td>
    <td>{volume}</td>
    <td>{ingredients}</td>
  </tr>
);

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  ingredients: PropTypes.element.isRequired,
};

export default TableRow;
