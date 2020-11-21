import { Box, Link, Typography, useTheme } from '@material-ui/core'
import html5 from 'super-tiny-icons/images/svg/html5.svg'
import telegram from 'super-tiny-icons/images/svg/telegram.svg'

const icons = {
    default: html5,
    telegram,
}

const FancyLink = ({ title, type = 'default', ...props }) => {
    const theme = useTheme()
    return (
        <Typography>
            <Link variant="body1" {...props} style={{ textAlign: 'center' }}>
                <Box display="flex" alignItems="center">
                    <img src={icons[type]} alt="" style={{ height: '20px', marginRight: theme.spacing(1) }} />
                    {title}
                </Box>
            </Link>
        </Typography>
    )
}

export default FancyLink
