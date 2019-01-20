import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui'
import { blue } from 'material-ui/colors'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from 'material-ui'
import { Grid } from 'material-ui'
import { withStyles } from 'material-ui/styles'

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

const styles = theme => ({
	contents: {
		marginTop: 20
	},
	pageContent: {
		zIndex:100,
	},
	backgroundImage: {
		background: 'url(../images/iceland.jpg) no-repeat center center fixed',
		position:'static',
		height:800,
		zIndex: 1
	}
})


class App extends Component {

  render() {
	const classes = this.props.classes;

    return <MuiThemeProvider theme={theme}>
      <div>
      <div className={classes.pageContent}>
      <Header />
      <Grid container className={classes.contents}>
        <Grid item sm={1} />
        <Grid item sm={10}>
          <CssBaseline />
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/passage" component={Passage} />
              <Route path="/about" component={About} />
              <Route path="/decimal" component={DecimalCalc} />
            </div>
          </Router>
        </Grid>
        <Grid item sm={1} />
      </Grid>
      </div>
      </div>
    </MuiThemeProvider>
  }
}

export default withStyles(styles)(App)
