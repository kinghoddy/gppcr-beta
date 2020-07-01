function slideShow(slides) {
  var slider = Array.from(document.querySelectorAll(".card")),
    cursor = 0,
    slideWidth = 0,
    slideCount = slides.length;

  // setting the cursor to 0

  if (slideCount > 0) {
    // get slide width
    slideWidth = slides[0].offsetWidth;
    for (var i = 0; i < slideCount; i++) {
      slides[i].style.left = slideWidth * i + "px";

    }
    setTimeout(() => {
      style.innerHTML = `.day{
      transition: all .6s ease-out;
      } `;
    }, 100)
    function moveSlides(direction) {
      for (var j = 0; j < slides.length; j++) {
        if (direction == "backwards") {
          slides[j].style.left =
            +slides[j].style.left.replace(/[^-\d\.]/g, "") + slideWidth + "px";
        } else if (direction == "forward") {
          slides[j].style.left =
            +slides[j].style.left.replace(/[^-\d\.]/g, "") - slideWidth + "px";
        }
      }
    }
    function move() {
      if (cursor < slideCount - 1) {
        moveSlides("forward");
        cursor++;
        if ((cursor - 1) > 0) curDay.textContent = `Day  ${cursor - 1}`;
        else curDay.textContent = '';
        vis();
      } else {
        next.classList.toggle("blind");
      }
      // setTimeout(move, 15000);
    }
    curDay.textContent = '';
    function vis() {
      prev.classList.remove("blind");
      next.classList.remove("blind");
    }
    setTimeout(move, 15000);
    // adding an eventlistenner for the buttons
    next.addEventListener("click", function (event) {
      event.preventDefault();
      move();
    });
    right.addEventListener("click", function (event) {
      event.preventDefault();
      move();
    });
    prev.addEventListener("click", function (event) {
      event.preventDefault();
      if (cursor > 0) {
        moveSlides("backwards");
        cursor--;
        if ((cursor - 1) > 0) curDay.textContent = `Day  ${cursor - 1}`;
        else curDay.textContent = '';
        vis();
      } else {
        prev.classList.toggle("blind");
      }
    });
    left.addEventListener("click", function (event) {
      event.preventDefault();
      if (cursor > 0) {
        moveSlides("backwards");
        cursor--;
        if ((cursor - 1) > 0) curDay.textContent = `Day  ${cursor - 1}`;
        else curDay.textContent = '';
        vis();
      } else {
        prev.classList.toggle("blind");
      }
    });
    window.addEventListener("keypress", event => {
      console.log(event.keyCode);
      if (event.keyCode == 39 || event.keyCode == 13 || event.keyCode == 32) {
        move();
      } else if (event.keyCode == 37) {
        if (cursor > 0) {
          moveSlides("backwards");
          cursor--;
          if ((cursor - 1) > 0) curDay.textContent = `Day  ${cursor - 1}`;
          else curDay.textContent = '';
          vis();
        }
      }
    });
  }
}

function countDown() {
  var date = new Date(),
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  domDay.textContent = dec(day);
  domHour.textContent = dec(hour);
  domMin.textContent = dec(min);
  domSec.textContent = dec(sec);
  console.log(day);

  function dec(num) {
    if (num < 10) {
      return "0" + num;
    } else return num;
  }
}

function init() {
  var slide = document.querySelectorAll(".day");
  slideShow(slide);
  setInterval(() => {
    countDown();
  }, 1000);
}
init();
