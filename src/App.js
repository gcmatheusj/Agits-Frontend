import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';

import Login from './components/Login';
import RecuperarSenha from './components/RecuperarSenha';
import Cadastro from './components/Cadastro';
import Dashboard from './components/Dashboard';
import NovoTutor from './components/NovoTutor';
import DefineDomain from './components/DefineDomain';

import EscolhaDoModelo from './components/CriacaoTutor/EscolhaDoModelo';
import StepperPassoaPasso from './components/CriacaoTutor/PassoaPasso';
import StepperUsandoModelo from "./components/CriacaoTutor/UsandoModelo";

import VisualizarTutores from './components/VisualizarTutores'

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

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/recuperar-senha" component={RecuperarSenha} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/novo-tutor" component={NovoTutor} />
            <Route path="/escolha-do-modelo" component={EscolhaDoModelo} />
            <Route path="/passo-a-passo" component={StepperPassoaPasso} />
            <Route path="/usando-modelo" component={StepperUsandoModelo} />
            <Route path="/visualizar-tutores" component={VisualizarTutores} />
            <Route path="/define-domain" component={DefineDomain} />
          </div>
        </MuiThemeProvider>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
