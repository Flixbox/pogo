import { Paper, Typography } from '@material-ui/core'

const FancyLink = ({ title, children }) => (
    <Paper p={2}>
        <Typography variant="h4">{title}</Typography>
        {children}
    </Paper>
)

export default FancyLink
