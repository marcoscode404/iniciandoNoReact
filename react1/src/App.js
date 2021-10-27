import React from "react";
import styled from 'styled-components';

const Site = styled.div`
  color:#FF0000;
  font-size:18px;
  background-color:#00FF00;
  height: 400px;
  width: 400px;
  
  
`;
const Botao = styled.button`
  font-size: 18px;
  background-color: red;
  margin: 5px;
`;



function App(){
  return <>
    <Site>
      <Botao>Clique aqui!</Botao>
      <Botao>Clique aqui!</Botao>
    </Site>
  
  </>
}


export default App;
