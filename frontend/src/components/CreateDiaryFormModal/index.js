import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateDiaryForm from './CreateDiaryForm';

function CreateDiaryFormModal({goalId, userId}) {
 
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className='goals-button' onClick={() => setShowModal(true)}><i className="fa fa-plus" aria-hidden="true"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateDiaryForm goalId={goalId} userId={userId}/>
        </Modal>
      )}
    </>
  );
}

export default CreateDiaryFormModal;