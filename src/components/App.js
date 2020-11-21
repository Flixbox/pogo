import { Container, createMuiTheme, CssBaseline, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
import { FeedCollection, FancyLink, Community, Footer, Area } from '.'

const areas = [
    {
        title: 'Hamburg (all areas)',
        communities: [
            {
                title: 'pkmngohh',
                links: [{ title: 'Slack', type: 'slack', href: 'https://bit.ly/38QBidi' }],
            },
            {
                title: 'Pokemon Go Hamburg',
                links: [{ title: 'Discord', type: 'discord', href: 'https://discord.gg/aQEt6UE' }],
            },
            {
                title: 'PoGo Raiden HH',
                links: [{ title: 'WhatsApp', type: 'whatsapp', href: 'https://chat.whatsapp.com/FGMI2akTSXE27QsDVjWCJS' }],
            },
        ],
    },
    {
        title: 'Hamburg-Nord',
        communities: [
            {
                title: 'HB-Nord',
                links: [{ title: 'Telegram Talk', type: 'telegram', href: 'https://t.me/joinchat/Flw5mUXyv9TwYTw9q_fT4Q' }],
            },
        ],
    },
    {
        title: 'Altona',
        communities: [
            {
                title: 'Altona Raidgruppe',
                links: [
                    { title: 'Website', href: 'https://pogoaltona.de/' },
                    { title: 'Telegram Talk', type: 'telegram', href: 'https://t.me/talkpokemon' },
                    { title: 'Telegram Raids', type: 'telegram', href: 'https://t.me/joinchat/GfSxL0tmbHqtazBgsTSanQ' },
                    { title: 'Telegram PvP', type: 'telegram', href: 'https://t.me/joinchat/IZ1tbBPlfzj8pXIKct0m8w' },
                ],
            },
        ],
    },
    {
        title: 'Barmbek',
        communities: [
            {
                title: 'PoGo Barmbek',
                links: [
                    { title: 'PoGo Barmbek Raids', type: 'whatsapp', href: 'https://chat.whatsapp.com/JCaUkxVsJz5AdztgD4qk2I' },
                    { title: 'PoGo Barmbek Talk', type: 'whatsapp', href: 'https://chat.whatsapp.com/GzP8ltIHXBy3lcynr4SY5a' },
                ],
            },
        ],
    },
    {
        title: 'Bergedorf',
        communities: [
            {
                title: 'PoGo Bergedorf',
                links: [
                    { title: 'Telegram Smalltalk', type: 'telegram', href: 'https://t.me/joinchat/GQAr8hA7GgQE6vVAOFBtQQ' },
                    { title: 'Telegram Raids', type: 'telegram', href: 'https://t.me/PoGORaidsBergedorf' },
                ],
            },
            {
                title: 'Mountain Village Raids',
                links: [{ title: 'WhatsApp', type: 'whatsapp', href: 'https://chat.whatsapp.com/2MXFOmdPKkfL12y5dfGShz' }],
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
