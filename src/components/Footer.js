import { Grid, Link, useTheme } from '@material-ui/core'
import github from 'super-tiny-icons/images/svg/github.svg'

const Footer = ({ title, children }) => {
    const theme = useTheme()
    return (
        <Grid container>
            <Grid item xs={12} md={4}>
                <Link href="https://github.com/Flixbox/pogo">
                    <img src={github} alt="" style={{ height: '20px', marginRight: theme.spacing(1) }} />
                    Repo
                </Link>
            </Grid>
            <Grid item xs={12} md={4}>
                <Link href="https://github.com/Flixbox/pogo/issues">
                    <img src={github} alt="" style={{ height: '20px', marginRight: theme.spacing(1) }} />
                    Missing something? Create an issue!
                </Link>
            </Grid>
            <Grid item xs={12} md={4}>
                Made by Katzdierubbel / @Flixkatz
            </Grid>
        </Grid>
    )
}

export default Footer
