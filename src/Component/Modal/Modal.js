import React from 'react'
import './Modal.css'

const Modal = ({ children, clicked, show }) => {
   return (
      <main className={show ? 'overlay show-overlay' : 'overlay'} onClick={clicked}>
         <section className={show ? 'modal-container show-modal' : 'modal-container'}>
            {children}
         </section>
      </main>
   )
}
export default Modal
