import { useState} from "react";
import './CommentBox.css';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

function CommentBox({goalId, userId, comments}) {
  //Refactored code to pass comments for the specific goal to CommentBox 
  //instead of using Dispatch to fetch comments in order to prevent comments
  //in store to resetting every time the View Comments button is pushed

  const [commentsOpen, setCommentsOpen] = useState(false);
  const [newCommentsOpen, setNewCommentsOpen] = useState(false);

    return (
      <>
        <div className='button-container'> 
          <button className='open-comments' onClick={() => setCommentsOpen(!commentsOpen)}>View Comments</button> 
          <button className='make-new-comment' onClick={() => setNewCommentsOpen(!newCommentsOpen)}>Make A New Comment!</button> 
        </div>
        <div className="comment-box">
          <CommentList visible={commentsOpen} userId={userId} goalId={goalId} comments={comments}/>
          <CommentForm visible={newCommentsOpen} goalId={goalId}/>
        </div>
      </>
    )
}

export default CommentBox;