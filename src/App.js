import React , {useState} from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results.js';
import requests from './request.js';

function App() {

    const [selectedOption  , setSelectedOption] = useState(requests.fetchActionMovies);

  return (
    <div className="app">

      <Header />
      <Nav  setSelectedOptions = {setSelectedOption} />
      <Results selectedOptions = {selectedOption} />

    </div>
  );
}

export default App;
