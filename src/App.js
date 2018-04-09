import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Header } from './MainTemplate';

// Components for pages to navigate to
import About from './AboutTemplate';
import DecimalCalc from './DecimalCalc';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header title="ricktoews.me"/>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/decimals">Decimal Calculator</Link>
            </nav>
            <Route path="/about" component={About} />
            <Route path="/decimals" component={DecimalCalc} />
            <Route path="/" />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
