import Button from './Button';
import { createPortal } from 'react-dom'



function Modal({ handleCLose, showModal }) {
  return createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>

      // белое поле внутри
      <div className="absolute inset-40 p-10 bg-white">




        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sunt aliquam vitae eos ducimus. Harum voluptatibus dicta, modi ipsam, excepturi quis ducimus et sapiente dolorum porro, incidunt magnam! Sequi, beatae numquam est magnam delectus, asperiores itaque consequatur quam accusantium deleniti repudiandae vero nisi voluptas minima voluptate repellendus perspiciatis voluptatum cumque.


        <Button onClick={handleCLose} primary>
          close
        </Button>

      </div>
    </div>,

    document.querySelector('.modal-container')

  )

}

export default Modal;
