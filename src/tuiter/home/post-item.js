import React from "react";
const PostItem = ({ post = {} }) => {
  const {
    avatar = "",
    userName = "",
    handle = "",
    time = "",
    text = "",
    img = "",
    imgText = <></>,
    comments = "",
    retuit = "",
    like = "",
  } = post;
  const buttons = [
    { icon: "bi bi-chat-left-dots", text: comments },
    { icon: "bi bi-arrow-left-right", text: retuit },
    { icon: "bi bi-heart", text: like },
    { icon: "bi bi-escape" },
  ];
  return (
    <li className="list-group-item my-border-bottom">
      <div className="row">
        <div className="col-2">
          <img src={avatar} style={{ width: "80%", borderRadius: "50%" }} />
        </div>
        <div className="col-10">
          <div style={{ display: "flex", gap: "5px" }}>
            {userName}
            <i class="bi bi-check-circle-fill"></i>
            <div className="d-inline text-muted">@{handle + " · " + time}</div>
          </div>
          <div>{text}</div>
          <div className="my-postarea">
            <img src={img} />
            {imgText && <imgText />}
          </div>
          <div
            className="align-items-center"
            style={{ display: "flex", marginTop: "15px" }}
          >
            {buttons.map(({ icon, text = "" }) => (
              <div
                className="text-muted"
                style={{ flex: 1, display: "flex", gap: "7px" }}
              >
                <i className={icon}></i>
                <div>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};
export default PostItem;
