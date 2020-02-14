import React from 'react';

import Header from '../components/Header';
import '../static/css/App.css';
import Table from './Table';
import Pagination from './Pagination';
import UserInput from './UserInput';


const App = () => (
  <>
    <Header />
    <UserInput />
    <Table />
    <Pagination />
  </>
);

export default App;
