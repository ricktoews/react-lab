import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Header } from './MainTemplate';
import Grid from 'material-ui/Grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


// Components for pages to navigate to
import Home from './Home';
import About from './AboutTemplate';
import DecimalCalc from './DecimalCalc';


class App extends Component {

  render() {
    return (
      <Grid container justify="center" spacing={16}>
      <Grid item xs={12}>
      <MuiThemeProvider>
      <div>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <Header title="ricktoews.me"/>
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/decimals">Decimal Calculator</Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/decimals" component={DecimalCalc} />
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
      </Grid>
      </Grid>
    );
  }
}

export default App;
