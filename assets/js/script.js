$(document).ready(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 7000,
    delay: 3000,
    dots: true,
  });
});

// // Navbar Click start
// $(".navbar_click_icon .icon .openSidebar").click(function() {
//   document.body.classList.add("active");
// });

// $("header .sidebar .close").click(function() {
//   document.body.classList.remove("active");
// });
