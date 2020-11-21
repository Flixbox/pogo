import { Grid, Typography } from '@material-ui/core'

const Area = ({ title, children }) => (
    <Grid item xs={12}>
        <Typography variant="h3">{title}</Typography>
        {children}
    </Grid>
)

export default Area
