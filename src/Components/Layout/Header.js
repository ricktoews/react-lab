import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui'
import MenuIcon from '@material-ui/icons/Menu'
import Menu, { MenuItem } from 'material-ui/Menu'

export default class extends Component {
  state = {
    anchorEl: null
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
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
            <MenuItem onClick={this.handleClose}>Revelation 9</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
        </IconButton>
        <Typography variant="title" color="inherit">
          Revelation 9
      </Typography>
      </Toolbar>
    </AppBar>

  }
}

