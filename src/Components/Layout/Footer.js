import React, { Component } from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'

class Footer extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
console.log('handleChange', value);
    this.setState({ value });
  };

  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    );
  }
}

export default Footer
