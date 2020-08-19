import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Data.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';
import createMixins from '@material-ui/core/styles/createMixins';
const Data = ( { data : {confirmed,recovered,deaths,latestdate}}) => {
  if(!confirmed ){
    return 'Loading ...'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.infect)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>{new Date(latestdate).toLocaleString()}</Typography>
            <Typography variant="body2">Active Cases of Covid19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.death)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
            <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>{new Date(latestdate).toLocaleString()}</Typography>
            <Typography variant="body2">Deaths of Covid19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md ={3} className={cx(styles.card,styles.recover)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
            <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary" gutterBottom>{new Date(latestdate).toLocaleString()}</Typography>
            <Typography variant="body2">Recoveries of Covid19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Data;
