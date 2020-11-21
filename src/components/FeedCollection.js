import { Grid, Typography } from '@material-ui/core'
import { Timeline } from 'react-twitter-widgets'
import { FancyLink } from '.'

const feeds = ['PokemonGoApp', 'TheSilphRoad', 'SerebiiNet', 'PokefansNET']

const FeedCollection = () => (
    <>
        <Typography variant="h2" color="secondary">
            Feeds
        </Typography>
        <Grid item xs={12}>
            <FancyLink title="Pokefans.Net Newsfeed" type="telegram" href="https://t.me/pokefansnet_go" />
        </Grid>
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

export default FeedCollection