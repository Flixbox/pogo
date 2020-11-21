import { Container, createMuiTheme, CssBaseline, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
import { TwitterFeedCollection, FancyLink, Community } from '.'

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
                        <Typography variant="h2">Communities</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Hamburg (all areas)</Typography>
                        <Community title="pkmngohh">
                            <FancyLink
                                title="Slack"
                                type="slack"
                                href="https://join.slack.com/t/pkmngohh/shared_invite/zt-buv9exf8-Z8PYgk~Lywaa8GfLriu_5g"
                            />
                        </Community>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Altona</Typography>
                        <Community title="Altona Raidgruppe">
                            <FancyLink title="Website" href="https://pogoaltona.de/" />
                            <FancyLink title="Telegram Talk" type="telegram" href="https://t.me/talkpokemon" />
                            <FancyLink title="Telegram Raids" type="telegram" href="https://t.me/joinchat/GfSxL0tmbHqtazBgsTSanQ" />
                            <FancyLink title="Telegram PvP" type="telegram" href="https://t.me/joinchat/IZ1tbBPlfzj8pXIKct0m8w" />
                        </Community>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Eimsbüttel</Typography>
                        <Community title="Eimsbüttel Raids">
                            <FancyLink title="Telegram" type="telegram" href="https://t.me/joinchat/AAAAAErSWbpPor6PU1E1jw" />
                        </Community>
                        <Community title="Altona-Eimsbüttel Grenzraider">
                            <FancyLink title="Telegram" type="telegram" href="https://t.me/talkpokemon" />
                        </Community>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Harburg</Typography>
                        <Community title="Pokemon Go Harburg">
                            <FancyLink title="Website" href="https://www.play-hh.de/" />
                        </Community>
                    </Grid>
                    <TwitterFeedCollection />
                </Grid>
            </Container>
        </ThemeProvider>
    </>
)

export default App
