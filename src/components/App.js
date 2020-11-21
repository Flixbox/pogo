import { Container, createMuiTheme, CssBaseline, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
import { FeedCollection, FancyLink, Community, Footer, Area } from '.'

const areas = [
    {
        title: 'Hamburg (all areas)',
        communities: [
            {
                title: 'pkmngohh',
                links: [
                    {
                        title: 'Slack',
                        type: 'slack',
                        href: 'https://bit.ly/38QBidi',
                    },
                ],
            },
            {
                title: 'Pokemon Go Hamburg',
                links: [
                    {
                        title: 'Discord',
                        type: 'discord',
                        href: 'https://discord.gg/aQEt6UE',
                    },
                ],
            },
            {
                title: 'PoGo Raiden HH',
                links: [
                    {
                        title: 'WhatsApp',
                        type: 'whatsapp',
                        href: 'https://chat.whatsapp.com/FGMI2akTSXE27QsDVjWCJS',
                    },
                ],
            },
        ],
    },
]

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
                    {areas.map(area => (
                        <Area title={area.title}>
                            {area.communities.map(community => (
                                <Community title={community.title}>
                                    {community.links.map(link => (
                                        <FancyLink {...link} />
                                    ))}
                                </Community>
                            ))}
                        </Area>
                    ))}
                    <Area title="Hamburg-Nord">
                        <Community title="HB-Nord">
                            <FancyLink title="Telegram Talk" type="telegram" href="https://t.me/joinchat/Flw5mUXyv9TwYTw9q_fT4Q" />
                        </Community>
                    </Area>
                    <Area title="Altona">
                        <Community title="Altona Raidgruppe">
                            <FancyLink title="Website" href="https://pogoaltona.de/" />
                            <FancyLink title="Telegram Talk" type="telegram" href="https://t.me/talkpokemon" />
                            <FancyLink title="Telegram Raids" type="telegram" href="https://t.me/joinchat/GfSxL0tmbHqtazBgsTSanQ" />
                            <FancyLink title="Telegram PvP" type="telegram" href="https://t.me/joinchat/IZ1tbBPlfzj8pXIKct0m8w" />
                        </Community>
                    </Area>
                    <Area title="Bergedorf">
                        <Community title="PoGo Bergedorf">
                            <FancyLink title="Telegram Smalltalk" type="telegram" href="https://t.me/joinchat/GQAr8hA7GgQE6vVAOFBtQQ" />
                            <FancyLink title="Telegram Raids" type="telegram" href="https://t.me/PoGORaidsBergedorf" />
                        </Community>
                        <Community title="Mountain Village Raids">
                            <FancyLink title="WhatsApp" type="whatsapp" href="https://chat.whatsapp.com/2MXFOmdPKkfL12y5dfGShz" />
                        </Community>
                    </Area>
                    <Area title="Harburg">
                        <Community title="Pokemon Go Harburg">
                            <FancyLink title="Website" href="https://www.play-hh.de/" />
                        </Community>
                    </Area>
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
