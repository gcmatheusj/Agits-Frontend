import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Switch, Paper } from '@material-ui/core';

import styles from './styles';

const PaperSubject = (props) => {

    const { classes } = props

    return (
        <div>
            <Paper className={classes.rootPaper}>
                <Grid container direction='row' className={classes.gridPaper}>
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