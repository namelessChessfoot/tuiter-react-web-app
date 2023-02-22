import React from "react";
const NavigationSidebar = ({ active = "explore" }) => {
  const options = [
    { name: "Tuiter" },
    { name: "Home" },
    { name: "Explore" },
    { name: "Notifications" },
    { name: "Messages" },
    { name: "Bookmarks" },
    { name: "Lists" },
    { name: "Profile" },
    { name: "More" },
  ];
  return (
    <div className="list-group">
      {options.map(({ name }) => (
        <a
          key={name}
          className={`list-group-item ${
            active.toLowerCase() === name.toLowerCase() ? "active" : ""
          }`}
        >
          {name}
        </a>
      ))}
    </div>
  );
};
export default NavigationSidebar;
