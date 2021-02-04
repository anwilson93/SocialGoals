import { useState, useEffect } from "react";
import {fetchAllComments} from '../../store/comments';
import {useDispatch, useSelector} from 'react-redux';
import './CommentBox.css';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';

function CommentBox({goalId}) {

  const [commentsOpen, setCommentsOpen] = useState(false);

  const dispatch = useDispatch()

    useEffect (() => {
        dispatch(fetchAllComments(goalId))
    }, [commentsOpen])
  
  const comments = useSelector(state => {
        return state.comments
    });

    return (
      <>
        <div onClick={() => setCommentsOpen(!commentsOpen)}>Comments:</div>
        <div className="comment-box">
          <CommentList visible={commentsOpen}/>
          <CommentForm visible={commentsOpen}/>
        </div>
      </>
    )
}

export default CommentBox;