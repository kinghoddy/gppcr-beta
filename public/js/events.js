function render() {
  var loader =
    '<section class="mt-2"><img src="../img/load.gif" alt="loader" class="gif"></section><section class="mt-2"><img src="../img/load.gif" alt="loader" class="gif"></section><section class="mt-2"><img src="../img/load.gif" alt="loader" class="gif"></section>';
  function createPost(data) {
    postDiv = document.getElementById("posts");


    // replacing the html
    data.forEach(cur => {
      var html =
        '<!-- posts --> <section title= "%title%" id= "%id%" class="my-2 py-3"><title>%title2%</title>  <div class="container"> <div class="row"> <div class="col img-box ml-2"><img src="../img/%logo%" alt="logo" ></div> <div class="col font-weight-bold"> <h2 class="h4 font-weight-bold">%header%</h2> <p>%subHeader%<span class="pl-3 font-weight-light text-capitalize">%date%</span> </p> </div> <div class="col-12 px-0"> <p class="px-3"> %description% </p> <figure> %figure%<figcaption class="p-2">%caption%</figcaption><div class="ml-3 my-3 fb-like" data-href="https://gppcroshodi.ga/html/events#%id3%" data-width="" data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div> <div class="fb-comments w-100" data-href="https://gppcroshodi.ga/html/events#%id2%" data-width="100%" data-numposts="0"></div></figure> </div> </div> </div> </section>  ',
        html = html.replace("%id%", cur.id);
      html = html.replace("%id2%", cur.id);
      html = html.replace("%id3%", cur.id);
      html = html.replace("%logo%", cur.logo);
      html = html.replace("%header%", cur.header);
      html = html.replace("%title%", cur.header);
      html = html.replace("%title2%", cur.header);
      html = html.replace("%subHeader%", cur.subHeader);
      html = html.replace("%date%", cur.date);
      html = html.replace("%description%", cur.description);
      html = html.replace("%figure%", cur.figure);
      html = html.replace("%href%", cur.href);
      html = html.replace("%caption%", cur.caption);

      // adding the html to the div
      postDiv.innerHTML += html;
      // popup
    });
    $(".image-link").magnificPopup({
      type: "image",
      gallery: { enabled: true }
    });
    $('.parent-con').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: { enabled: true }
      // other options
    });

    // end of popup
  }
  function createAds(data) {
    // replacing the html
    data.forEach(cur => {
      var html =
        '<section title= "%title%" id= "%id%" style="overflow:visible" class="my-2"> <div class="container"> %content% </div> </section>',
        html = html.replace("%id%", cur.id);
      html = html.replace("%title%", cur.title);
      html = html.replace("%content%", cur.content);

      // adding the html to the div
      adsDiv.innerHTML += html;
      // owl carousel
      $(document).ready(function () {
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
              items: 1
            }
          }
        });
      });
      // end of owl
      // popup
      // popup
      $(".image-link").magnificPopup({
        type: "image"
      });
      // end of popup
    });
  }
  function getPosts(callback) {
    var req = new XMLHttpRequest();
    posts.innerHTML = loader;
    req.onloadstart = () => {
      posts.classList.add("text-center");
    };
    req.onloadend = () => {
      var data = JSON.parse(req.responseText);
      posts.innerHTML = "";
      callback(data);
      posts.classList.remove("text-center");
    };
    req.open("GET", "../json/events.json", true);
    req.send(null);
  }
  function getAds(callback) {
    var req = new XMLHttpRequest();
    adsDiv.innerHTML = loader;
    req.onloadstart = () => {
      adsDiv.classList.add("text-center");
    };
    req.onloadend = () => {
      var data = JSON.parse(req.responseText);
      setTimeout(() => {
        adsDiv.innerHTML = "";
        callback(data);
        adsDiv.classList.remove("text-center");
      }, 1000);
    };
    req.open("GET", "../json/ads.json", true);
    req.send(null);
  }
  getPosts(createPost);
  getAds(createAds);
}

(function () {
  render();
})();
