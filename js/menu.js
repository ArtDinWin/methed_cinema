const openMenu = (nav, active) => {
  nav.classList.add(active);
};

const closeMenu = (nav, active) => {
  nav.classList.remove(active);
};

const slideMenu = ({ openBtn, menu, classActiveMenu, closeTrigger }) => {
  //const { openBtn, menu, classActiveMenu, closeTrigger } = setting;
  const burgerBtn = document.querySelector(openBtn);
  const navigation = document.querySelector(menu);
  const navigationClose = document.querySelectorAll(closeTrigger);
  /*console.log("burgerBtn => ", burgerBtn);
  console.log("navigation => ", navigation);
  console.log("classActiveMenu => ", classActiveMenu);
  */
  burgerBtn.addEventListener("click", () => {
    openMenu(navigation, classActiveMenu);
  });

  navigationClose.forEach((item) => {
    item.addEventListener("click", () => {
      closeMenu(navigation, classActiveMenu);
    });
  });
};

export default slideMenu;
