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

let mixerPortfolio = mixitup(".work__container", {
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

/* ===================== Scroll Section Active Link ===================== */
