import { Container, createMuiTheme, CssBaseline, Grid, Link, Paper, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
import { TwitterFeedCollection, FancyLink } from '.'

const App = () => (
    <>
        <ThemeProvider theme={responsiveFontSizes(createMuiTheme())}>
            <CssBaseline />
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h1">Pokemon Go Hamburg Info Page</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h2">Communities</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Hamburg (all areas)</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Altona</Typography>
                        <Paper>
                            <Typography variant="h4">Altona Raidgruppe</Typography>
                            <FancyLink title="Website" href="https://pogoaltona.de/" />
                            <FancyLink title="Telegram" href="https://pogoaltona.de/" />
                        </Paper>
                    </Grid>
                    <TwitterFeedCollection />
                </Grid>
            </Container>
        </ThemeProvider>
    </>
)

export default App
