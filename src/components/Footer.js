import { Box, Link, Typography } from '@material-ui/core'

const Footer = ({ title, children }) => (
    <Box mt={1} display="flex" component={Typography}>
        <Link href="https://github.com/Flixbox/pogo">Repo</Link>
        Made by Katzdierubbel / Flixbox / Felix
    </Box>
)

export default Footer
