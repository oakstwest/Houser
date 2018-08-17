import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import route from './route'
import StarWars from './components/StarWars';

class App extends Component {
  constructor() {
    super();
    this.state = {
      createListing: [],
      selectListing: '',
      selectAllListings: '',
      updateListing: '',
      deleteListing: '',

    }
  }


  render() {
    return (

      <div className="App">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <div>
          <Header />
          <StarWars />
        </div>
        {route}
      </div>
    );
  }
}

export default App;
