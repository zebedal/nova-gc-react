
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'


export const ModalContext = React.createContext();


export const ModalContextProvider = props => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});


  return (
    <ModalContext.Provider value={{ opened: modalOpen, openModal: setModalOpen, content: modalContent, setContent: setModalContent }} >
      <ModalWrapper {...modalContent} opened={modalOpen} openModal={setModalOpen} />
      {props.children}
    </ModalContext.Provider>
  )
}

const ModalWrapper = props => (
  <React.Fragment>
    {ReactDOM.createPortal(<Modal {...props} />, document.getElementById('modal'))}
  </React.Fragment>
)



export default ModalWrapper