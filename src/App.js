import React, { Component, Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';

// import Login from './components/Login';
// import RecuperarSenha from './components/RecuperarSenha';
// import Cadastro from './components/Cadastro';
// import Dashboard from './components/Dashboard';
// import DefineDomain from './components/DefineDomain';

import EscolhaDoModelo from './components/CriacaoTutor/EscolhaDoModelo';
import StepperPassoaPasso from './components/CriacaoTutor/PassoaPasso';
import StepperUsandoModelo from "./components/CriacaoTutor/UsandoModelo";

// import VisualizarTutores from './components/VisualizarTutores'
import Questionario from './components/Questionario'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63a4ff',
      main: '#1976d2',
      dark: '#004ba0',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default class App extends Component {
  state = {
    demografico: {},
    usandoModelo: {},
    passoAPasso: {},
    creation: null
  }

  handleExperimento = () => {
    const { demografico, usandoModelo, passoAPasso } = this.state

    const data = JSON.parse({
      demografico,
      usandoModelo,
      passoAPasso
    })
  }

  componentDidMount = () => {
    !window.sessionStorage.getItem('modelConfig') &&
      window.sessionStorage.setItem('modelConfig', Math.floor((Math.random() * 2) + 1))
  }

  handleChangeModelConfig = () => {
    const modelConfig = Number(window.sessionStorage.getItem('modelConfig'))
    window.sessionStorage.setItem('modelConfig', modelConfig === 1 ? 2 : 1)
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>
              <div>
                {/* <Route exact path="/" component={Login} /> */}
                {/* <Route path="/recuperar-senha" component={RecuperarSenha} /> */}
                {/* <Route path="/cadastro" component={Cadastro} /> */}
                {/* <Route path="/dashboard" component={Dashboard} /> */}
                <Route exact path="/" component={EscolhaDoModelo} />
                <Route exact path="/passo-a-passo" component={StepperPassoaPasso} />
                <Route exact path="/usando-modelo" component={StepperUsandoModelo} />
                {/* <Route path="/visualizar-tutores" component={VisualizarTutores} /> */}
                {/* <Route path="/define-domain" component={DefineDomain} /> */}
                <Route exact path="/questionario" render={props => <Questionario {...props} handleChangeModel={this.handleChangeModelConfig} />} />
              </div>
            </MuiThemeProvider>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}
