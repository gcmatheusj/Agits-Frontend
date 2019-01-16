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
      activeStep: 0,
      resposta1: null,
      resposta2: null,
      resposta3: null,
      resposta4: null,
      resposta5: null,
      resposta6: null,
      resposta7: null,
      valorFerramenta1: 4,
      valorFerramenta2: 4,
      valorFerramenta3: 4,
      valorFerramenta4: 4,
      valorFerramenta5: 4,
      valorFerramenta6: 4,
      valorFerramenta7: 4,
      valorFerramenta8: 4,
      valorFerramenta9: 4,
      valorFerramenta10: 4,
      valorFerramenta11: 4,
      valorFerramenta12: 4,
      valorFerramenta13: 4,
      valorFerramenta14: 4,
      valorFerramenta15: 4,
      valorFerramenta16: 4,
      valorFerramenta17: 4,
      valorFerramenta18: 4,
      valorFerramenta19: 4,
      valorFerramenta20: 4,
      valorFerramenta21: 4,
      valorFerramenta22: 4,
      valorFerramenta23: 4,
      valorFerramenta24: 4,
      valorFerramenta25: 4,
      valorFerramenta26: 4,
      valor1: 5,
      valor2: 5,
      valor3: 5
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

  handleChangeDemografico(event) {
    if (event.target.name === 'sexualidade') {
      this.setState({ resposta1: event.target.value })
      window.sessionStorage.setItem("resposta1", event.target.value)
    } else if (event.target.name === 'idade') {
      this.setState({ resposta2: event.target.value })
      window.sessionStorage.setItem("resposta2", event.target.value)
    } else if (event.target.name === 'ocupação') {
      this.setState({ resposta3: event.target.value })
      window.sessionStorage.setItem("resposta3", event.target.value)
    } else if (event.target.name === 'escolaridade') {
      this.setState({ resposta4: event.target.value })
      window.sessionStorage.setItem("resposta4", event.target.value)
    } else if (event.target.name === 'habilidades') {
      this.setState({ resposta5: event.target.value })
      window.sessionStorage.setItem("resposta5", event.target.value)
    } else if (event.target.name === 'treinamento') {
      this.setState({ resposta6: event.target.value })
      window.sessionStorage.setItem("resposta6", event.target.value)
    } else if (event.target.name === 'usoTecnologiasEducacionais') {
      this.setState({ resposta7: event.target.value })
      window.sessionStorage.setItem("resposta7", event.target.value)
    }
  }

  next = () => {
    if (this.state.position < 1) {
      this.setState({
        position: this.state.position+1
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

          <Dialog open={!complete} maxWidth='lg'>
            <DialogContent>
              {position === 0 ?
                <Termo checked={checked} handleChange={this.handleChange} /> :
                <Demografico respostas={this.state.respostas} onChangeValue={this.handleChangeDemografico}/>
              }
            </DialogContent>
            <DialogActions>
              <Button variant='contained' color='primary' disabled={!checked} onClick={this.next}>
                Next
              </Button>
            </DialogActions>
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