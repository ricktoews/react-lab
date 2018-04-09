import React, { Component } from 'react';

const decimalREST = 'http://arithmo-rest.toewsweb.net/dc/';

class DecimalCalc extends Component {
  constructor() {
    super()
    this.state = {
      decimals: []
    }
    this.handleDenom = this.handleDenom.bind(this)
  }

  calcDecimals(denom) {
    return fetch(decimalREST + denom)
      .then((res) => {
        return res.json();
      });
  }

  handleDenom(evt) {
    var denom = evt.target.value;
    if (denom < 2) return false;
    fetch(decimalREST + denom)
    this.calcDecimals(denom)
      .then(res => {
        this.setState({ decimals: res })
      })
  }

  render() {
    return (
      <div>
        Denom <input type="text" onChange={this.handleDenom}/>
        <table><tbody>
          {this.state.decimals.map(obj => {
            return (<tr key={obj.num}><td>{obj.fraction}</td><td>{obj.decimal}</td></tr>)
          })}
        </tbody></table>
      </div>
    );
  }
}

export default DecimalCalc;
