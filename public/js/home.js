(function() {
  // owl carousel
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
    });
  });
  // end of owl
  navbar();
  if (document.documentElement.offsetWidth > 1024) parallax("#header-bg");

  // notifications
  setTimeout(() => {
    notification(
      "Peaise Challenge season 2",
      "Check out our latest events that are goin on",
      "img/logoc-2.png",
      "img/logo/logo.png",
      "img/ministers/apata2.jpg"
    );

    notification(
      "Ministers Desk GPPCR",
      'Get inspirational topics to use for your sermons, prayer points from the "You are blessed" section and lot more amazing things to fill your ministry with ',
      "img/logoc-2.png",
      "img/logo/logo.png",
      "img/bg-chair.jpeg"
    );
    notification(
      "Daily Blessings From GPPCR",
      "Get daily prayer points from our daily blessings page ",
      "img/logoc-2.png",
      "img/logo/logo.png",
      "img/podium.jpeg"
    );
  }, 3000);
  // end of notifications
})();
