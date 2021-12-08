import slideMenu from "./menu.js";
import renderVideo from "./renderVideo.js";

slideMenu({
  openBtn: ".header__burger-btn",
  menu: ".navigation",
  classActiveMenu: "navigation_active",
  closeTrigger: ".navigation__link, .navigation__close",
});

/*
 ".header__burger-btn",
  ".navigation",
  "navigation_active",
  ".navigation__link, .navigation__close"
*/

renderVideo();
