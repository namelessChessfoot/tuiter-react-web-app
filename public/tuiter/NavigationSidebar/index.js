const NavigationSidebar = () => {
  const l = [
    { href: "/", icon: "fab fa-twitter", text: "" },
    { href: "/", icon: "fas fa-home", text: "Home" },
    {
      href: "/tuiter/explore/index.html",
      icon: "fas fa-hashtag",
      text: "Explore",
    },
    { href: "/", icon: "fas fa-bell", text: "Notifications" },
    { href: "/", icon: "fas fa-envelope", text: "Messages" },
    { href: "/", icon: "fas fa-bookmark", text: "Bookmarks" },
    { href: "/", icon: "fas fa-list", text: "Lists" },
    { href: "/", icon: "fas fa-user", text: "Profile" },
    { href: "/", icon: "fas fa-circle", text: "More" },
  ];
  const content = l
    .map(
      (info) =>
        `<a class="list-group-item" href=${info.href}><i class="${info.icon}"></i>&nbsp${info.text}</a>`
    )
    .join("");
  return `
        <div class="list-group">
            ${content}
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
        `;
};
export default NavigationSidebar;
