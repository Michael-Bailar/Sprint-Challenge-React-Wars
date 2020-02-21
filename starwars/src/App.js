import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=> {
    axios
      .get(`https://swapi.co/api/people/?page=${pageNumber}`)
      .then(response => {
        setCharData(response.data.results);
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }, [pageNumber]);

  const increasePageNumber = () => {
    if (pageNumber < 80) {
      setPageNumber(pageNumber + 1);
    }
  }
  const decreasePageNumber = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Pagination increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} pageNumber={pageNumber}/>
      <Cards data={charData}/>
    </div>
  );


}

export default App;
