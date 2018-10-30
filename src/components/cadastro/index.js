import React from 'react';
import Sidebar from '../Sidebar';
import Cadastro from './Cadastro';

function TelaCadastro() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Cadastro />
    </div>
  );
}

export default TelaCadastro;
