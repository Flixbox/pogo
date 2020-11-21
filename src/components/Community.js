import { Box, Paper, Typography } from '@material-ui/core'

const FancyLink = ({ title, children }) => (
    <Box mt={1}>
        <Paper>
            <Box p={2}>
                <Typography variant="h4">{title}</Typography>
                {children}
            </Box>
        </Paper>
    </Box>
)

export default FancyLink
