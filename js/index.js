import BurgerMenu from "./burger.js";
import { reviewsSlider } from "./reviews-slider.js";

document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.getElementById('closeBtn');
  const modal = document.getElementById('myModal');
  
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  } else {
    console.warn('Элементы баннера не найдены');
  }
});

try {
  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 768,
    },
  );
  reviewsSlider();
} catch (error) {
  console.error(error);
}
