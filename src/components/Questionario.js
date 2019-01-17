import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Resumo from './Resumo'
import Ferramenta from './Ferramenta'
import { CardContent } from '@material-ui/core'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import Logo from '../assets/ufal.png'
import Nees from '../assets/nees.png'
import axios from 'axios'

import Header from './Header'

const styles = theme => ({
  styleImagem: {
    height: "150px",
  },
  root: {
    width: '100%',
    align: 'center'
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  styleCard: {
    marginTop: "60px"
  },
  styleText: {
    marginTop: "10px"
  },
  styleCard2: {
    marginBottom: "10px"
  }
})

function getSteps() {
  return ['Ferramenta de Configuração', 'Resumo do Tutor']
}

class Questionario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,
      ferramenta: [],
      valor1: 5,
      valor2: 5,
      valor3: 5
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Ferramenta
            valores={this.state.ferramenta}
            onChange={this.handleChangeFerramenta}
          />
        )
      case 1:
        return (
          <Resumo
            valores={this.state}
            onChangeSlider1={this.handleChangeResumo1}
            onChangeSlider2={this.handleChangeResumo2}
            onChangeSlider3={this.handleChangeResumo3}
          />
        )
      default:
        return 'Unknown step'
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChange = (event) => {
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

  handleChangeFerramenta = (name, posicao) => (event, value) => {
    let newVetor = this.state.ferramenta
    newVetor[posicao] = value
    this.setState({
      ferramenta: newVetor
    })
    window.sessionStorage.setItem(name, value)
  }

  handleChangeResumo1 = (event, valor1) => {
    this.setState({ valor1: valor1 })
    window.sessionStorage.setItem("valor1", valor1)
  }

  handleChangeResumo2 = (event, valor2) => {
    this.setState({ valor2: valor2 })
    window.sessionStorage.setItem("valor2", valor2)
  }

  handleChangeResumo3 = (event, valor3) => {
    this.setState({ valor3: valor3 })
    window.sessionStorage.setItem("valor3", valor3)
  }

  handleSubmit(event) {
    event.preventDefault()
    axios.post('https://agits-87987.firebaseio.com/Respostas.json', this.state)
    console.log('Teste')
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    })
  }

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    })
  }

  render() {
    const { classes } = this.props
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <Header title='Questionário'>
        <Card className={classes.styleCard}>
          <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                )
              })}
            </Stepper>
            <div>
              <Divider />
            </div>
            <div>
              {this.state.activeStep === steps.length ? (
                <div className={classes.styleCard2}>
                  <Typography variant="display1" component="label" align="center" className={classes.styleText}>
                    <strong>Autoria de Sistemas Educacionais Adaptativos</strong>
                  </Typography>
                  <br /><div align="center">
                    <img src={Logo} className={classes.styleImagem} alt="" />
                    <img src={Nees} className={classes.styleImagem} alt="" />
                  </div>
                  <Typography variant="title" component="label" align="center">
                    <br />Obrigado por participar deste estudo! Qualquer dúvida, entre em contato com o pesquisador abaixo:
                </Typography>
                  <Typography variant="title" component="label" align="center">
                    Diego Dermeval, Universidade Federal de Alagoas, <a href="mailto:diegodermeval@copin.ufcg.edu.br">diegodermeval@copin.ufcg.edu.br</a>
                  </Typography>
                </div>
              ) : (
                  <CardContent>
                    <CardActions>
                      <div className={classes.instructions}>{this.getStepContent(activeStep)}</div>
                    </CardActions>
                    <div>
                      <Divider />
                      <br /><Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                      >
                        Voltar
                    </Button>
                      {activeStep === steps.length - 1 ? (
                        <Button variant="contained" color="primary" onClick={(event) => { this.handleNext(event); this.handleSubmit(event) }}>
                          Finalizar
                      </Button>
                      ) : (
                          <Button variant="contained" color="primary" onClick={this.handleNext}>
                            Próximo
                      </Button>
                        )}

                    </div>
                  </CardContent>
                )}
            </div>
          </div>
        </Card>
      </Header>
    )
  }
}

Questionario.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Questionario)