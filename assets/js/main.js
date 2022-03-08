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

/* ===================== Service Modal ===================== */

/* ===================== Mix it up Filter Portfolio ===================== */

/* link active  */

/* ===================== Swiper Testimonial ===================== */

/* ===================== Scroll Section Active Link ===================== */
