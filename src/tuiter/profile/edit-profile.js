import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setProfile as redex_setprofile } from "../reducers/profile-reducer";
const EditProfileComponent = () => {
  const pf = useSelector((state) => state.profile);
  const {
    firstName,
    lastName,
    handle,
    profilePicture,
    bannerPicture,
    bio,
    website,
    location,
    dateOfBirth,
    dateJoined,
    followingCount,
    followersCount,
  } = pf;
  const [profile, setProfile] = useState({
    firstName,
    lastName,
    bio,
    location,
    website,
    dateOfBirth,
  });
  const inputList = [
    { key: "firstName", tag: "First Name" },
    { key: "lastName", tag: "Last Name" },
    { key: "bio", tag: "Bio" },
    { key: "location", tag: "Location" },
    { key: "website", tag: "Website" },
    { key: "dateOfBirth", tag: "Birth date" },
  ];
  const dispatch = useDispatch();
  const saveHandler = () => {
    dispatch(redex_setprofile(profile));
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: "1%",
          paddingBottom: "1%",
          gap: "10%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10%",
            flex: 1,
          }}
        >
          <Link to="/tuiter/profile">
            <i className="bi bi-x-lg" style={{ color: "black" }}></i>
          </Link>
          <div className="fw-bold h5">{`Edit profile`}</div>
        </div>
        <Link to="/tuiter/profile">
          <button className="rounded-pill btn btn-dark" onClick={saveHandler}>
            Save
          </button>
        </Link>
      </div>
      <img
        src={bannerPicture}
        width="100%"
        style={{ marginBottom: "-12%" }}
      ></img>
      <div
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          }}
        >
          <img className="rounded-circle" src={profilePicture} width="25%" />
        </div>
        <div
          style={{
            gap: "20px",
            display: "flex",
            flexDirection: "column",
            marginTop: "5%",
            marginBottom: "10%",
          }}
        >
          {inputList.map(({ key, tag }) => {
            return (
              <div key={key} style={{ position: "relative" }}>
                <div
                  className="text-muted"
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "4px",
                    fontSize: "10px",
                  }}
                >
                  {tag}
                </div>
                <input
                  value={profile[key]}
                  onChange={(event) =>
                    setProfile({ ...profile, [key]: event.target.value })
                  }
                  style={{ paddingTop: "20px", width: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EditProfileComponent;
