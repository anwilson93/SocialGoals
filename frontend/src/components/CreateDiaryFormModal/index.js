import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateDiaryForm from './CreateDiaryForm';

function CreateDiaryFormModal({goalId, userId}) {
 
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className='modal-like-button' onClick={() => setShowModal(true)}>Create New Diary Entry</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateDiaryForm goalId={goalId} userId={userId}/>
        </Modal>
      )}
    </>
  );
}

export default CreateDiaryFormModal;