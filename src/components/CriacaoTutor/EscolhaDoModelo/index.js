import React from "react"
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Card, CardContent, CardActionArea, Divider } from '@material-ui/core'
import PropTypes from 'prop-types'

import Header from "../../Header"

import AlertDialogSlide from './Dialog'

import { styles } from './styles'

import scratch from '../../../assets/scratch2.png'
import template from '../../../assets/template.png'

class EscolhaDoModelo extends React.Component {
    state = {
        open: false,
        redirect: false,
        selectedModel: '',
        adress: '#'
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    handleClickOpen = value => event => {
        this.setState({ open: true, adress: value });
    };

    handleClose = () => {
        this.setState({ open: false, adress: '' });
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
                            <CardActionArea className={classes.cardAction} value="teste" onClick={this.handleClickOpen('/novo-tutor')}>
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
                        </Card>
                        <Card className={classes.card}>
                            <CardActionArea className={classes.cardAction} onClick={this.handleClickOpen('/usando-modelo')}>
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
                    <AlertDialogSlide
                        adress={this.state.adress}
                        handleClose={this.handleClose}
                        open={this.state.open}
                    />
                </Header>
            </div>
        )
    }

}
EscolhaDoModelo.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EscolhaDoModelo)