import { Grid, Typography } from '@material-ui/core'
import { Timeline } from 'react-twitter-widgets'

const feeds = ['PokemonGoApp', 'TheSilphRoad', 'SerebiiNet', 'PokefansNET']

const TwitterFeedCollection = () => (
    <>
        <Typography variant="h2" color="secondary">
            Twitter
        </Typography>
        <Grid container item xs={12}>
            {feeds.map(screenName => (
                <Grid item xs={12} md={3} key={screenName}>
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName,
                        }}
                        options={{
                            height: '400',
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    </>
)

export default TwitterFeedCollection
