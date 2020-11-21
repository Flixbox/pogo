import { Container, createMuiTheme, CssBaseline, Grid, Paper, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
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
                            <FancyLink title="Telegram Talk" type="telegram" href="https://t.me/talkpokemon" />
                            <FancyLink title="Telegram Raids" type="telegram" href="https://t.me/joinchat/GfSxL0tmbHqtazBgsTSanQ" />
                            <FancyLink title="Telegram PvP" type="telegram" href="https://t.me/joinchat/IZ1tbBPlfzj8pXIKct0m8w" />
                        </Paper>
                    </Grid>
                    <TwitterFeedCollection />
                </Grid>
            </Container>
        </ThemeProvider>
    </>
)

export default App
