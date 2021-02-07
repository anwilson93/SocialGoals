// import { useState, useEffect } from "react";
import { useSelector} from 'react-redux';
// import "./CommentList.css";


function CommentList({visible}) {
  const comments = useSelector(state => {
      return state.comments.comments
    });
 
  if (!visible) return null
  if (comments.length>0){
    return (
      <>
      {comments && comments.map(comment => {
        let username = comment.User.username
        return (
          <>
            <div>{username}: {comment.comment}</div>
          </>
        )
      })}
      </>
    )
  } else {
    return (
      <div>No Comments!</div>
    )
  }
}

export default CommentList;