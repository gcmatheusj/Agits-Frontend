import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../redux/actions/experimento'
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
    width: '100%',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      marginLeft: 10,
      marginTop: 15,
      marginBottom: 15
    }
  },
  content: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem'
    }
  },
  styleCard: {
    marginTop: 24
  },
  styleText: {
    marginTop: "10px",
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem'
    }
  },
  styleCard2: {
    marginBottom: "10px",
    padding: 20
  },
})

function getSteps() {
  return ['Ferramenta de Configuração']
}

class Questionario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,
      ferramenta: [
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        'Neutro',
        5,
        '',
        ''
      ],
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
      // case 1:
      //   return (
      //     <Resumo
      //       valores={this.state}
      //       onChangeSlider1={this.handleChangeResumo1}
      //       onChangeSlider2={this.handleChangeResumo2}
      //       onChangeSlider3={this.handleChangeResumo3}
      //     />
      //   )
      default:
        return 'Unknown step'
    }
  }

  //Ele ta pegando o valor e ta jogando 27 vezes

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

  handleChangeFerramenta = (name, posicao, text) => (event, value) => {
    let newVetor = this.state.ferramenta

    const v = text ? event.target.value : value

    newVetor[posicao] = v

    this.setState({
      ferramenta: newVetor
    })
    window.sessionStorage.setItem(name, v)
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

  handleSubmit = (event) => {
    this.props.changePosition()
    this.props.changeModel()
    event.preventDefault()
  }

  handleSubmitExperimento = async (event) => {
    this.props.changePosition()

    await this.handleRespostas()

    const { 
      demografico, 
      passoAPasso, 
      usandoModelo, 
      duracaoConfigPassoAPasso, 
      duracaoConfigUsandoModelo 
    } = this.props.experimento

    await axios.post('https://agits-icalt.firebaseio.com/data.json', {
      demografico,
      passoAPasso,
      usandoModelo,
      duracaoConfigPassoAPasso,
      duracaoConfigUsandoModelo
    })

    event.preventDefault()
  }

  handleRespostas = () => {
    const { questionario } = this.props.experimento

    const inicioScratch = new Date(window.sessionStorage.getItem('StartedScratch')) 
    const fimScratch = new Date(window.sessionStorage.getItem('FinishedScratch'))

    const inicioModel = new Date(window.sessionStorage.getItem('StartedModel')) 
    const fimModel = new Date(window.sessionStorage.getItem('FinishedModel'))

    let duracaoScratch = fimScratch - inicioScratch
    let duracaoModel = fimModel - inicioModel

    if (questionario === '/usando-modelo') {
      this.props.handleUsandoModeloRequest(this.state.ferramenta)
      this.props.handleDuracaoConfigUsandoModeloRequest(duracaoModel)
    }

    if (questionario === '/passo-a-passo') {
      this.props.handlePassoAPassoRequest(this.state.ferramenta)
      this.props.handleDuracaoConfigPassoAPassoRequest(duracaoScratch)
    }
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
    const { classes, configPosition, modelConfig } = this.props
    const steps = getSteps();
    const { activeStep } = this.state;

    const um = modelConfig === 1 ? 'Passo a Passo' : 'Usando Modelo'
    const dois = modelConfig === 2 ? 'Passo a Passo' : 'Usando Modelo'

    const obrigado = <Fragment>
      <Typography className={classes.content} variant="h6" component="label" align="center">
        <br />Obrigado por participar deste estudo! Qualquer dúvida, entre em contato com o pesquisador abaixo:
      </Typography>
      <Typography  className={classes.content} variant="h6" component="label" align="center">
        Diego Dermeval, Universidade Federal de Alagoas, <a href="mailto:diego.matos@famed.ufal.br">diego.matos@famed.ufal.br</a>
      </Typography>
      <Typography  className={classes.content} variant="h6" component="label" align="center">
        Daniel Gomes, <a href="mailto:gomes.dg3@gmail.com">gomes.dg3@gmail.com</a>
      </Typography>
      <Typography  className={classes.content} variant="h6" component="label" align="center">
        Henrique de Couto Melo, <a href="mailto:henrique.melo@arapiraca.ufal.br">henrique.melo@arapiraca.ufal.br</a>
      </Typography>
      <Typography  className={classes.content} variant="h6" component="label" align="center">
        Italo Jonas de Moura Lima, <a href="mailto:italojonas@hotmail.com">italojonas@hotmail.com</a>
      </Typography>
      <Typography  className={classes.content} variant="h6" component="label" align="center">
        José Matheus Gomes Castro, <a href="mailto:diego.matos@famed.ufal.br">jose.matheus@arapiraca.ufal.br</a>
      </Typography>
    </Fragment>
    const proximaEtapa = <Fragment>
      <Typography variant="h6" component="label" align="center">
        <br />Nessa etapa você configurou um sistema educational adaptativo através de um processo {um}.
      </Typography>
      <Typography variant="h6" component="label" align="center">
        Por favor, siga para a próxima etapa, clicando no botão 'Criar Tutor' no Menu lateral onde você irá configurar um sistema educacional adaptativo através de um processo {dois}.
      </Typography>
    </Fragment>

    return (
      <Header title='Questionário'>
        <Typography className={classes.title} variant="h4">
          Ferramenta de Configuração
        </Typography>
        <Divider />
        <Card className={classes.styleCard}>
          <div>
            <div>
              {this.state.activeStep === steps.length ? (
                <div className={classes.styleCard2}>
                  <Typography variant="h4" component="label" align="center" className={classes.styleText}>
                    <strong>Autoria de Sistemas Educacionais Adaptativos</strong>
                  </Typography>
                  {configPosition > 1 ? obrigado : proximaEtapa}
                  <br /><div align="center">
                    <img src={Logo} className={classes.styleImagem} alt="" />
                    <img src={Nees} className={classes.styleImagem} alt="" />
                  </div>

                </div>
              ) : (
                  <CardContent>
                    <CardActions>
                      <div className={classes.instructions}>{this.getStepContent(activeStep)}</div>
                    </CardActions>
                    <div>
                      <Divider />
                      <br />
                      {
                        configPosition > 1 ? (
                          <Button variant="contained" color="primary" onClick={(event) => { this.handleNext(event); this.handleSubmitExperimento(event)}}>
                            Finalizar
                          </Button>
                        ) : (
                          <Button variant="contained" color="primary" onClick={(event) => { this.handleNext(event); this.handleSubmit(event); this.handleRespostas() }}>
                            Próximo
                          </Button>
                        )
                      }
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

const mapStateToProps = state => ({
  experimento: state.experimento
})

const mapDispatchToProps = dispatch => ({
  handlePassoAPassoRequest: respostasPassoAPasso => dispatch(ActionCreators.passoapassoRequest(respostasPassoAPasso)),
  handleDuracaoConfigPassoAPassoRequest: duracao => dispatch(ActionCreators.duracaoConfig(duracao)),
  handleDuracaoConfigUsandoModeloRequest: duracao => dispatch(ActionCreators.duracaoConfigUsandoModeloRequest(duracao)),
  handleUsandoModeloRequest: respostasUsandoModelo => dispatch(ActionCreators.usandomodeloRequest(respostasUsandoModelo))
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Questionario))