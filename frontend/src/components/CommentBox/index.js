import { useState, useEffect } from "react";
import {fetchAllComments} from '../../store/comments';
import {useDispatch} from 'react-redux';
import './CommentBox.css';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';

function CommentBox({goalId}) {

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [newCommentsOpen, setNewCommentsOpen] = useState(false);

  const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchAllComments(goalId))
    }, [commentsOpen])
  

    return (
      <>
        <div onClick={() => setCommentsOpen(!commentsOpen)}>Comments:</div>
        <div onClick={() => setNewCommentsOpen(!newCommentsOpen)}>Make A New Comment!</div>
        <div className="comment-box">
          <CommentList visible={commentsOpen}/>
          <CommentForm visible={newCommentsOpen} goalId={goalId}/>
        </div>
      </>
    )
}

export default CommentBox;