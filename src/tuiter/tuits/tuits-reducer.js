import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";
const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  reducers: {
    like(state, action) {
      const _id = action.payload;
      const index = state.findIndex((o) => o._id === _id);
      if (index !== -1) {
        const obj = state[index];
        if (obj.liked) {
          obj.likes -= 1;
        } else {
          obj.likes += 1;
        }
        obj.liked = !obj.liked;
      }
    },
  },
});

export default tuitsSlice.reducer;
export const { like } = tuitsSlice.actions;
