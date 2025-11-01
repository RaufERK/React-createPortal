import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(prev => !prev);
  };

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = <Button primary onClick={handleClose}>I Accept</Button>

  const modal = <Modal handleClose={handleClose} actionBar={actionBar}>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni molestiae expedita blanditiis reiciendis, eveniet fuga dolore iste! Non ratione cumque tenetur labore minus maxime molestias quis, dolore iure earum alias mollitia pariatur, delectus quia eos, blanditiis officiis laborum omnis accusantium!
    </p>
  </Modal>


  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
