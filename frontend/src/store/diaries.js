import { fetch } from './csrf.js';

const GET_ALL_DIARIES = 'diaries/getAllDiaries';



const initialState = {};

const getAllDiaries = (diaries) => ({
  type: GET_ALL_DIARIES,
  payload: diaries
});


export const fetchAllDiariessForGoalsAUserFollows = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/diary/following/${userId}`)
        dispatch(
            getAllDiaries(res.data.diaries)
        );
    };
};

export const fetchAllMyDiaryEntries = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/diary/${userId}`)
        dispatch(
            getAllDiaries(res.data)
        );
    };
};

export const createDiary = (obj) => async (dispatch) => {
  const { userId, goalId, entry} = obj;
  const res = await fetch(`/api/diary/create`, {
    method: 'POST',
     body: JSON.stringify({
            userId: userId,
            goalId: goalId,
            entry: entry
      })
  }); 
    dispatch(getAllDiaries(res.data))
};


export const deleteDiaryEntry = (diaryEntryId, userId) => async (dispatch) => {

    const res = await fetch(`/api/delete/diary/${diaryEntryId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            diaryEntryId
        })
    });
    dispatch(fetchAllMyDiaryEntries(userId))
    return res
};



function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ALL_DIARIES:
      newState = Object.assign({}, state, { diaries: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;