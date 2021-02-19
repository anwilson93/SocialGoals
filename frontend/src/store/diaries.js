import { fetch } from './csrf.js';

const SET_ALL_DIARIES = 'diaries/SetAllDiaries';

const initialState = {};


const setAllDiaries = (diaries) => ({
  type: SET_ALL_DIARIES,
  payload: diaries
});


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
    dispatch(setAllDiaries(res.data.myDiaryEntries))
};


export const fetchAllMyDiaryEntries = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/diary/${userId}`)
        dispatch(setAllDiaries(res.data));
    };
};


export const fetchAllDiariessForGoalsAUserFollows = (userId) => {
    return async (dispatch) => {
        const res = await fetch(`/api/diary/following/${userId}`)
        dispatch(setAllDiaries(res.data.diaries));
    };
};


export const deleteDiaryEntry = (diaryEntryId, userId) => async (dispatch) => {
    const res = await fetch(`/api/diary/delete/${diaryEntryId}`, {
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
    case SET_ALL_DIARIES:
      newState = Object.assign({}, state, { diaries: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;