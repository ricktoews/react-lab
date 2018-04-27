import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui'
import { blue } from 'material-ui/colors'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from 'material-ui'
import { Grid } from 'material-ui'

import Header from './Layout/Header'
import Footer from './Layout/Footer'

import Home from './Home'
import Passage from './Passage'
import DecimalCalc from './DecimalCalc'
import About from './Passage'

const theme = createMuiTheme({
	palette: {
		primary: blue
	}
})

export default class extends Component {

  render() {
    return <MuiThemeProvider theme={theme}>
      <div>
      <Header />
      <Grid container>
        <Grid item sm={1} />
        <Grid item sm={10}>
          <CssBaseline />
          <Router>
            <div>
              <Route exact path="/" component={DecimalCalc}/>
              <Route path="/passage" component={Passage} />
              <Route path="/about" component={About} />
            </div>
          </Router>
        </Grid>
        <Grid item sm={1} />
      </Grid>
      <Footer />
      </div>
    </MuiThemeProvider>
  }
}

