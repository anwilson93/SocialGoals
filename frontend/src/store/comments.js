import { fetch } from './csrf.js';

const GET_ALL_COMMENTS = 'comments/getAllComments';



const initialState = {};

const getAllComments = (comments) => ({
  type: GET_ALL_COMMENTS,
  payload: comments
});


export const fetchAllComments = (goalId) => {
    
    return async (dispatch) => {
        const res = await fetch(`/api/comments/${goalId}`)
        dispatch(
            getAllComments(res.data)
        );
    };
};



function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_COMMENTS:
      newState = Object.assign({}, state, { comments: action.payload });
      return newState;
    // case GET_USER:
    //   newState = Object.assign({}, state, { user: action.payload });
    //   return newState;
    default:
      return state;
  }
}

export default reducer;