import { Container, createMuiTheme, CssBaseline, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
import { FeedCollection, FancyLink, Community, Footer } from '.'

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
                    <Grid item xs={12}>
                        <Typography variant="h3">Hamburg (all areas)</Typography>
                        <Community title="pkmngohh">
                            <FancyLink title="Slack" type="slack" href="https://bit.ly/38QBidi" />
                        </Community>
                        <Community title="Pokemon Go Hamburg">
                            <FancyLink title="Discord" type="discord" href="https://discord.gg/aQEt6UE" />
                        </Community>
                        <Community title="PoGo Raiden HH">
                            <FancyLink title="WhatsApp" type="whatsapp" href="https://chat.whatsapp.com/FGMI2akTSXE27QsDVjWCJS" />
                        </Community>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Hamburg-Nord</Typography>
                        <Community title="HB-Nord">
                            <FancyLink title="Telegram Talk" type="telegram" href="https://t.me/joinchat/Flw5mUXyv9TwYTw9q_fT4Q" />
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
                        <Typography variant="h3">Bergedorf</Typography>
                        <Community title="PoGo Bergedorf">
                            <FancyLink title="Telegram Smalltalk" type="telegram" href="https://t.me/joinchat/GQAr8hA7GgQE6vVAOFBtQQ" />
                            <FancyLink title="Telegram Raids" type="telegram" href="https://t.me/PoGORaidsBergedorf" />
                        </Community>
                        <Community title="Mountain Village Raids">
                            <FancyLink title="WhatsApp" type="whatsapp" href="https://chat.whatsapp.com/2MXFOmdPKkfL12y5dfGShz" />
                        </Community>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">Harburg</Typography>
                        <Community title="Pokemon Go Harburg">
                            <FancyLink title="Website" href="https://www.play-hh.de/" />
                        </Community>
                    </Grid>
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
