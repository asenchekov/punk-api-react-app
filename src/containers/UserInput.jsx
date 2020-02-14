import React, { useState, useContext } from 'react';

import { Store } from '../store/Store';
import { fetchData } from '../store/actions';


const UserInput = () => {
  const { dispatch } = useContext(Store);
  const [input, setInput] = useState('');
  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    fetchData(dispatch, input);
    setInput('');
  };

  return (
    <div id="userInput">
      <label htmlFor="searchString">
        {/* eslint-disable-next-line */}
        Beer name: <input
          onChange={onChangeHandler}
          type="text"
          name="searchString"
          value={input}
          placeholder="Search shows..."
        />
      </label>
      <button type="button" onClick={onSubmitHandler}>Search...</button>
    </div>
  );
};

export default UserInput;
