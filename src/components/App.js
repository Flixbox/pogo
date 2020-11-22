import { Container, createMuiTheme, CssBaseline, Grid, Link, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
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
                        <Typography variant="h1">Pokémon Go Hamburg Info Page</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Link href="https://www.pogode.de/#list">Overview of German Pokémon Go communities</Link>
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
