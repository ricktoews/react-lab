import React, { Component, Fragment } from 'react'
import { CssBaseline } from 'material-ui'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Passage from './Passage'
import { chapter9 } from '../revelation.js';

export default class extends Component {
  state = {
    passage: chapter9
  }

  render() {
    return <div>
      <CssBaseline />
      <Header />

      <Passage passage={ chapter9 } />

      <Footer />
    </div>
  }
}

