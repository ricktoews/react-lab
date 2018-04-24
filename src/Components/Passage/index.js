import React, { Fragment } from 'react'
import { Grid, Typography } from 'material-ui'

export default ({ passage }) => {

    return <div>
      <Grid container>
      <Typography>
      {passage.map(verse => {
        return <Grid container>
        <Grid item sm={1} />
        <Grid item sm>
          <p>{verse.text}</p>
        </Grid>
        <Grid item sm={1} />
        </Grid>
      })}
      </Typography>
      </Grid>
    </div>
}

