import React, { Component } from 'react'
import Login from './login'
import 'typeface-roboto'
import Sidebar from './sidebar';

class App extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar></Sidebar>
        <div style={{ flex: "1 1 0%",
         padding: "10px"}}>  <Login></Login> </div>
       
      </div>
    )
  }
}

export default App
