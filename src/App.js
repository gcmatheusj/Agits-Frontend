import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css'
import TelaLogin from './TelaLogin'
import RecuperarSenha from './RecuperarSenha'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={TelaLogin} />
          <Route path='/recuperar-senha' component={RecuperarSenha} />
        </div>
      </Router>
    )
  }
}

export default App
