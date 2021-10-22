import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import favJobReducer from "../reducers/favJobs";
import userReducer from "../reducers/user";
import fetchedJobsReducer from "../reducers/fetchedJobs";
import searchQueryReducer from "../reducers/searchQuery";
import thunk from "redux-thunk";

// this file contains 2 thinngs:
// 11.the initial state of application
// 2. the configureStore execution

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 1.
export const initialState = {
  // devide properties into chunks/subobjects
  favJobs: {
    favorites: [],
  },
  searchQuery: {
    query: "",
  },
  user: {
    userName: "",
  },
  fetchedJobs: {
    loading: false,
    jobData: [],
    error: "",
  },
};

const bigReducer = combineReducers({
  favJobs: favJobReducer,
  searchQuery: searchQueryReducer,
  user: userReducer,
  fetchedJobs: fetchedJobsReducer,
});

// 2. - 3 arguments reduces, initial state
const configureStore = createStore(
  bigReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;

// implement job search:
// - jobdetails
// - company details/based jobs
// - jobListt
