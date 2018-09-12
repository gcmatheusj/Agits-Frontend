import React, { Component } from 'react'
import Login from './Login'
import Sidebar from './Sidebar'

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