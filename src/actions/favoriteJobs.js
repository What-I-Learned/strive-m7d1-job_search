export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const addJobToFav = (song) => ({
  type: ADD_TO_FAVORITES,
  payload: song,
});

export const removeJobFromFav = (song) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: song,
});
