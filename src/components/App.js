import { Container, createMuiTheme, CssBaseline, Grid, responsiveFontSizes, ThemeProvider, Typography } from '@material-ui/core'
import { TwitterFeedCollection } from '.'

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
                    </Grid>
                    <TwitterFeedCollection />
                </Grid>
            </Container>
        </ThemeProvider>
    </>
)

export default App
