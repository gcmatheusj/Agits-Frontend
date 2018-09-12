import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css'
import TelaLogin from './TelaLogin'
import RecuperarSenha from './components/recuperarSenha'
import Cadastro from './Cadastro'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={TelaLogin} />
          <Route path='/recuperar-senha' component={RecuperarSenha} />
          <Route path='/cadastro' component={Cadastro} />
        </div>
      </Router>
    )
  }
}

export default App
