import { createSlice } from "@reduxjs/toolkit";

const profile = {
  firstName: "First",
  lastName: "Last",
  handle: "FL",
  profilePicture: "/img/max.png",
  bannerPicture: "/img/bg.jfif",
  bio: "This is a BIO for test only",
  website: "I have no website",
  location: "Boston, MA",
  dateOfBirth: "1/1/2000",
  dateJoined: "4/2009",
  followingCount: 1,
  followersCount: 2,
};
const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    setProfile(state, action) {
      const newprofile = action.payload;
      Object.entries(newprofile).forEach(([key, value]) => {
        state[key] = value;
      });
    },
  },
});

export default profileSlice.reducer;
export const { setProfile } = profileSlice.actions;
