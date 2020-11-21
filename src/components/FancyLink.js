import { Link, Typography, useTheme } from '@material-ui/core'
import html5 from 'super-tiny-icons/images/svg/html5.svg'
import telegram from 'super-tiny-icons/images/svg/telegram.svg'
import slack from 'super-tiny-icons/images/svg/slack.svg'
import whatsapp from 'super-tiny-icons/images/svg/whatsapp.svg'
import discord from 'super-tiny-icons/images/svg/discord.svg'

const icons = {
    default: html5,
    telegram,
    slack,
    whatsapp,
    discord,
}

const FancyLink = ({ title, type = 'default', ...props }) => {
    const theme = useTheme()
    return (
        <Typography>
            <Link variant="body1" {...props} style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                <img src={icons[type]} alt="" style={{ height: '20px', marginRight: theme.spacing(1) }} />
                {title}
            </Link>
        </Typography>
    )
}

export default FancyLink
