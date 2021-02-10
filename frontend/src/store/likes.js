import { fetch } from './csrf.js';

const SET_LIKES = 'likes/setLikes';



const initialState = {};

const setLikes = (likes) => ({
  type: SET_LIKES,
  payload: likes
});


export const fetchLikes = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/likes/user/${userId}`)
        dispatch(
            setLikes(res.data)
        );
    };
};


export const createGoalLike = (obj) => async (dispatch) => {
  const { userId, goalId } = obj;
  const res = await fetch(`/api/likes/${goalId}`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId
      })
  });
    dispatch(fetchLikes(userId))
    return res.data.like
};

export const deleteGoalLike = (obj) => async (dispatch) => {
  const { userId, goalId } = obj;
  const res = await fetch(`/api/likes/delete/delete/${goalId}`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId
      })
  });
    console.log('ressssssssss', res.data)
    dispatch(setLikes(res.data))
};


export const createDiaryLike = (obj) => async (dispatch) => {
  const { userId, diaryEntryId } = obj;
  const res = await fetch(`/api/likes/diary/${diaryEntryId}`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            diaryEntryId: diaryEntryId
      })
  });
    dispatch(fetchLikes(userId))
    return res.data.like
};



function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_LIKES:
      newState = Object.assign({}, state, { likes: action.payload });
      return newState;
    // case GET_USER:
    //   newState = Object.assign({}, state, { user: action.payload });
    //   return newState;
    default:
      return state;
  }
}

export default reducer;