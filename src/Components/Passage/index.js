import React from 'react'
import { Typography } from 'material-ui'
import { chapter9 } from '../../revelation.js';

export default () => {
	var passage = chapter9

    return <div>
      <Typography variant="title" style={{marginTop:10}}>Revelation 9</Typography>
      <Typography variant="body1">
      {passage.map((verse, ndx) => {
        return <p key={ndx}>{verse.text}</p>
      })}
      </Typography>
    </div>
}

