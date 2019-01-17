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
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Ferramenta 
            valores={this.state}
            onChangeFerramenta1 = {this.handleChangeFerramenta1}
            onChangeFerramenta2 = {this.handleChangeFerramenta2}
            onChangeFerramenta3 = {this.handleChangeFerramenta3}
            onChangeFerramenta4 = {this.handleChangeFerramenta4}
            onChangeFerramenta5 = {this.handleChangeFerramenta5}
            onChangeFerramenta6 = {this.handleChangeFerramenta6}
            onChangeFerramenta7 = {this.handleChangeFerramenta7}
            onChangeFerramenta8 = {this.handleChangeFerramenta8}
            onChangeFerramenta9 = {this.handleChangeFerramenta9}
            onChangeFerramenta10 = {this.handleChangeFerramenta10}
            onChangeFerramenta11 = {this.handleChangeFerramenta11}
            onChangeFerramenta12 = {this.handleChangeFerramenta12}
            onChangeFerramenta13 = {this.handleChangeFerramenta13}
            onChangeFerramenta14 = {this.handleChangeFerramenta14}
            onChangeFerramenta15 = {this.handleChangeFerramenta15}
            onChangeFerramenta16 = {this.handleChangeFerramenta16}
            onChangeFerramenta17 = {this.handleChangeFerramenta17}
            onChangeFerramenta18 = {this.handleChangeFerramenta18}
            onChangeFerramenta19 = {this.handleChangeFerramenta19}
            onChangeFerramenta20 = {this.handleChangeFerramenta20}
            onChangeFerramenta21 = {this.handleChangeFerramenta21}
            onChangeFerramenta22 = {this.handleChangeFerramenta22}
            onChangeFerramenta23 = {this.handleChangeFerramenta23}
            onChangeFerramenta24 = {this.handleChangeFerramenta24}
            onChangeFerramenta25 = {this.handleChangeFerramenta25}
            onChangeFerramenta26 = {this.handleChangeFerramenta26}
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

  handleChangeFerramenta1 = (event, valorFerramenta1) => {
    this.setState({ valorFerramenta1 })
    window.sessionStorage.setItem("valorFerramenta1", valorFerramenta1)
  }

  handleChangeFerramenta2 = (event, valorFerramenta2) => {
    this.setState({ valorFerramenta2 })
    window.sessionStorage.setItem("valorFerramenta2", valorFerramenta2)
  }

  handleChangeFerramenta3 = (event, valorFerramenta3) => {
    this.setState({ valorFerramenta3 })
    window.sessionStorage.setItem("valorFerramenta3", valorFerramenta3)
  }

  handleChangeFerramenta4 = (event, valorFerramenta4) => {
    this.setState({ valorFerramenta4 })
    window.sessionStorage.setItem("valorFerramenta4", valorFerramenta4)
  }

  handleChangeFerramenta5 = (event, valorFerramenta5) => {
    this.setState({ valorFerramenta5 })
    window.sessionStorage.setItem("valorFerramenta5", valorFerramenta5)
  }

  handleChangeFerramenta6 = (event, valorFerramenta6) => {
    this.setState({ valorFerramenta6 })
    window.sessionStorage.setItem("valorFerramenta6", valorFerramenta6)
  }

  handleChangeFerramenta7 = (event, valorFerramenta7) => {
    this.setState({ valorFerramenta7 })
    window.sessionStorage.setItem("valorFerramenta7", valorFerramenta7)
  }

  handleChangeFerramenta8 = (event, valorFerramenta8) => {
    this.setState({ valorFerramenta8 })
    window.sessionStorage.setItem("valorFerramenta8", valorFerramenta8)
  }

  handleChangeFerramenta9 = (event, valorFerramenta9) => {
    this.setState({ valorFerramenta9 })
    window.sessionStorage.setItem("valorFerramenta9", valorFerramenta9)
  }

  handleChangeFerramenta10 = (event, valorFerramenta10) => {
    this.setState({ valorFerramenta10 })
    window.sessionStorage.setItem("valorFerramenta10", valorFerramenta10)
  }

  handleChangeFerramenta11 = (event, valorFerramenta11) => {
    this.setState({ valorFerramenta11 })
    window.sessionStorage.setItem("valorFerramenta11", valorFerramenta11)
  }

  handleChangeFerramenta12 = (event, valorFerramenta12) => {
    this.setState({ valorFerramenta12 })
    window.sessionStorage.setItem("valorFerramenta12", valorFerramenta12)
  }

  handleChangeFerramenta13 = (event, valorFerramenta13) => {
    this.setState({ valorFerramenta13 })
    window.sessionStorage.setItem("valorFerramenta13", valorFerramenta13)
  }

  handleChangeFerramenta14 = (event, valorFerramenta14) => {
    this.setState({ valorFerramenta14 })
    window.sessionStorage.setItem("valorFerramenta1", valorFerramenta14)
  }

  handleChangeFerramenta15 = (event, valorFerramenta15) => {
    this.setState({ valorFerramenta15 })
    window.sessionStorage.setItem("valorFerramenta15", valorFerramenta15)
  }

  handleChangeFerramenta16 = (event, valorFerramenta16) => {
    this.setState({ valorFerramenta16 })
    window.sessionStorage.setItem("valorFerramenta16", valorFerramenta16)
  }

  handleChangeFerramenta17 = (event, valorFerramenta17) => {
    this.setState({ valorFerramenta17 })
    window.sessionStorage.setItem("valorFerramenta17", valorFerramenta17)
  }

  handleChangeFerramenta18 = (event, valorFerramenta18) => {
    this.setState({ valorFerramenta18 })
    window.sessionStorage.setItem("valorFerramenta18", valorFerramenta18)
  }

  handleChangeFerramenta19 = (event, valorFerramenta19) => {
    this.setState({ valorFerramenta19 })
    window.sessionStorage.setItem("valorFerramenta19", valorFerramenta19)
  }

  handleChangeFerramenta20 = (event, valorFerramenta20) => {
    this.setState({ valorFerramenta20 })
    window.sessionStorage.setItem("valorFerramenta20", valorFerramenta20)
  }

  handleChangeFerramenta21 = (event, valorFerramenta21) => {
    this.setState({ valorFerramenta21 })
    window.sessionStorage.setItem("valorFerramenta21", valorFerramenta21)
  }

  handleChangeFerramenta22 = (event, valorFerramenta22) => {
    this.setState({ valorFerramenta22 })
    window.sessionStorage.setItem("valorFerramenta22", valorFerramenta22)
  }

  handleChangeFerramenta23 = (event, valorFerramenta23) => {
    this.setState({ valorFerramenta23 })
    window.sessionStorage.setItem("valorFerramenta23", valorFerramenta23)
  }

  handleChangeFerramenta24 = (event, valorFerramenta24) => {
    this.setState({ valorFerramenta24 })
    window.sessionStorage.setItem("valorFerramenta24", valorFerramenta24)
  }

  handleChangeFerramenta25 = (event, valorFerramenta25) => {
    this.setState({ valorFerramenta25 })
    window.sessionStorage.setItem("valorFerramenta25", valorFerramenta25)
  }

  handleChangeFerramenta26 = (event, valorFerramenta26) => {
    this.setState({ valorFerramenta26 })
    window.sessionStorage.setItem("valorFerramenta26", valorFerramenta26)
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
    )
  }
}

Questionario.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Questionario)