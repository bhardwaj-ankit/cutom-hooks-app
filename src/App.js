import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from './components/SearchComponent'
import Counter from './components/Counter'
import ElasticSearch from './components/ElasticSearch' 
import CustomerSearch from './components/CustomerSearch';

function App() {
  return (
    <div className="App">
      {/* <SearchComponent></SearchComponent>
      <Counter></Counter> */}
      {/* <ElasticSearch></ElasticSearch> */}
      <CustomerSearch></CustomerSearch>
    </div>
  );
}

export default App;
