import { createStore, applyMiddleware } from "redux";
import mainReducer from "../reducers/index";
import thunk from "redux-thunk";

// this file contains 2 thinngs:
// 11.the initial state of application
// 2. the configureStore execution

// 0.
const middlewares = [thunk];

// 1.
export const initialState = {
  // devide properties into chunks/subobjects
  jobs: {
    all: [],
    favorites: [],
  },
  searchQuery: {
    query: "",
  },
  fetchedResults: {
    loading: false,
    jobData: [],
    error: "",
  },
};

// 2. - 3 arguments reduces, initial state
const configureStore = createStore(
  mainReducer,
  applyMiddleware(...middlewares)
  //   initialState,
  //   window &&
  //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //     window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;

// implement job search:
// - jobdetails
// - company details/based jobs
// - jobListt
