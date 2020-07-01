function navToggle() {
  var btn = document.querySelector("#sidenav button");
  btn.addEventListener("click", () => {
    sidenav.classList.toggle("collapsed");
  });
}
function renderPage() {
  var loader = '<img src="../img/load.png" class="loader">';
  function createPost(data) {
    function post(data, el) {
      if (data) {

        var card = document.createElement("div"),
          cardHeader = document.createElement("div"),
          cardBody = document.createElement("div"),
          cardImg = document.createElement("div"),
          h3 = document.createElement("h3"),
          small = document.createElement("small"),
          img = document.createElement("img"),
          h4 = document.createElement("h4"),
          br = document.createElement("br"),
          p = document.createElement("p"),
          a = document.createElement("a");
        /* adding classes to the divs */ card.classList.add("card");
        cardHeader.classList.add(
          "card-header",
          "bg-white",
          "border-0",
          "d-flex",
          "align-items-center",
          "justify-content-between"
        );
        cardBody.classList.add("card-body");
        cardImg.classList.add("card-author-img");
        h3.classList.add("h6", "pr-3");
        small.classList.add("text-success");
        h4.classList.add("text-capitalize", "text-center");
        img.classList.add("img-fluid");
        a.classList.add("btn", "btn-block", "text-warning", "text-capitalize");
        /* card header */ img.src = data.src;
        h3.innerHTML = data.author;
        small.innerHTML = data.date;
        h3.append(br, small);
        cardImg.append(img);
        cardHeader.append(cardImg, h3);
        /* card body */ h4.innerHTML = data.topic;
        p.innerHTML = data.content;
        cardBody.append(h4, p);
        /* card footer */ a.href = data.href;
        a.innerHTML = "read more";
        /* setting the innerHTML of th div */ card.append(
          cardHeader,
          cardBody,
          a
        );

        el.append(card);

      } else {
        el.innerHTML = loader;
      }
    }
    function setLink(data, el) {
      // links
      var link = document.createElement('a'),
        click = document.querySelectorAll('.card a'),
        a = document.querySelectorAll('#links a'),
        article = document.querySelector('article'),
        br = document.createElement('br');
      link.href = data.href;
      link.innerHTML = data.topic;
      el.append(link, br);

      // for (var i = 0; i < a.length; i++) {
      //   a[i].addEventListener('click', () => {
      //     click[0].click();  
      //        })
      // }
      a.forEach((cur, i) => {
        cur.addEventListener('click', () => {
          click[i].click()
        })
      })


    }
    data.sermon.forEach(data => {
      post(data, sermonDiv);
      setLink(data, sermonLinks)
    });
    data.blessing.forEach(data => {
      post(data, blessingDiv);
      setLink(data, blessingsLinks);
    });
    data.quick.forEach(data => {
      post(data, quickDiv);
      setLink(data, quickLinks)
    });

    new WOW().init();
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        nav: true,
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          1000: { items: 1 }
        }
      });
    }); /* end of owl */
    setTimeout(article, 500);
  }
  function getData(callBack) {
    var request = new XMLHttpRequest();
    request.onload = function () {
      var data = JSON.parse(request.responseText);
      callBack(data);
    };
    request.open("GET", "../json/ministers.json", true);
    request.send(null);
  }
  getData(data => {
    createPost(data);
  });
}

function article() {
  var a = document.querySelectorAll(".card a"),
    con = document.querySelector("main"),
    top = overview.getBoundingClientRect().top - 50,
    article = document.querySelector("article");
  a.forEach(cur => {
    {
      cur.addEventListener("click", event => {
        event.preventDefault();
        var txt = cur.parentElement.children[1].innerHTML;
        console.log(cur.parentElement);
        article.innerHTML = txt;
        con.scrollTop = top;
      });
    }
  });
}

(function () {
  renderPage(); /* owl carousel */
})();
