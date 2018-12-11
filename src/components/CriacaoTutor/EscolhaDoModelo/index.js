import React from "react"
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Grid, Typography, Card, CardContent, CardActionArea, Button, Divider } from '@material-ui/core'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

import Header from "../../Header"

import { styles } from './styles'

import scratch from '../../../assets/scratch2.png'
import template from '../../../assets/template.png'

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class EscolhaDoModelo extends React.Component {
    state = {
        open: false,
        redirect: false,
        selectedModel: ''
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Header title="AGITS">
                    <Typography className={classes.title} variant="subtitle1">
                        Create Tutor
                    </Typography>
                    <Divider />
                    <Typography className={classes.subtitle} variant="subtitle1">
                        You can start by selecting create tutor from scratch or using template.
                    </Typography>
                    <Grid container
                        className={classes.container}
                        justify="center"
                        alignItems="center">
                        <Card className={classes.card}>
                            <CardActionArea className={classes.cardAction} value="teste" onClick={this.handleClickOpen}>
                                <img src={scratch} alt="" className={classes.img} />
                                <CardContent>
                                    <Typography className={classes.titleCard} gutterBottom align="center">
                                        Criar seu tutor do zero
                                    </Typography>
                                    <Typography className={classes.textCard} variant="body1" gutterBottom>
                                        Crie um novo tutor passo a passo e explore todos os recursos que trazemos para você.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Dialog
                                open={this.state.open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={this.handleClose}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description">
                                <DialogTitle id="alert-dialog-slide-title">
                                    {"Confirmation"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        Are you sure you want to choose this one?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary">
                                        No
                                </Button>
                                    <Button component={Link} to='/novo-tutor' nClick={this.handleClose} color="primary">
                                        Yes
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </Card>
                        <Card className={classes.card}>
                            <CardActionArea className={classes.cardAction} onClick={this.handleClickOpen}>
                                <img src={template} alt="" className={classes.img} />
                                <CardContent>
                                    <Typography className={classes.titleCard} align="center" gutterBottom>
                                        Usando modelo
                                        </Typography>
                                    <Typography className={classes.textCard} variant="body1" gutterBottom>
                                        Economize tempo usando tutor já configurado para uso! Mas fique à vontade para modificar.
                                        </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Header>
            </div>
        )
    }

}
EscolhaDoModelo.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EscolhaDoModelo)