import { applyMiddleware, createStore, compose } from "redux";
import ReduxThunk from "redux-thunk";

// const middlewareEnhancer = applyMiddleware(ReduxThunk);
const composeEnhancers =
  window !== undefined ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const initialState = {
  loading: false,
  jobs: [],
  errors: "",
};

const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCESS";
const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";

const fetchAllJobs = () => {
  return {
    type: "FETCH_JOBS_REQUEST",
  };
};

const fetchAllJobsSucess = (jobs) => {
  return {
    type: "FETCH_JOBS_SUCESS",
    payload: jobs,
  };
};

const fetchAllJobsFailure = (errors) => {
  return {
    type: "FETCH_JOBS_FAILURE",
    payload: errors,
  };
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        loading: false,
        jobs: action.payload,
        errors: "",
      };
    case FETCH_JOBS_FAILURE:
      return {
        loading: false,
        jobs: [],
        errors: action.payload,
      };

    default:
      return state;
  }
};

const fetchJobs = () => {
  return function (dispatch) {
    dispatch(fetchAllJobs());
    try {
      const resp = fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=0"
      );
      if (resp.ok) {
        console.log(resp.data);
        const jobs = resp.data;
        dispatch(fetchAllJobsSucess(jobs));
      }
    } catch (error) {
      dispatch(fetchAllJobsFailure(error));
    }
  };
};

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(ReduxThunk))
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchJobs());
