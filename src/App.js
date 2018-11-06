import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'

import Login from './components/Login';
import RecuperarSenha from './components/RecuperarSenha';
import Cadastro from './components/Cadastro';
import Dashboard from './components/Dashboard';
import NovoTutor from './components/novoTutor';
import EscolhaDoModelo from './components/CriacaoTutor/EscolhaDoModelo';
import StepperPassoaPasso from './components/CriacaoTutor/PassoaPasso';
import './App.css';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

function *teste(){
  console.log('testando redux-saga')
}

sagaMiddleware.run(teste)

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#445aa4',
      main: '#003175',
      dark: '#000a49',
    },
  },
});

const App = () => (
  <Provider store={store}>
    <Router>
      <MuiThemeProvider theme={theme}>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/recuperar-senha" component={RecuperarSenha} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/novo-tutor" component={NovoTutor} />
          <Route path="/escolha-do-modelo" component={EscolhaDoModelo} />
          <Route path="/passo-a-passo" component={StepperPassoaPasso} />
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default App;
