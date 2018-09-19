import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './components/login'
import RecuperarSenha from './components/recuperarSenha'
import Cadastro from './components/cadastro/'
import Dashboard from './components/dashboard'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login} />
          <Route path='/recuperar-senha' component={RecuperarSenha} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </Router>
    )
  }
}

export default App
