import React from 'react';
import Layout from '../components/layout/layout';
import Link from 'next/link'
import Head from 'next/head'

export default props => {
    return <Layout title="Prayer request | GPPCR Great physician pent church<" body="we believe that all things are possible through God who strengthen us and if you believe it too just type in your prayer request here">
        <Head >
            <meta name="keywords" content="gppcr , prayer, church, prayer, praise cgallenge,great physician" />
        </Head>
        <header className="mt-5">
            <div id="header-bg" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#header-bg" data-slide-to="0" className="active"></li>
                    <li data-target="#header-bg" data-slide-to="1"></li>
                    <li data-target="#header-bg" data-slide-to="2"></li>
                    <li data-target="#header-bg" data-slide-to="3"></li>
                    <li data-target="#header-bg" data-slide-to="4"></li>
                    <li data-target="#header-bg" data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="/img/prayer (1).jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/prayer (2).jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/prayer (3).jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/prayer (4).jpg" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/prayer (5).jpg" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/bgc-4.jpg" alt="Third slide" />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#header-bg"
                    role="button"
                    data-slide="prev"
                >
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#header-bg"
                    role="button"
                    data-slide="next"
                >
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="container p ">
                <div className="row height-50 align-items-center text-white">
                    <div
                        className="col text-center wow slideInLeft "
                        id="something"
                        data-wow-duration="1.5s"
                    >
                        <h1 className="text-capitalize">Prayer Request</h1>
                        <p>Great physician pentecostal church of redeemer</p>
                        <p>
                            <a href="https://www.facebook.com/greatphysicianpentecostaloshodi/">
                                <i className="fab fa-facebook-f fa-2x  text-primary"></i></a>
                            <a href="https://chat.whatsapp.com/BwjhzBKvWDA9FpDSGctxlu"><i
                                className="fab fa-whatsapp fa-2x mx-3  text-success"></i></a>
                            <a href="https://www.youtube.com/channel/UCsuHF_CqyVjBYozRSG9sx-g">
                                <i className="fab fa-youtube fa-2x  text-red"></i></a>
                            <Link href="/gppcr-tv">
                                <a className="btn btn-danger">
                                    GPPCR TV
            </a>
                            </Link>
                        </p>
                    </div>
                    <div className="spin-icon wow bounce slower infinite">
                        <a href="#footer">
                            <i href="#footer" className="text-white fa-2x fa fa-arrow-down "></i
                            ></a>
                    </div>
                </div>
            </div>
        </header>
        <section id="intro" class="bg-white">
            <div class="container py-5">
                <div class="row">
                    <div class="col">
                        <h1 class="text- coprate">
                            Give Your Prayers to the Prophet
            </h1>
                        <p>
                            Prayer has long been a cornerstone of Christianity and will most
                            likely remain so throughout the ages. When one reads the Bible,
                            he or she will find many chapters and verses that refer to the
                            act of prayer, how one can pray effectively, and when prophetic
                            prayer is in order.
            </p>
                        <p>
                            Prayer is where Christians become acquainted with their Heavenly
                            Father’s heart. Prayer is also a place where Christians commune
                            with Jesus, and as that fellowship grows, their spirits become
                            more sensitive to what he is accomplishing in their day-to-day
                            lives. Prayer is a vital key to staying empowered to witness to
                            others and staying filled with the Holy Spirit.
            </p>
                        <p>
                            It is a great thing to find oneself on the receiving end of a
                            prophecy; however, care must be taken to ensure that one has
                            proper safeguards in place. The Bible states in the book of Luke
                            that when Mary was told she was to bear the Son of God, she
                            realized that people would not understand and held the knowledge
                            in her heart rather than telling everyone what was revealed to
                            her. She waited with complete faith in God for the fulfillment
                            of the promise in His own timing. It is for this reason that
                            many Christians keep a daily journal where they can record such
                            matters and share them only when they feel led to by God.
            </p>

                    </div>
                </div>
            </div>
        </section>

        <section id="form" class="bg-light">
            <div class="container my-5">
                <div class="row px-2">
                    <div class="col-md-6 col-lg-8 box">
                        <h1 class="text-center coprate p-2" style={{ fontSize: "2rem !important" }}>
                            SUBMIT YOUR PRAYER REQUEST
            </h1>
                        <form action="#" netlify id="requestForm">
                            <div class="form-group">
                                <input type="text" name="full-name" placeholder="Full name" class="form-control" />
                            </div>
                            <div class="form-group">
                                <input type="tel" name="number" placeholder="Phone number" class="form-control" />
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" placeholder="Email address" class="form-control" />
                            </div>
                            <div class="form-group">
                                <textarea rows="4" name="prayer request" required class="form-control"
                                    placeholder="Your prayer request"></textarea>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-block btn-success" type="submit">
                                    SUBMIT
                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col p-5">
                        <p>
                            The Bible declares in Proverbs 3:5-6, “Trust in the Lord with
                            all thine heart; and lean not unto thine own understanding. In
                            all thy ways acknowledge Him, and He shall direct thy paths.”
                            God delights in giving His children the desires of their hearts
                            when we seek Him in Spirit and in Truth.
            </p>
                        <p>
                            When you submit your prayer request, it goes directly to the
                            Mighty Warriors Prayer team and if you choose, our prayer wall
                            where believers all over the world will stand in agreement with
                            you right now.
            </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="extra" class="bg-purple">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <h1 class="text-center coprate p-2" style={{ fontSize: "2rem !important" }}>
                            Join us at our church
            </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="mapouter animate rubberBand">
                        <div class="gmap_canvas">
                            <iframe id="gmap_canvas"
                                src="https://maps.google.com/maps?q=23%2Cmosaku%20street%20oshodi%20lagos&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>Google Maps Generator by
              <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                        </div>
                        <style global> {`
                            .mapouter {
                                position: relative;
                text-align: right;
                height: 25rem;
                width: 100%;
              }

              .gmap_canvas {
                                overflow: hidden;
                background: none !important;
                height: 100%;
                width: 100%;
              }

              #gmap_canvas {
                  height: 100%;
                width: 100%;
              }
              `}
                        </style>
                    </div>
                </div>
            </div>
        </section>

    </Layout>
}