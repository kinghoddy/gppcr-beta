function timeMachine() {
    var domday = document.querySelector(".day");
    var count = document.querySelector("#count-down");
    var date,
        day,
        hrs,
        min,
        sec;

    // adding the date and time into the DOM
    function setCounts() {
        date = new Date();
        day = date.getDate() + 1;
        hrs = 23 - date.getHours();
        min = 59 - date.getMinutes();
        sec = 59 - date.getSeconds();
        domday.textContent = "Up Next, Day " + day;

        // cHecking for the last day
        if (day == 31) {
            domday.textContent = "Up Next, Day " + day + " (Final)";
        }

        // checking if the last day is in progress

        if (day >= 32 && hrs >= 23 && min >= 59 - 30) {
            domday.textContent = " Day " + (day - 1) + " in progress (Final)";
        }

        // check if the last day is completed
        function complete() {
            if (day >= 0) {
                hrs = 0;
                min = 0;
                sec = 0;
                domday.textContent = "Completed";
            }
        }

        complete();

        // checking if it is time for the challenge
        if (hrs >= 23 && min >= 59 - 30) {
            hrs = 0;
            min = 0;
            sec = 0;
            domday.textContent = " Day " + (day - 1) + " in progress";
        }

        // inserting the values ino the DOM
        count.textContent = hrs + "hrs : " + min + "min : " + sec + "sec";

        // displaying the bible passage
        function displayPassage(ids, page) {
            if (day >= ids || day >= 0) {
                page.classList.remove("blind");
            }
        }

        displayPassage(19, document.getElementById(18));
        displayPassage(20, document.getElementById(19));
        displayPassage(21, document.getElementById(20));
        displayPassage(22, document.getElementById(21));
        displayPassage(23, document.getElementById(22));
        displayPassage(24, document.getElementById(23));
        displayPassage(25, document.getElementById(24));
        displayPassage(26, document.getElementById(25));
        displayPassage(27, document.getElementById(26));
        displayPassage(28, document.getElementById(27));
        displayPassage(29, document.getElementById(28));
        displayPassage(30, document.getElementById(29));
        displayPassage(31, document.getElementById(30));
        displayPassage(32, document.getElementById(31));

        setTimeout(setCounts, 1000);
    }

    setCounts();
}

function popup() {
    var el = document.querySelector(".popup_content");
    var elBg = document.querySelector(".popup");

    function toggle() {
        elBg.classList.toggle("popup-v");
        el.classList.toggle("popup_content-v");
    }

    toggle();

    elBg.onclick = toggle;
    setTimeout(popup, 180000);
}

// changing the background
function changeBg() {
    var bg = document.querySelector(".banner");
    var num = Math.floor(Math.random() * 5);

    bg.style = "background-image : url('../img/" + num + ".jpg')";
    setTimeout(changeBg, 10000);
}

// traslating the time machine;
function trans() {
    var up = document.querySelector(".svg-up"),
        plate = document.querySelector(".time-untill"),
        down = document.querySelector(".svg-down");

    function toggle() {
        up.classList.toggle("svg-blind");
        down.classList.toggle("svg-blind");
        plate.classList.toggle("trans-down");
    }

    up.onclick = toggle;
    down.onclick = toggle;
}

// controls the apperance of elemnts on the page
function onScroll() {
    var btn = document.querySelector(".b-top"),
        body = document.body,
        offset = 1,
        domElem = document.documentElement,
        scrollPos,
        domHeight;
    var btnBox = document.querySelector(".btn-box");
    var fontBox = document.querySelector(".font-box");

    // clculate the dom height

    domHeight = Math.max(body.scrollHeight,
        body.offsetHeight,
        domElem.clientHeight,
        domElem.scrollHeight,
        domElem.offsetHeight);

    if (window.innerWidth > 850) {
        fontBox.classList.remove("trans-down");
        fontBox.classList.add("trans-left");
    } else {
        fontBox.classList.add("trans-down");
        fontBox.classList.remove("trans-left");
    }

    window.addEventListener("scroll", function (event) {
        scrollPos = body.scrollTop || domElem.scrollTop;

        // last
        if (scrollPos > domHeight / 15) {
            btn.classList.remove("svg-blind");
        }

        //second
        else if (scrollPos > domHeight / 30) {
            fontBox.classList.remove("trans-left");
            fontBox.classList.remove("trans-down");
        }

        //first
        else if (scrollPos > domHeight / 100) {
            btnBox.classList.remove("trans-up");
        } else {
            btn.classList.add("svg-blind");

            btnBox.classList.add("trans-up");

            if (this.window.innerWidth > 850) {
                fontBox.classList.add("trans-left");
            } else {
                fontBox.classList.add("trans-down");
            }
        }
    }

    );

    btn.addEventListener("click", function (event) {
        event.preventDefault();
        // body.scrollTop = 0;
        domElem.scrollTop = 300;
    }

    );
}

function lang() {
    var btnEng = document.querySelector("#eng-btn"),
        btnYr = document.querySelector("#yr-btn");

    function block() {
        // yoruba
        document.getElementById("yr_24").classList.toggle("block");
        document.getElementById("yr_25").classList.toggle("block");
        document.getElementById("yr_26").classList.toggle("block");
        document.getElementById("yr_27").classList.toggle("block");
        document.getElementById("yr_28").classList.toggle("block");
        document.getElementById("yr_29").classList.toggle("block");
        document.getElementById("yr_30").classList.toggle("block");
        document.getElementById("yr_31").classList.toggle("block");

        // english
        document.getElementById("en_24").classList.toggle("block");
        document.getElementById("en_25").classList.toggle("block");
        document.getElementById("en_26").classList.toggle("block");
        document.getElementById("en_27").classList.toggle("block");
        document.getElementById("en_28").classList.toggle("block");
        document.getElementById("en_29").classList.toggle("block");
        document.getElementById("en_30").classList.toggle("block");
        document.getElementById("en_31").classList.toggle("block");
    }

    btnYr.onclick = block;
    btnEng.onclick = block;
}

function changeFont() {
    var text = document.getElementById("style"),
        incBtn = document.getElementById("font_increase"),
        val = 1.6;
    redBtn = document.getElementById("font_reduce");

    incBtn.onclick = function () {
        val += 1.4;
        text.innerHTML += ".verse-line { font-size :" + val + "rem}";
    }

        ;

    redBtn.onclick = function () {
        if (val >= 3) {
            val -= 1.4;
        }

        text.innerHTML += ".verse-line { font-size :" + val + "rem}";
    }

        ;
}

function night() {
    var text = document.getElementById("style"),
        lightBtn = document.getElementById('light_btn'),
        darkBtn = document.getElementById('dark_btn');

    lightBtn.onclick = function () {
        text.innerHTML += ' :root{ --color-primary: #23aa40;--color-primary-light: #2bdf49;--color-primary-dark: #13441b;--color-grey-dark-1: #333;--color-grey-dark-2: #777;--color-grey-dark-3: #999;--color-grey-light-1: #ffffff;--color-grey-light-2: #fff;--color-grey-light-3: #fff;--color-grey-light-4: #ccc;    }  '
    }

    darkBtn.onclick = function () {
        text.innerHTML += ' :root{ --color-primary: #230;--color-primary-light: #f77;--color-primary-dark: #131b; --color-grey-light-2: #f3f3f3;--color-grey-dark-1: #777; --color-grey-light-3: #ccc;}  '
    }

}

function init() {
    timeMachine();
    setTimeout(popup, 30000);
    setTimeout(changeBg, 50000);
    onScroll();
    trans();
    night();
    lang();
    changeFont();

}

init();