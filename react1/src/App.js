import React, { useState } from "react";
import Modal from "./components/Modal";


function App() {

  // essa const que tem um array com os parametros do modal nesse momento ele está com false
  const [modalVisible, setModalVisible] = useState(false);

  // recebe a propriedade do botao e ao clicar ele abre o modal
  const handleButtonClick = () => {
    setModalVisible(true);
  }

  return(
    <>
    {/* abre modal ao clicar no botao */}
      <button onClick={handleButtonClick}>Abrir Modal</button>

    {/* modal visivel e não visivel */}
     <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>testando 1,2,3...</h1>
      </Modal>
    </>
  );
}

export default App;
