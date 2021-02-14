import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateGoalForm from './CreateGoalForm';

function CreateGoalFormModal({userId}) {
 
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className='goals-button' onClick={() => setShowModal(true)}><i className="fa fa-plus" aria-hidden="true"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateGoalForm userId={userId}/>
        </Modal>
      )}
    </>
  );
}

export default CreateGoalFormModal;