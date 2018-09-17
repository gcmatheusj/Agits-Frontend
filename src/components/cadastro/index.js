import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Cadastro from './Cadastro';

class TelaCadastro extends Component {
  render() {
    return (
      <div style={{ display: "flex", }}>
        <Sidebar /> 
        <Cadastro />        
      </div>
    )
  }
}

export default TelaCadastro