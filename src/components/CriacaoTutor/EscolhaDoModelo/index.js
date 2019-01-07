import React from "react"
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Card, CardContent, CardActionArea, Divider } from '@material-ui/core'
import PropTypes from 'prop-types'

import Header from "../../Header"

import AlertDialogSlide from './Dialog'

import { styles } from './styles'

import scratch from '../../../assets/scratch2.png'
import template from '../../../assets/template.png'

const opcoesModelo = [
    {
        adress: '/passo-a-passo',
        img: scratch,
        title: 'Criar seu tutor do zero',
        subtitle: 'Crie um novo tutor passo a passo e explore todos os recursos que trazemos para você.'
    },
    {
        adress: '/usando-modelo',
        img: template,
        title: 'Usando modelo',
        subtitle: 'Economize tempo usando tutor já configurado para uso! Mas fique à vontade para modificar.'
    }
]

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

                        {opcoesModelo.map((v, k) => {
                            return (
                                <Card key={k} className={classes.card}>
                                    <CardActionArea className={classes.cardAction} value="teste" onClick={this.handleClickOpen(v.adress)}>
                                        <img src={v.img} alt="" className={classes.img} />
                                        <CardContent>
                                            <Typography className={classes.titleCard} gutterBottom align="center">
                                                {v.title}
                                            </Typography>
                                            <Typography className={classes.textCard} variant="body1" gutterBottom>
                                                {v.subtitle}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        })}
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