import React, { Component } from 'react'
import { Typography } from 'material-ui'
import { Table, TextField } from 'material-ui'
import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'

const decimalREST = 'http://arithmo-rest.toewsweb.net/dc/'

class DecimalCalc extends Component {
  constructor() {
    super()
    this.state = {
      denom: 1,
      decimals: []
    }
    this.handleDenom = this.handleDenom.bind(this)
  }

  calcDecimals(denom) {
    return fetch(decimalREST + denom)
      .then((res) => {
        return res.json()
      });
  }

  handleDenom = denom => event => {
    this.setState({
      [denom]: event.target.value,
    })
    var d = event.target.value
    if (d < 2) return false;
    fetch(decimalREST + d)
    this.calcDecimals(d)
      .then(res => {
        this.setState({ decimals: res })
      })
  }

  render() {
    return (
      <div>
      <Typography variant="body1">
        <TextField
          id="denom"
          label="Denominator"
          value={this.state.denom}
          onChange={this.handleDenom('denom')}
          margin="normal"
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fraction</TableCell>
              <TableCell>Decimal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.decimals.map(obj => {
            return (
            <TableRow key={obj.num}>
              <TableCell>{obj.fraction}</TableCell>
              <TableCell>{obj.decimal}</TableCell>
            </TableRow>
            )
          })}
          </TableBody>
        </Table>
      </Typography>
      </div>
    );
  }
}

export default DecimalCalc;
