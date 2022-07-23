import './App.css';

// RCC
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1> Welcome to newsapp</h1>
        <News/>
      </div>
    )
  }
}

