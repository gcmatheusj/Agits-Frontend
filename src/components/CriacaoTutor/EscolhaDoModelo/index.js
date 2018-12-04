import React from "react"
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Card, CardContent, CardActionArea, Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Header from "../../Header";

import scratch from '../../../assets/scratch.png'
import template from '../../../assets/template.png'

const styles = theme => ({
    root: {
        flex: 1,
        width: '100%',
    },
    card: {
        maxWidth: 280,
        textAlign: "center",
        padding: 10,
        margin: 30,
        [theme.breakpoints.down('sm')]: {
            padding: 1,
            margin: 10,
        }
    },
    titleContainer: {
        marginTop: 10,
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        },
    },
    titleCard: {
        fontWeight: 'bold',
        fontSize: '1 rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem'
        }
    },
    textCard: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem'
        }
    },
    img: {
        height: 200,
        width: 200
    },
    container: {
        flexGrow: 1,
    },
    buttonContainer: {
        marginBottom: theme.spacing.unit * 2,
        marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            marginTop: 20
        }
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        justify: 'center'

    },
})

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class EscolhaDoModelo extends React.Component {
    state = {
        open: false,
    };

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
                <Header>
                    <Grid className={classes.titleContainer}>
                        <Typography className={classes.title} variant="subtitle1">
                            Create Tutor
                        </Typography>
                    </Grid>
                    <Grid container
                        className={classes.container}
                        justify="center"
                        alignItems="center">
                        <Card className={classes.card}>
                            <CardActionArea onClick={this.handleClickOpen}>
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
                                {"Use Google's location service?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    Let Google help apps determine location. This means sending anonymous location data to
                                    Google, even when no apps are running.
                                          </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Disagree
                                </Button>
                                <Button onClick={this.handleClose} color="primary">
                                    Agree
                                </Button>
                            </DialogActions>
                        </Dialog>
                        </Card>

                        <Card className={classes.card}>
<<<<<<< HEAD
                            <CardActionArea>
                                <img src={template} alt="" style={{ width: 160, height: 210 }} />
=======
                            <CardActionArea onClick={this.handleClickOpen}>
                                <img src={template} alt="" className={classes.img} />
>>>>>>> f55bc588207a25c1be790b9b16b48aeccf5ee370
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
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        className={classes.buttonContainer}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                        >
                            Next
                            </Button>
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