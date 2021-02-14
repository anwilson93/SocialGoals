import { useState, useEffect } from "react";
import {fetchAllComments} from '../../store/comments';
import {useDispatch} from 'react-redux';
import './CommentBox.css';
import CommentList from '../CommentList';
import CommentForm from './CommentForm';

function CommentBox({goalId}) {

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [newCommentsOpen, setNewCommentsOpen] = useState(false);

  const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchAllComments(goalId))
    }, [commentsOpen])
  

    return (
      <>
        <div className='button-container'> 
          <button className='open-comments' onClick={() => setCommentsOpen(!commentsOpen)}>View Comments</button> 
          <button className='make-new-comment' onClick={() => setNewCommentsOpen(!newCommentsOpen)}>Make A New Comment!</button> 
        </div>
        <div className="comment-box">
          <CommentList visible={commentsOpen}/>
          <CommentForm visible={newCommentsOpen} goalId={goalId}/>
        </div>
      </>
    )
}

export default CommentBox;