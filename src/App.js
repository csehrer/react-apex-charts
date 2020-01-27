import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApexChart from './components/charts/apexchart'
import PrimarySearchAppBar from './layouts/headerbar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ApexChart></ApexChart>
      </div>
    );
  }
}

export default App;
