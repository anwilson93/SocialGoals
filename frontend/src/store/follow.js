import { fetch } from './csrf.js';

const SET_FOLLOW_GOAL = 'follow/setFollowGoal';
const SET_MY_FOLLOWERS = 'follow/setMyFollowers';
const SET_WHO_I_FOLLOW = 'follow/setWhoIFollow';



const initialState = {};

const setFollowGoal = (follows) => ({
  type: SET_FOLLOW_GOAL,
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


export const fetchGoalFollows = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/following/goal/${userId}`)
        dispatch(
            setFollowGoal(res.data)
        );
    };
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




export const createGoalFollow = (obj) => async (dispatch) => {
  const { userId, goalId } = obj;
  const res = await fetch(`/api/follow/${goalId}`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId
      })
  });
    dispatch(fetchGoalFollows(userId))
    return res.data
};


export const createUserFollow = (obj) => async (dispatch) => {
  const { userId, usernameToFollow, username } = obj;
  console.log(usernameToFollow, 'guthgohftoighbifghbifhgi')
  const res = await fetch(`/api/follow/user`, {
    method: 'POST',
     body: JSON.stringify({
            followerId: userId,
            usernameToFollow: usernameToFollow
      })
  });
    dispatch(fetchUsersIFollow(username))
    return res.data
};



function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_FOLLOW_GOAL:
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