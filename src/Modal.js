import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModalOpen,closeModal,correct,questions} = useGlobalContext();

  return (
    <div className={`${isModalOpen?"modal-container isOpen":"modal-container"}`}>
      <div className="modal-content">
         <h2>Congrats!</h2>
         <p>Your score {((correct/questions.length)*100).toFixed(0)} % </p>
        <button className="close-btn"
        onClick={closeModal}>
          Play again
        </button> 
      </div>
    </div>
  )
}

export default Modal
