import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LikeAndFollowForm from './LikeAndFollowForm';

function LikeAndFollowFormModal({goalId, userId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='modal-like-button' onClick={() => setShowModal(true)}>Like <i class="far fa-heart"> or Follow Goal</i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LikeAndFollowForm goalId={goalId} userId={userId}/>
        </Modal>
      )}
    </>
  );
}

export default LikeAndFollowFormModal;