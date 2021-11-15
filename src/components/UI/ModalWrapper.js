
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'


export const ModalContext = React.createContext();



export const ModalContextProvider = props => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});


  return (
    <ModalContext.Provider value={{ opened: modalOpen, openModal: setModalOpen, content: modalContent, setContent: setModalContent }} >
      {props.children}
    </ModalContext.Provider>
  )
}




export default ModalContextProvider