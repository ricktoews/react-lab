import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Tabs } from 'material-ui'
import { Tab } from 'material-ui'
import MenuIcon from '@material-ui/icons/Menu'
import Menu, { MenuItem } from 'material-ui/Menu'

function navigate(to) {
	if (to === 'home') {
		document.location = '/';
	} else if (to === 'passage') {
		document.location = '/passage';
	}
}

export default class extends Component {
  state = {
    anchorEl: null
  }

  handleTab = (event) => {
    console.log('handleTab', event.currentTarget);
    var el = event.currentTarget;
    var tab = el.dataset.tab;
	navigate(tab);
    
  }

  handleClick = (event) => {
	var el = event.currentTarget;
    this.setState({ anchorEl: el });
  }

  handleClose = (event) => {
	var el = event.currentTarget;
console.log('el', el.dataset.item);
	if (el.dataset.item === 'home') {
		document.location = '/';
	} else if (el.dataset.item === 'passages') {
		document.location = '/passage';
	}
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state

    return <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon
            onClick={this.handleClick}
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose} data-item="home">Home</MenuItem>
            <MenuItem onClick={this.handleClose} data-item="passages">Passages</MenuItem>
            <MenuItem onClick={this.handleClose} data-item="about">About</MenuItem>
          </Menu>
        </IconButton>
        <Tabs indicatorColor="primary" centered>
          <Tab onClick={this.handleTab} data-tab="home" label="Home"></Tab>
          <Tab onClick={this.handleTab} data-tab="passage" label="Passage"></Tab>
          <Tab onClick={this.handleTab} label="FAQ"></Tab>
        </Tabs>
      </Toolbar>
    </AppBar>

  }
}

