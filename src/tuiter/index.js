import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfileComponent from "./profile/edit-profile";
import { Routes, Route } from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import profileReducer from "./reducers/profile-reducer";
const store = configureStore({
  reducer: {
    who: whoReducer,
    tuits: tuitsReducer,
    profile: profileReducer,
    tuitsData: tuitsReducer,
  },
});
function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div
          className="col-10 col-md-10 col-lg-7 col-xl-6"
          style={{ position: "relative" }}
        >
          <Routes>
            {["", "home"].map((p) => (
              <Route path={p} key={p} element={<HomeComponent />} />
            ))}
            <Route path="explore" element={<ExploreComponent />} />
            <Route path="profile" element={<ProfileComponent />} />
            <Route path="edit-profile" element={<EditProfileComponent />} />
          </Routes>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
