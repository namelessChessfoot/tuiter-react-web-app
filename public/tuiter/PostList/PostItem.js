const PostItem = ({
  avatar = "",
  userName = "",
  handle = "",
  time = "",
  text = "",
  img = "",
  imgText = "",
  comments = "",
  retuit = "",
  like = "",
}) => {
  const buttons = [
    { icon: `<i class="fas fa-comment"></i>`, text: comments },
    { icon: `<i class="fas fa-retweet"></i>`, text: retuit },
    { icon: `<i class="far fa-heart"></i>`, text: like },
    { icon: `<i class="fas fa-share-square"></i>` },
  ];
  return `
        <li class="list-group-item my-border-bottom">
            <div class="row">
                <div class="col-2" >
                    <img src="${avatar}" style="width:80%; border-radius:50%" />
                </div>
                <div class="col-10" >
                    <div>
                        ${userName}
                        <i class="fas fa-check-circle"></i>
                        <div class="d-inline text-muted">@${
                          handle + " · " + time
                        }</div>
                    </div>
                    <div>${text}</div>
                    <div class="my-postarea">
                        <img src="${img}"/>
                        ${
                          imgText
                            ? `
                            <div>${imgText}</div>
                        `
                            : ""
                        }
                    </div>
                    <div class="align-items-center" style="display:flex; margin-top:15px">
                        ${buttons
                          .map(({ icon, text = "" }) => {
                            return `<div class="text-muted" style="flex:1;">
                                ${icon}
                                &nbsp
                                ${text}
                            </div>`;
                          })
                          .join("")}
                    </div>
                </div>
            </div>
        </li>
    `;
};

export default PostItem;
