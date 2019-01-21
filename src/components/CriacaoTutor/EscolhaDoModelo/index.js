import React from "react"
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Card, CardContent, CardActionArea, Divider, Dialog, DialogContent, DialogActions, Button } from '@material-ui/core'
import PropTypes from 'prop-types'

import Header from "../../Header"
import Termo from '../../TermoConsentimento'
import Demografico from '../../Demografico'

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
    adress: '#',
    complete: false,
    position: 0,
    checked: false,
    respostas: {
      resposta1: null,
      resposta2: null,
      resposta3: null,
      resposta4: null,
      resposta5: null,
      resposta6: null,
      resposta7: null,
    }
  };

  handleChange = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

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

  handleChangeDemografico = (event) => {
    if (event.target.name === 'sexualidade') {
      this.setState({
        respostas: {
          ...this.state.respostas,
          resposta1: event.target.value
        }
      })
      window.sessionStorage.setItem("resposta1", event.target.value)
    } else if (event.target.name === 'idade') {
      this.setState({
        respostas: {
          ...this.state.respostas,
          resposta2: event.target.value
        }
      })
      window.sessionStorage.setItem("resposta2", event.target.value)
    } else if (event.target.name === 'ocupação') {
      this.setState({
        respostas: {
          ...this.state.respostas, resposta3: event.target.value
        }
      })
      window.sessionStorage.setItem("resposta3", event.target.value)
    } else if (event.target.name === 'escolaridade') {
      this.setState({
        respostas: {
          ...this.state.respostas, resposta4: event.target.value
        }
      })
      window.sessionStorage.setItem("resposta4", event.target.value)
    } else if (event.target.name === 'habilidades') {
      this.setState({
        respostas: {
          ...this.state.respostas, resposta5: event.target.value
        }
      })
      window.sessionStorage.setItem("resposta5", event.target.value)
    } else if (event.target.name === 'treinamento') {
      this.setState({
        respostas: {
          ...this.state.respostas, resposta6: event.target.value
        }
      })
      window.sessionStorage.setItem("resposta6", event.target.value)
    } else if (event.target.name === 'usoTecnologiasEducacionais') {
      this.setState({
        respostas: {
          ...this.state.respostas, resposta7: event.target.value
        }
      })
      window.sessionStorage.setItem("resposta7", event.target.value)
    }
  }

  next = () => {
    if (this.state.position < 1) {
      this.setState({
        position: this.state.position + 1
      })
    } else {
      this.setState({
        complete: true
      })
    }
  }

  render() {
    const { classes } = this.props
    const { complete, position, checked } = this.state
    return (
      <div className={classes.root}>
        <Header title="AGITS">
          <Typography className={classes.title} variant="subtitle1">
            Criar Tutor
          </Typography>
          <Divider />
          <Typography className={classes.subtitle} variant="subtitle1">
            Você pode começar selecionando criar tutor do zero ou usando o modelo.
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
                    <CardContent className={classes.cardContent}>
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

          <Dialog id='dialogTermo' open={!complete} maxWidth='lg'>
            <DialogContent>
              {position === 0 ?
                <Termo checked={checked} handleChange={this.handleChange} next={this.next} /> :
                <Demografico respostas={this.state.respostas} onChangeValue={this.handleChangeDemografico} />
              }
            </DialogContent>
            {
              position === 1 ? (
                <DialogActions>
                  <Button variant='contained' color='primary' disabled={!checked} onClick={this.next}>
                    Pronto
                  </Button>
                </DialogActions>
              ) : (
                ''
              )
            }
          </Dialog>

        </Header>
      </div>
    )
  }

}
EscolhaDoModelo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(EscolhaDoModelo)