import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SearchedUserGoals from './SearchedUserGoals';
import './SearchPage.css';

function SearchedUserGoalModal({userId, username}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div id='search-modal' onClick={() => setShowModal(true)}></div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SearchedUserGoals userId={userId} username={username}/>
        </Modal>
      )}
    </>
  );
}

export default SearchedUserGoalModal;