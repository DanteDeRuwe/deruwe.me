window.onscroll = () => {
  let windscroll = window.scrollY;
  if (windscroll >= 100) {
    document.querySelector(".site-navigation").classList.add("nav-bg");
  } else {
    document.querySelector(".site-navigation").classList.remove("nav-bg");
  }
};
