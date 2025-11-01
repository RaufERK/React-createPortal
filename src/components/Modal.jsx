import Button from './Button';
import { createPortal } from 'react-dom'



function Modal({ handleClose, children, actionBar }) {
  return createPortal(
    <div>
      <div onClick={handleClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>

      // белое поле внутри
      <div className="absolute inset-40 p-10 bg-white">

        <div className='flex flex-col justify-between h-full'>


          {children}
          <div className='flex justify-end'>

            {actionBar}
          </div>
        </div>

      </div>
    </div>,

    document.querySelector('.modal-container')

  )

}

export default Modal;
