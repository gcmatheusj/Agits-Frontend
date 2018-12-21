import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider'
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import DefineDomain from '../../DefineDomain'
import { Grid, Typography, TextField } from '@material-ui/core';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

const styles = theme => ({
    titleGrid: {
        textAlign: 'left',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        },
    },
    textField: {
        marginTop: 25,
        width: '100%',
    },
})

class AlertDialogSlide extends React.Component {


    render() {

        const { classes } = this.props

        return (
            <Dialog
                open={this.props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogContent>
                    <Grid container spacing={16}>
                        <Grid item xs={12} className={classes.titleGrid}>
                            <Typography className={classes.title} variant="subtitle1">
                                Name of your Tutor
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Divider />
                            <TextField
                                id="outlined-with-placeholder"
                                label="Input a name here..."
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <Grid style={{ padding: 24 }} container justify="flex-start">
                    <Button onClick={this.props.handleClose} style={{ marginRight: 10 }} >
                        Cancel
                    </Button>
                    <Button component={Link} to={this.props.adress} variant="contained" onClick={this.props.handleClose} color="primary">
                        Next
                    </Button>
                </Grid>
            </Dialog>
        )
    }
}

export default withStyles(styles)(AlertDialogSlide)