/* ===================== Change Background Header ===================== */

// 스크롤 viewport수치에 따라 50이상이면 scroll-header라는 클래스명을 붙여줍니다.

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    // console.log("동작", this.scrollY);
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/* ===================== Services Modal ===================== */

const modalViews = document.querySelectorAll(".services__modal"); //모달창
const modalBtns = document.querySelectorAll(".services__button"); // 더보기 버튼
const modalClose = document.querySelectorAll(".services__modal-close"); // 모달창 닫기

const modal = function (modalClick) {
  console.log("modalClick : ", modalClick);
  modalViews[modalClick].classList.add("active-modal"); // 모달창 보기위해 클릭한 모든 객체에 클래스네임 추가
};

// 모달창 열기
modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

//모달창 닫기

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});
/* ===================== Mix it up Filter Portfolio ===================== */

const mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* link active  */

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((link) => link.classList.remove("active-work"));
  this.classList.add("active-work");
  console.log("link-->", this.classList);
}

linkWork.forEach((link) => link.addEventListener("click", activeWork));

/* ===================== Swiper Testimonial ===================== */

const swiperQna = new Swiper(".qna__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});
/* ===================== Scroll Sections Active Link ===================== */
const sections = document.querySelectorAll("section[id]");
// section의 id 속성을 sections에 담음

function scrollActive() {
  const scrollY = window.pageYOffset;

  // console.log("sections>>", sections);

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    // console.log("sectionId > ", sectionId);
    // console.log("sectionTop>", sectionTop);
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
  // console.log("scrollY>", scrollY);
}

window.addEventListener("scroll", scrollActive);

/* ===================== LIGHT DARK THEME ===================== */

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// selectedTheme 이 있을때 테마가 dark 이면 lightTheme 함수를 add 하라
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// theme버튼 클릭 시 컬러theme 바꾸고 아이콘 theme 바꿈(toggle)
themeButton.addEventListener("click", () => {
  console.log("selectedTheme>", selectedTheme);
  console.log("iconTheme>", iconTheme);
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* ===================== Scroll Reveal Animation ===================== */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
  // reset: true,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 600 });
sr.reveal(`.home__social , .home__scroll`, { delay: 800, origin: "bottom" });
