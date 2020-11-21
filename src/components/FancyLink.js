import { Box, Link } from '@material-ui/core'
import html5 from 'super-tiny-icons/images/svg/html5.svg'
import telegram from 'super-tiny-icons/images/svg/telegram.svg'

const icons = {
    default: html5,
    telegram,
}

const FancyLink = ({ title, type = 'default', ...props }) => (
    <Link {...props} style={{ textAlign: 'center' }}>
        <Box display="flex" alignItems="center">
            <img src={icons[type]} alt="" style={{ height: '20px' }} />
            {title}
        </Box>
    </Link>
)

export default FancyLink
