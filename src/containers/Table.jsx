
import React, { useContext, useEffect } from 'react';
import { Store } from '../store/Store';
import { fetchData } from '../store/actions';
import TableRow from '../components/TableRow';


const Table = () => {
  const { state, dispatch } = useContext(Store);
  const { currentPage, search } = state;

  useEffect(() => {
    fetchData(dispatch, search, currentPage);
  }, [search, currentPage, dispatch]);

  const tableRows = state.beers.map(({
    id,
    name,
    abv,
    volume,
    ingredients,
  }) => {
    const ings = (
      <ul>
        {
          Object.keys(ingredients)
            .map((group) => {
              if (group === 'yeast') {
                return (
                  <li
                    key={group + Math.random()}
                  >
                    {`yeast: ${ingredients[group]}`}
                  </li>
                );
              }

              return (
                <li key={group + Math.random()}>
                  {group}
                  <ul>
                    {
                      ingredients[group].filter((el, i) => i < 3)
                        .map((el) => <li key={el.name + Math.random()}>{el.name}</li>)
                    }
                  </ul>
                </li>
              );
            })
        }
      </ul>
    );
    return (
      <TableRow
        key={id}
        name={name}
        abv={abv}
        volume={volume.value}
        ingredients={ings}
      />
    );
  });

  const table = (
    <table>
      {/* eslint-disable-next-line */}
      <caption>Search: {state.search || 'All'}</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>ABV (%)</th>
          <th>Volume (litres)</th>
          <th>Ingredients</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );

  return table;
};

export default Table;
