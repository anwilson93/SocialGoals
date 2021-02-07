import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateGoalForm from './CreateGoalForm';

function CreateGoalFormModal({userId}) {
 
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className='modal-like-button' onClick={() => setShowModal(true)}>Create New Goal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateGoalForm userId={userId}/>
        </Modal>
      )}
    </>
  );
}

export default CreateGoalFormModal;