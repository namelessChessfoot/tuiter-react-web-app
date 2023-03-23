import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[2] || "home";
  const options = [
    { name: "Tuiter" },
    { name: "Home", to: "/tuiter/home" },
    { name: "Explore", to: "/tuiter/explore" },
    { name: "Notifications" },
    { name: "Messages" },
    { name: "Bookmarks" },
    { name: "Lists" },
    { name: "Profile" },
    { name: "More" },
    { name: "Labs", to: "/" },
  ];
  return (
    <div className="list-group">
      {options.map(({ name, to }) =>
        to ? (
          <Link
            key={name}
            to={to}
            className={`list-group-item ${
              active.toLowerCase() === name.toLowerCase() ? "active" : ""
            }`}
          >
            {name}
          </Link>
        ) : (
          <a
            key={name}
            className={`list-group-item ${
              active.toLowerCase() === name.toLowerCase() ? "active" : ""
            }`}
          >
            {name}
          </a>
        )
      )}
    </div>
  );
};
export default NavigationSidebar;
