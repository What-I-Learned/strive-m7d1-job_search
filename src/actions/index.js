// here's the place for our ACTION CREATORS
// functions that return actions

export const ADD_JOB_TO_FAV_LIST = "ADD_JOB_TO_FAV_LIST";
export const REMOVE_JOB_FROM_FAV_LIST = "REMOVE_JOB_FROM_FAV_LIST";

export const SET_QUERY = "SET_QUERY";
export const SET_USERNAME = "SET_USERNAME";

// fetching data
export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";

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

export const fetchAllJobs = (state) => {
  return {
    type: "FETCH_JOBS_REQUEST",
    payload: state,
  };
};

export const fetchAllJobsSucess = (jobs) => {
  return {
    type: "FETCH_JOBS_SUCESS",
    payload: jobs,
  };
};

export const fetchAllJobsFailure = (state) => {
  return {
    type: "FETCH_JOBS_FAILURE",
    payload: state,
  };
};

// thanks to redux-thunk we can leverage much more powerful action creators,
// that do not just return an action, but can return a FUNCTION
// this function can be async, can be very complex...
// but at the end of it we can still do the right thing and dispatch the appropriate action
