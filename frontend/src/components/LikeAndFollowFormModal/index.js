import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LikeAndFollowForm from './LikeAndFollowForm';

function LikeAndFollowFormModal({goalId, userId, diaryEntryId}) {
 
  const [showModal, setShowModal] = useState(false);

  if (!goalId){
    return (
      <>
      <button className='modal-like-button' onClick={() => setShowModal(true)}>Like Diary Entry <i className="far fa-heart"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LikeAndFollowForm userId={userId} diaryEntryId={diaryEntryId}/>
        </Modal>
      )}
    </>
    )
  }
  return (
    <>
      <button className='modal-like-button' onClick={() => setShowModal(true)}>Like <i className="far fa-heart"> or Follow Goal</i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LikeAndFollowForm goalId={goalId} userId={userId}/>
        </Modal>
      )}
    </>
  );
}

export default LikeAndFollowFormModal;