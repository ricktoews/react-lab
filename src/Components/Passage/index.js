import React from 'react'
import { Typography } from 'material-ui'

export default class Passage extends React.Component {

	constructor(props) {
		super(props);
		this.state = { isLoading: true };

		var passageUrl = 'http://memorize.toewsweb.net/rest.php/getpassage/revelation/13';
		fetch(passageUrl)
			.then(response => response.json())
			.then(passage => {
				this.setState({
					isLoading: false,
					dataSource: passage
				});
			});
	}

	render() {
		if (this.state.isLoading) {
			return <div>Loading...</div>
		}
    		return <div>
		      <Typography variant="title" style={{marginTop:10}}>Revelation 16</Typography>
   		   <Typography variant="body1">
		      {this.state.dataSource.map((verse, ndx) => {
   		     return <p key={ndx}>{verse.text}</p>
		      })}
   		   </Typography>
		    </div>
	}

}

