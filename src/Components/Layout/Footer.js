import React from 'react'
import { AppBar, Toolbar, Typography } from 'material-ui'
import { MuiThemeProvider, createMuiTheme } from 'material-ui'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default props =>
    <MuiThemeProvider theme={theme}>
    <Toolbar>
      <Typography color="secondary">Footer</Typography>
    </Toolbar>
    </MuiThemeProvider>
