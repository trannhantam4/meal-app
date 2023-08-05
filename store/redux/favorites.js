import { createSlice } from "@reduxjs/toolkit";
const favoriteSlices = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFav: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFav: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const addFav = favoriteSlices.actions.addFav;
export const removeFav = favoriteSlices.actions.removeFav;
export default favoriteSlices.reducer;
