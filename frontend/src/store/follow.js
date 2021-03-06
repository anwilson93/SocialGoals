import { fetch } from './csrf.js';

const SET_MY_FOLLOWERS = 'follow/setMyFollowers';
const SET_WHO_I_FOLLOW = 'follow/setWhoIFollow';
const SET_GOALS_I_FOLLOW = 'follow/setGoalsIFollow';

const initialState = {};


const setGoalsIFollow = (follows) => ({
  type: SET_GOALS_I_FOLLOW,
  payload: follows
});


const setMyFollowers = (myFollowers) => ({
  type: SET_MY_FOLLOWERS,
  payload: myFollowers
});

const setUsersIFollow = (following) => ({
  type: SET_WHO_I_FOLLOW,
  payload: following
});


export const createGoalFollow = (obj) => async (dispatch) => {
  const { userId, goalId } = obj;
  const res = await fetch(`/api/follow/goal/create`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId
      })
  });
    dispatch(fetchGoalsIFollow(userId))
    return res.data
};


export const fetchGoalsIFollow = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/follow/goal/${userId}`)
        dispatch(

            setGoalsIFollow(res.data)
        );
    };
};


export const deleteGoalFollow = (obj) => async (dispatch) => {
  const { userId, goalId } = obj;
  const res = await fetch(`/api/follow/goal/delete`, {
    method: 'DELETE',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId
      })
  });
    dispatch(fetchGoalsIFollow(userId))
    return res.data
};





export const createUserFollow = (obj) => async (dispatch) => {
  const { userId, usernameToFollow, username } = obj;

  const res = await fetch(`/api/follow/user/create`, {
    method: 'POST',
     body: JSON.stringify({
            followerId: userId,
            usernameToFollow: usernameToFollow
      })
  });
    dispatch(fetchUsersIFollow(username))
    return res.data
};


export const fetchMyFollowers = (username) => {
    return async (dispatch) => {
        const res = await fetch(`/api/follow/followers/${username}`)
        dispatch(
            setMyFollowers(res.data)
        );
    };
};


export const fetchUsersIFollow = (username) => {
    return async (dispatch) => {
        const res = await fetch(`/api/follow/following/${username}`)
        dispatch(
            setUsersIFollow(res.data)
        );
    };
};


export const deleteUserFollow = (obj) => async (dispatch) => {
  const { userId, usernameToUnfollow, username } = obj;
  
  const res = await fetch(`/api/follow/user/delete`, {
    method: 'DELETE',
     body: JSON.stringify({
            followerId: userId,
            usernameToUnfollow: usernameToUnfollow
      })
  });
    dispatch(fetchUsersIFollow(username))
    return res.data
};


function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_GOALS_I_FOLLOW:
      newState = Object.assign({}, state, { follows: action.payload });
      return newState;
    case SET_MY_FOLLOWERS:
      newState = Object.assign({}, state, { myFollowers: action.payload });
      return newState;
    case SET_WHO_I_FOLLOW:
      newState = Object.assign({}, state, { following: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;