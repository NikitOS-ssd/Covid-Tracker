import React from 'react'
import {connect} from 'react-redux'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import './style.css'

const Cards = props => {
  const {confirmed, recovered, deaths, lastUpdate} = props.state;

  if(!confirmed) {
    return 'Loading...'
  }

  return (
    <div className="cards-block">
      <h4>Cards block</h4>

      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} className="covid-card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                superator="."
              />
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            </Typography>
            
          </CardContent>
        </Grid>
        <Grid item component={Card} className="covid-card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                superator="."
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className="covid-card">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
            <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                superator="."
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    
      
      <h4>{props.step}</h4>

    </div>
  )
}

function mapStateToProps(state) {
  return state.rootReducer
}

export default connect(mapStateToProps, null)(Cards)
