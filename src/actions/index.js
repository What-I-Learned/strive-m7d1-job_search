// here's the place for our ACTION CREATORS
// functions that return actions

export const ADD_JOB_TO_FAV_LIST = "ADD_JOB_TO_FAV_LIST";
export const REMOVE_JOB_FROM_FAV_LIST = "REMOVE_JOB_FROM_FAV_LIST";

export const SET_QUERY = "SET_QUERY";

export const addToFavList = (job) => ({
  type: ADD_JOB_TO_FAV_LIST,
  // an action is a JS object with AT LEAST a type property
  payload: job,
  // the PAYLOAD is the property carrying over any additional piece of info
  // needed by the reducer to compute the new state
  // payload is all the additional info needed from the reducers to calculate
  // the new state of the application
});

export const removeJob = (index) => ({
  type: REMOVE_JOB_FROM_FAV_LIST,
  payload: index,
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});
