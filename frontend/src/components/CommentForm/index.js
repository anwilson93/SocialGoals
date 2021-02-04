import { useState, useEffect } from "react";
// import "./CommentForm.css";

function CommentForm({visible}) {
  if (!visible) return null
    return (
      <div className="comment-form">
        Hello, world! I am a CommentForm.
      </div>
    )
}

export default CommentForm;