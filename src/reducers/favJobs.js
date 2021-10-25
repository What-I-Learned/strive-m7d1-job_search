import { initialState } from "../store/index";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/favoriteJobs";

export const favJobReducer = (state = initialState.favJobs, action) => {
  const { type, payload } = action;
  // requires at least type
  switch (type) {
    case "ADD_TO_FAVORITES": {
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    }
    case "REMOVE_FROM_FAVORITES": {
      return {
        ...state,
        favorites: state.favorites.filter((job) => job !== payload),
      };
    }
    default:
      return state;
  }
};

export default favJobReducer;
