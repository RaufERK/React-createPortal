import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(prev => !prev);
  };

  const handleCLose = () => {
    setShowModal(false);
  }

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && <Modal showModal={showModal} handleCLose={handleCLose} />}
    </div>
  );
}

export default ModalPage;
