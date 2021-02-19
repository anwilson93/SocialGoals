import { fetch } from './csrf.js';

const SET_ALL_GOALS = 'goals/setAllGoals';
const SET_COMPLETED_GOALS = 'goals/setCompletedGoals';

const initialState = {};

const setAllGoals = (goals) => ({
  type: SET_ALL_GOALS,
  payload: goals
});

const setCompletedGoals = (completed) => ({
  type: SET_COMPLETED_GOALS,
  payload: completed
});



export const createGoal = (obj) => async (dispatch) => {
  const { userId, name, goalType, startDate } = obj;
  const res = await fetch(`/api/goals/create`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            name: name,
            goalType: goalType,
            startDate: startDate
      })
  }); 
    dispatch(fetchAllMyUncompletedGoals(userId))
    return res
};


export const fetchAllMyUncompletedGoals = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/uncompleted/${userId}`)
        dispatch(
            setAllGoals(res.data)
        );
    };
};


export const fetchAllMyCompletedGoals = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/completed/${userId}`)
        dispatch(
            setCompletedGoals(res.data)
        );
    };
};


export const fetchAllGoalsForPeopleAUserFollows = (username) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/following/${username}`)
        dispatch(
            setAllGoals(res.data.goals)
        );
    };
};


export const completeGoal = (obj) => async (dispatch) => {
  const { userId, goalId } = obj;

  const res = await fetch(`/api/goals/put`, {
    method: 'PUT',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId,
      })
  }); 
    dispatch(fetchAllMyUncompletedGoals(userId))
    return res
};


export const deleteGoal = (goalId, userId) => async (dispatch) => {

    const res = await fetch(`/api/goals/delete`, {
        method: 'DELETE',
        body: JSON.stringify({
            goalId
        })
    });
    dispatch(fetchAllMyUncompletedGoals(userId))
    return res
};



function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ALL_GOALS:
      newState = Object.assign({}, state, { goals: action.payload });
      return newState;
    case SET_COMPLETED_GOALS:
      newState = Object.assign({}, state, { completed: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;