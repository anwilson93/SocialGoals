import { fetch } from './csrf.js';

const GET_ALL_GOALS = 'goals/getAllGoals';
const GET_COMPLETED_GOALS = 'goals/getCompletedGoals';


const initialState = {};

const getAllGoals = (goals) => ({
  type: GET_ALL_GOALS,
  payload: goals
});

const getCompletedGoals = (completed) => ({
  type: GET_COMPLETED_GOALS,
  payload: completed
});




export const fetchAllGoalsForPeopleAUserFollows = (username) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/following/${username}`)
        dispatch(
            getAllGoals(res.data.goals)
        );
    };
};

export const fetchAllMyGoals = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/${userId}`)
        dispatch(
            getAllGoals(res.data)
        );
    };
};

export const fetchAllMyCompletedGoals = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/goals/completed/${userId}`)
        dispatch(
            getCompletedGoals(res.data)
        );
    };
};

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
    dispatch(fetchAllMyGoals(userId))
    return res
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
    dispatch(fetchAllMyGoals(userId))
    return res
};



export const deleteGoal = (goalId, userId) => async (dispatch) => {

    const res = await fetch(`/api/delete/goal/${goalId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            goalId
        })
    });
    dispatch(fetchAllMyGoals(userId))
    return res
};





function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_GOALS:
      newState = Object.assign({}, state, { goals: action.payload });
      return newState;
    case GET_COMPLETED_GOALS:
      newState = Object.assign({}, state, { completed: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;