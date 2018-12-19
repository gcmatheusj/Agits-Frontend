import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Switch, Paper } from '@material-ui/core'

const styles = theme => ({
    root: {
        padding: 5,
        paddingLeft: 30,
        marginTop: 5
    },
    grid: {
        alignItems: 'center'
    }
})

const PaperSubject = (props) => {

    const { classes } = props

    return (
        <div>
            <Paper className={classes.root}>
                <Grid container direction='row' className={classes.grid}>
                    <Grid item xs={11}>
                        dskajdksahs
                    </Grid>
                    <Grid item xs={1}>
                        <Switch
                            color="primary"
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(PaperSubject)