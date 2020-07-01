import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="https://cdn.shareaholic.net/assets/pub/shareaholic.js"
            as="script"
          />
          <meta
            name="shareaholic:site_id"
            content="0d0494c8e81e6b3c5c4d6ce2e8737f7c"
          />
          <script
            data-cfasync="false"
            async
            src="https://cdn.shareaholic.net/assets/pub/shareaholic.js"
          ></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Teko:wght@500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-144505091-4"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer = window.dataLayer || [];

        function gtag() {
                            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-144505091-4');
        gtag('config', 'G-7VQHYZT9GQ');`,
            }}
          ></script>
          <meta name="theme-color" content="#020" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Josefin+Sans:ital,wght@0,700;1,200;1,500&family=Montserrat:wght@500;800&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="stylesheet" href="/iconfont/material-icons.css" />
          <link rel="stylesheet" href="/fontawesome/css/fontawesome.min.css" />
          <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
          <script
            data-ad-client="ca-pub-1126228242280434"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>

          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/animate.min.css" />
          <link rel="stylesheet" href="/css/index.css" />
          <script src="/js/jquery.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/wow.min.js"></script>
          <meta
            property="og:title"
            content="GPPCR great physician pentecostal church of redeemer"
          />
          <meta
            property="og:description"
            content=" GPPCR - Great physician pentecostal church of redeemer  We believe the Bible to be the inspired, the only infallible, authoritative Word of God and inerrant in the original writings."
          />
          <meta
            name="keywords"
            content="gppcr, Great physician, church , Pastor, oluwakemi, great"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/main.js"></script>

        <script async src="https://static.addtoany.com/menu/page.js"></script>
      </Html>
    );
  }
}

export default MyDocument;
