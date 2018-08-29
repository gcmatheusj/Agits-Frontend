import React, { Component } from 'react'
import Login from './login'
import 'typeface-roboto'
import Sidebar from './sidebar';
import './App.css'

class TelaLogin extends Component {
  render() {
    return (
      <div style={{ display: "flex", }}>
        <Sidebar></Sidebar> 
         <Login></Login>         
      </div>
    )
  }
}

export default TelaLogin