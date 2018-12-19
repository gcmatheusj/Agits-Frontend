import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, Switch } from '@material-ui/core'

const styles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth: '100%',
      padding: 1,
      paddingBottom: 10,
      paddingTop: 10,
      [theme.breakpoints.down('sm')]: {
        padding: 1,
        marginTop: 10,
        marginBottom: 20,
      },
    },
    gridCard: {
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
    gridText: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
    titleCard: {
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
        textAlign: 'center',
      },
    },
    textCard: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
      },
    },
    img: {
        margin: 20,
        width: 100,
    },
  });

const StepsCard = (props) => {

    const {
        classes, img, title, description,
        type, switcher, value
    } = props;

    return (
        <div className={classes.root}>
            <Card>
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