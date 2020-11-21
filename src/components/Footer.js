import { Box, Link, Typography, useTheme } from '@material-ui/core'
import github from 'super-tiny-icons/images/svg/github.svg'

const Footer = ({ title, children }) => {
    const theme = useTheme()
    return (
        <Box mt={1} display="flex" justifyContent="space-between" component={Typography}>
            <Link href="https://github.com/Flixbox/pogo">
                <img src={github} alt="" style={{ height: '20px', marginRight: theme.spacing(1) }} />
                Repo
            </Link>
            Made by Katzdierubbel / Flixbox / Felix
        </Box>
    )
}

export default Footer
