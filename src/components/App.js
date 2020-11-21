import { Container, createMuiTheme, CssBaseline, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
import { FeedCollection, FancyLink, Community, Footer, Area } from '.'
import communityData from '../communityData'

const App = () => (
    <>
        <ThemeProvider
            theme={responsiveFontSizes(
                createMuiTheme({
                    palette: {
                        primary: { main: '#00bcd4' },
                        type: 'dark',
                    },
                })
            )}
        >
            <CssBaseline />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h1">Pokemon Go Hamburg Info Page</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2" color="secondary">
                            Communities
                        </Typography>
                    </Grid>
                    {communityData.map(area => (
                        <Area title={area.title} key={area.title}>
                            {area.communities.map(community => (
                                <Community title={community.title} key={community.title}>
                                    {community.links.map(link => (
                                        <FancyLink {...link} key={link.href} />
                                    ))}
                                </Community>
                            ))}
                        </Area>
                    ))}

                    <Area title="Hamm/Horn/Billstedt/Mümmelmannsberg">
                        <Community title="PoGo-Gruppe Horn/Billstedt">
                            <FancyLink title="Telegram" type="telegram" href="https://t.me/joinchat/AhpfkkgMzboWIJMguxUulg" />
                        </Community>
                    </Area>
                    <FeedCollection />
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    </>
)

export default App
