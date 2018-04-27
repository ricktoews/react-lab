import React, { Component } from 'react'
import { Typography } from 'material-ui'


class Home extends Component {

	render() {
		return <div>
          <Typography variant="title">ricktoews.me</Typography>
          <Typography variant="body1">
                <p>"An artist as well as a scientist." A fellow student once described me so, and I quite like it. Of course, I would probably characterize myself as an engineer rather than a scientist; however, the common element is that one is primarily logical in how one approaches problems. As an engineer, I solve problems using rules appropriate to the context. I reason. If something isn't clear, I may devise tests by which I can eliminate possibilities. I don't remember having learned to think in this way: it just seems part of basic common sense.</p>

                <p>As an artist, I appreciate aesthetic beauty. I enjoy visual art, and I love good music. I play the piano, and Chopin has for decades been my favorite composer. My spirit tends to be freer in a tastefully appointed space than in one lacking in coordination. I read. My favorite authors are those skilled not merely in narrative but in wordcraft. There are those who can provide a competent account, and there are those with the gift of turning a phrase or grouping words that look and sound good together.</p>

                <p>Technology. I'm a fan of home automation. I have both Google Home and the Echo Dot, and I use each device multiple times per day. One, I find better at controlling certain devices; the other has a pleasanter sounding voice.</p>

                <p>Travel. Though I didn't start until a few years ago, I have begun to travel, with the present goal of visiting at least one new country each year--and, ideally, the capital of that country. Thus far, I've been to London, Reykjavik, Paris, and Copenhagen. I haven't yet decided on my next destination, though it will almost certainly be another European country.</p>

                <p>This site. Built with React.</p>
          </Typography>
        </div>
	}
}

export default Home
