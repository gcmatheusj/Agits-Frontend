import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider'
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom'

import DefineDomain from '../../DefineDomain'
import { Grid } from '@material-ui/core';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

export default class AlertDialogSlide extends React.Component {
    

    render() {
        return (
            <Dialog
                open={this.props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description">
                <DialogContent>
                    <DefineDomain />
                </DialogContent>
                <Grid style={{ padding: 24 }} container justify="flex-start">
                    <Button onClick={this.props.handleClose} style={{ marginRight: 10 }} variant="contained" color="primary">
                        Cancel
                    </Button>
                    <Button component={Link} to={this.props.adress} variant="contained" size="medium" onClick={this.props.handleClose} color="primary">
                        Next
                    </Button>
                </Grid>
            </Dialog>
        )
    }
}