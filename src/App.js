import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApexChart from './components/charts/apexchart'
import HeaderBar from './layouts/headerbar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar></HeaderBar>
        <ApexChart></ApexChart>
      </div>
    );
  }
}

export default App;
