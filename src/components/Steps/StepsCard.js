import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, Switch } from '@material-ui/core';

import styles from './styles';

const StepsCard = (props) => {

    const {
        classes, img, title, description,
        type, switcher, value
    } = props;

    return (
        <div className={classes.rootStepsCard}>
            <Card style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Grid container style={{ padding: 20 }}>
                    <Grid item xs={12}>
                        <Grid container direction="row" spacing={16} className={classes.gridCard}>
                            <img className={classes.img} alt="complex" src={img} />
                            <Grid className={classes.gridText} container item xs={12} sm>
                                <Grid item xs container direction="column" spacing={16}>
                                    <Grid item xs>
                                        <Typography className={classes.titleCard} gutterBottom variant="h6">
                                            {title}
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" className={classes.textCard}>
                                            {description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Switch
                                checked={type}
                                onChange={switcher}
                                value={value}
                                color="primary"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default withStyles(styles)(StepsCard)