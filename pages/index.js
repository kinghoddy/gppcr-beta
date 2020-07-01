import React, { Component } from 'react'
import Link from 'next/link';
import Layout from '../components/layout/layout'

export default class Home extends Component {
  state = {
    bg: 'none'
  }
  componentDidMount() {

    window.addEventListener('scroll', e => {

      if (document.documentElement.scrollTop > 50) {
        this.setState({ bg: '#fff' })
      } else {
        this.setState({ bg: 'none' })
      }
    })
  }
  render() {

    return (
      <Layout bg={this.state.bg} title="Home | GPPCR great physician pentecostal church of redeemer">
        <header>
          <div className="elfsight-app-b6c142f5-a479-4825-9bfc-ba83f6436219"></div>

          <div id="header-bg" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img src="/img/bible-blur.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img src="/img/desk-1.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img src="/img/desk-2.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img src="/img/bgc-3.jpg" alt="Third slide" />
              </div>
              <div className="carousel-item">
                <img src="/img/prayer (2).jpg" alt="hird slide" />
              </div>
              <div className="carousel-item">
                <img src="/img/bg-1.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#header-bg" role="button" data-slide="prev">
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#header-bg" role="button" data-slide="next">
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="container ">
            <div className="row height-90 align-items-center  text-white">
              <div className="col-md-12 col-lg-8 text-center text-lg-left pt-5 wow slideInLeft " data-wow-duration="1.5s">
                <h1 className="text-capitalize h2 text-center text-lg-left  ">
                  Great physician pentecostal church of redeemer
            <small>GPPCR <small className="h5">Oshodi</small></small>
                </h1>
                <p>solution centre</p>
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
              <div className=" col-4 d-none d-lg-flex wow slideInRight" data-wow-duration="1.5s">
                <img src="/img/logo/logo.png" style={{ width: '300px' }} alt="gppcr logo" className="wow fadeIn"
                  data-wow-duration="5s" />
              </div>
              <div className="spin-icon wow bounce slower infinite">
                <a href="#footer">
                  <i href="#footer" className="text-white fa-2x fa fa-arrow-down "></i></a>
              </div>
            </div>
          </div>
        </header>

        <section id="about" class="py-5">
          <div class="container mt-5">
            <div class="row text-center">
              <div class="col">
                <h2 class="display-4">About Us</h2>
                <div class="underline bg-warning"></div>
              </div>
            </div>
            <div class="row pt-5">
              <div class=" col-md-6 pr-md-5 pb-5 wow slideInLeft">
                <h4 class="text-capitalize  wow tada" data-wow-duration="2s">
                  <small class="font-weight-bold ">
                    <i class="fas fa-people-carry fa-2x  wow slideInUp  mr-3"></i>
              welcome people of god</small>
                </h4>
                <p>
                  to our church - GPPCR invites you to look around and get a feel
                  for our church. Feel free to share any comments or questions that
                  might be on your mind through our online guest book. If you're not
                  currently a member of our church - we'd like to take this
                  opportunity to invite you to one of our
            <a href="#weekly" class="text-success">weekly opportunities</a>
            And of course, feel free to reach out and call one of our
            <a href="#ministers" class="text-success">Pastors or Ministry Leaders.</a>
                </p>
                <br />
                <h4 class="text-capitalize font-weight-bold">
                  <small class="font-weight-bold"><i class="fas fa-utensils mr-3 fa-2x"></i> made just for
              you</small>
                </h4>
                <p>
                  We hope you and your family will have a warm and spirit-filled
                  experience with us as we worship and fellowship together at our
                  services, events, and ministries
          </p>
                <br />

                <h4 class="text-capitalize font-weight-bold">
                  <small class="font-weight-bold"><i class="far mr-3 fa-heart fa-2x"></i>Let us pray</small>
                </h4>
                <p>
                  We'd also like to invite you to make an
            <a href="./html/prayer.html" class="text-success">online prayer request.</a>
            Your prayer request opens the door, and God is waiting patiently
            on the other side of that door, at all times, in all situations,
            to join with you
          </p>
              </div>
              <div class="col-md-6 pl-md-5  wow slideInRight">
                <h2 class="text-capitalize text-center pb-5">what we believe</h2>
                <p>
                  At GPPCR, believe the Bible to be the inspired, the only
                  infallible, authoritative Word of God and inerrant in the original
                  writings. We believe that there is one God, eternally existing in
                  three persons: Father, Son, and Holy Spirit. We believe in the
                  deity of our Lord Jesus Christ, in His virgin birth, in His
                  sinless life, in His miracles, in His vicarious and atoning death
                  through His shed blood, in His bodily resurrection, in His
                  ascension to the right hand of the Father, and in His personal
                  return in power and glory.
          </p>
                <br />
                <p>
                  We believe that the lost and sinful man must be saved, and that
                  man's only hope of redemption is through the shed blood of Jesus
                  Christ, the Son of God. We believe in and practice the holy
                  ordinance of water baptism, which signifies the believer's death,
                  burial, and resurrection into new life with Christ Jesus, and the
                  regular celebration of Holy Communion as commanded by our Lord.
          </p>
              </div>
            </div>
            <div class="row py-5">
              <div class="col d-flex justify-content-center">
                <div>
                  Check out
                   <Link href="/gppcr-tv" >
                    <a class="pl-4 btn btn-outline-danger mx-auto btn-lg rounded-pill">Go to GPPCT tv</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gatherings" class="bg-dark">
          <div class="container text-center py-5 text-light">
            <iframe src="https://mixlr.com/users/8499239/embed" width="100%" height="180px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe><small><a href="https://mixlr.com/gppcr-radio" >GPPCR on Mixlr</a></small>
          </div>
        </section>
        <section id="gatherings" class="bg-grey ">
          <div class="container-fluid text-center  py-5">
            <div class="row  text-center  py-5">
              <div class="col">
                <h2 class="display-5">Our Gatherings</h2>
                <div class="underline bg-success mb-3   "></div>
                <h5 class="h6 pb-4">
                  Check out our <br />
            list of gatherings at GPPCR
          </h5>
              </div>
            </div>
            <div class="row pb-5 justify-content-around">
              <div class="col-12 pb-3">
                <h3>Our weekly activities</h3>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 py-3">
                <div
                  class="wow slideInDown mx-auto mb-4 text-white icon bg-warning d-flex align-items-center justify-content-center">
                  <i class="far fa-lightbulb fa-2x"></i>
                </div>
                <h4><i class="fas fa-sun fa-1x  "></i>Sunday</h4>
                <p class="font-weight-light">
                  Sunday school (9:00am) <br />
            Sunday service (10:00am)
          </p>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 py-3">
                <div
                  class="wow slideInUp mx-auto mb-4 text-white icon bg-warning d-flex align-items-center justify-content-center">
                  <i class="fa fa-church fa-2x"></i>
                </div>
                <h4><i class="fas fa-sun fa-1x  "></i>Tuesday</h4>
                <p class="font-weight-light">
                  PUSH ministry with Evang Oladimeji Apata (9:00am to 11:00am)
          </p>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 py-3">
                <div
                  class="wow slideInDown mx-auto mb-4 text-white icon bg-warning d-flex align-items-center justify-content-center">
                  <i class="fa fa-bible fa-2x"></i>
                </div>
                <h4><i class="fas fa-sun fa-1x  "></i>Wednesday</h4>
                <p class="font-weight-light">
                  Bible study <br />
            (6:00pm to 8:00pm)
          </p>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 py-3">
                <div
                  class="wow slideInUp mx-auto mb-4 text-white icon bg-warning d-flex align-items-center justify-content-center">
                  <i class="far fa-calendar-alt fa-2x"></i>
                </div>
                <h4><i class="fas fa-sun fa-1x  "></i>Friday</h4>
                <p class="font-weight-light">
                  Prayer meeting <br />
            (6:00pm to 7:00pm
          </p>
              </div>
            </div>
            <div class="row pb-5 justify-content-around">
              <div class="col-12 pb-3">
                <h3>Our monthly activities</h3>
              </div>
              <div class="col-12 col-sm-6 col-md-3 py-3">
                <div
                  class="wow slideInUp mx-auto mb-4 text-white icon bg-warning d-flex align-items-center justify-content-center">
                  <i class="far fa-calendar-alt fa-2x"></i>
                </div>
                <h4 class="text-capitalize h5">
                  <i class="fas fa-sun fa-1x  "></i>First Sunday OF the month
          </h4>
                <p class="font-weight-light">
                  Thanks giving and Holy communion service <br />
            10:00am to 1:00pm
          </p>
              </div>
              <div class="col-12 col-sm-6 col-md-3 py-3">
                <div
                  class="wow slideInUp mx-auto mb-4 text-white icon bg-warning d-flex align-items-center justify-content-center">
                  <i class="far fa-calendar-alt fa-2x"></i>
                </div>
                <h4 class="text-capitalize h5">
                  <i class="fas fa-sun fa-1x  "></i>Second Sunday OF the month
          </h4>
                <p class="font-weight-light">
                  Anointing service <br />
            10:00am to 1:00pm
          </p>
              </div>
              <div class="col-12 col-sm-6 col-md-3 py-3">
                <div
                  class="wow slideInUp mx-auto mb-4 text-white icon bg-warning d-flex align-items-center justify-content-center">
                  <i class="far fa-calendar-alt fa-2x"></i>
                </div>
                <h4 class="text-capitalize h5">
                  <i class="fas fa-sun fa-1x  "></i>Last Sunday OF the month
          </h4>
                <p class="font-weight-light">
                  Covenant Seed and worship service <br />
            10:00am to 1:00pm
          </p>
              </div>
              <div class="col-12 col-sm-6 col-md-3 py-3">
                <div
                  class="wow slideInUp mx-auto mb-4 text-white icon bg-warning d-flex align-items-center justify-content-center">
                  <i class="far fa-calendar-alt fa-2x"></i>
                </div>
                <h4 class="text-capitalize h5">
                  <i class="fas fa-sun fa-1x  "></i>First Monday OF the month
          </h4>
                <p class="font-weight-light">
                  One hour with Christ <br />
            6:45am to 7:45am
          </p>
              </div>
              <div class="col-12 col-sm-6 col-md-3 py-3">
                <div
                  class="icon wow slideInUp mx-auto mb-4 text-white  bg-warning d-flex align-items-center justify-content-center">
                  <i class="far fa-calendar-alt fa-2x"></i>
                </div>
                <h4 class="text-capitalize h5">
                  <i class="fas fa-sun fa-1x  "></i>First Friday of the month
          </h4>
                <p class="font-weight-light">
                  Vigil <br />
            (11:00pm to 4:00am)
          </p>
              </div>
              <div class="col-12 col-sm-6 col-md-3 py-3">
                <div
                  class="wow slideInUp mx-auto mb-4 text-white icon bg-warning d-flex align-items-center justify-content-center">
                  <i class="far fa-calendar-alt fa-2x"></i>
                </div>
                <h4 class="h5">
                  <i class="fas fa-sun fa-1x  "></i>Third Friday of the month
          </h4>
                <p class="font-weight-light">
                  Night of the prayer champions <br />
            11:00pm
          </p>
              </div>
            </div>
            <div class="row text-center">
              <div class="col">
                You can Check out our
                 <Link href="html/events.html">
                  <a class="btn mx-3 btn-danger ">
                    events page
          </a>
                </Link>
          for more
        </div>
            </div>
          </div>
        </section>
        <section id="ministers" class=" py-5">
          <div class="container py-5">
            <div class="row pb-5">
              <div class="col text-center text-capitalize">
                <h2 class="display-5">Meet our ministers</h2>
                <div class="underline bg-info"></div>
              </div>
            </div>
            <div class="row justify-content-around">
              <div class="col-md-6 col-lg-4 py-2 wow slideInRight">
                <div class="card">
                  <img src="/img/ministers/go.jpg" alt="ministers" class="card-img-top" />
                  <div class="card-body">
                    <div class="card-title text-capitalize">Pastor I.A sogbuyi</div>
                    <p class="card-text">
                      Romans 12:14  Bless them which persecute you: bless, and curse
                      not.
              </p>
                    <Link href="ministers">
                      <a class="btn btn-outline-warning text-uppercase">press here</a>
                    </Link>
                  </div>
                  <div class="card-footer bg-secondary d-flex justify-content-around ">
                    <a href="https://www.facebook.com/greatphysicianpentecostaloshodi/"><i
                      class="fab text-white  fa-2x fa-facebook"></i></a>
                    <a href="https://chat.whatsapp.com/BwjhzBKvWDA9FpDSGctxlu"><i
                      class="fab text-white fa-2x fa-whatsapp"></i></a>
                    <a href="https://www.youtube.com/channel/UCsuHF_CqyVjBYozRSG9sx-g"><i
                      class="fab text-white fa-2x fa-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 py-2 wow slideInUp">
                <div class="card">
                  <img src="/img/ministers/lolade2.jpg" alt="ministers" class="card-img-top" />
                  <div class="card-body">
                    <div class="card-title text-capitalize">
                      Prophetess Ololade Akanbi
              </div>
                    <p class="card-text">
                      Romans 12:14  Bless them which persecute you: bless, and curse
                      not.
              </p>
                    <Link href="/ministers">
                      <a class="btn btn-outline-warning text-uppercase">press here</a>
                    </Link>
                  </div>
                  <div class="card-footer bg-secondary d-flex justify-content-around ">
                    <a href="https://www.facebook.com/greatphysicianpentecostaloshodi/"><i
                      class="fab text-white  fa-2x fa-facebook"></i></a>
                    <a href="https://chat.whatsapp.com/BwjhzBKvWDA9FpDSGctxlu"><i
                      class="fab text-white fa-2x fa-whatsapp"></i></a>
                    <a href="https://www.youtube.com/channel/UCsuHF_CqyVjBYozRSG9sx-g"><i
                      class="fab text-white fa-2x fa-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 py-2 col-lg-4  wow slideInLeft">
                <div class="card">
                  <img src="img/ministers/oluwakemi.jpg" alt="ministers" class="card-img-top" />
                  <div class="card-body">
                    <div class="card-title text-capitalize">
                      Pastor Kemi sogbuyi
              </div>
                    <p class="card-text">
                      Psalm 91:11  For he shall give his angels charge over thee, to
                      keep thee in all thy ways.
              </p>
                    <a href="ministers" class="btn btn-outline-warning text-uppercase">press here</a>
                  </div>
                  <div class="card-footer bg-secondary d-flex justify-content-around ">
                    <a href="https://www.facebook.com/greatphysicianpentecostaloshodi/"><i
                      class="fab text-white  fa-2x fa-facebook"></i></a>
                    <a href="https://chat.whatsapp.com/BwjhzBKvWDA9FpDSGctxlu"><i
                      class="fab text-white fa-2x fa-whatsapp"></i></a>
                    <a href="https://www.youtube.com/channel/UCsuHF_CqyVjBYozRSG9sx-g"><i
                      class="fab text-white fa-2x fa-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 py-2 col-lg-4  wow slideInRight">
                <div class="card">
                  <img src="img/ministers/aremu.jpg" alt="ministers" class="card-img-top" />
                  <div class="card-body">
                    <div class="card-title text-capitalize">Prophetess Aremu</div>
                    <p class="card-text">
                      Psalm 91:11  For he shall give his angels charge over thee, to
                      keep thee in all thy ways.
              </p>
                    <a href="ministers" class="btn btn-outline-warning text-uppercase">press here</a>
                  </div>
                  <div class="card-footer bg-secondary d-flex justify-content-around ">
                    <a href="https://www.facebook.com/greatphysicianpentecostaloshodi/"><i
                      class="fab text-white  fa-2x fa-facebook"></i></a>
                    <a href="https://chat.whatsapp.com/BwjhzBKvWDA9FpDSGctxlu"><i
                      class="fab text-white fa-2x fa-whatsapp"></i></a>
                    <a href="https://www.youtube.com/channel/UCsuHF_CqyVjBYozRSG9sx-g"><i
                      class="fab text-white fa-2x fa-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 py-2 wow slideInUp">
                <div class="card">
                  <img src="img/ministers/apata2.jpg" alt="ministers" class="card-img-top" />
                  <div class="card-body">
                    <div class="card-title text-capitalize">
                      Evangelist Oladimeji apata
              </div>
                    <p class="card-text">
                      Isaiah 55:5  Behold, thou shalt call a nation that thou
                      knowest not, and nations that knew not thee shall run unto
                      thee because of the LORD thy God, and for the Holy One of
                      Israel; for he hath glorified thee.
              </p>
                    <a href="ministers" class="btn btn-outline-warning text-uppercase">press here</a>
                  </div>
                  <div class="card-footer bg-secondary d-flex justify-content-around ">
                    <a href="https://www.facebook.com/greatphysicianpentecostaloshodi/"><i
                      class="fab text-white  fa-2x fa-facebook"></i></a>
                    <a href="https://chat.whatsapp.com/BwjhzBKvWDA9FpDSGctxlu"><i
                      class="fab text-white fa-2x fa-whatsapp"></i></a>
                    <a href="https://www.youtube.com/channel/UCsuHF_CqyVjBYozRSG9sx-g"><i
                      class="fab text-white fa-2x fa-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 py-2 wow slideInLeft">
                <div class="card">
                  <img src="img/ministers/funmi.jpg" alt="ministers" class="card-img-top" />
                  <div class="card-body">
                    <div class="card-title text-capitalize">
                      Deaconess Funmilayo Agidi
              </div>
                    <p class="card-text">
                      Job 19:25  For I know that my redeemer liveth, and that he
                      shall stand at the latter day upon the earth:
              </p>
                    <a href="ministers" class="btn btn-outline-warning text-uppercase">press here</a>
                  </div>
                  <div class="card-footer bg-secondary d-flex justify-content-around ">
                    <a href="https://www.facebook.com/greatphysicianpentecostaloshodi/"><i
                      class="fab text-white  fa-2x fa-facebook"></i></a>
                    <a href="https://chat.whatsapp.com/BwjhzBKvWDA9FpDSGctxlu"><i
                      class="fab text-white fa-2x fa-whatsapp"></i></a>
                    <a href="https://www.youtube.com/channel/UCsuHF_CqyVjBYozRSG9sx-g"><i
                      class="fab text-white fa-2x fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row text-center mt-5">
              <div class="col">
                You can Check out our
                 <Link href="/ministers">
                  <a class="btn mx-3 btn-danger ">
                    Ministers Desk
          </a>
                </Link>
          for inspiring messages <strong><small>GPPCR </small></strong>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-lg-5 py-5 d-flex justify-content-around flex-column align-items-center"
                style={{ height: "50vh" }}>

                <div class="mapouter wow rubberBand">
                  <div class="gmap_canvas">
                    <iframe id="gmap_canvas"
                      src="https://maps.google.com/maps?q=23%2Cmosaku%20street%20oshodi%20lagos&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>Google Maps Generator by
              <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                  </div>
                  <style jsx> {`
                    .mapouter {
                      position: relative;
                text-align: right;
                height: 100%;
                width: 90%;
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
              <div class="col-md-6 col-lg-7  clip-path py-5 ">
                <div class="row py-4 wow bounce" data-wow-duration="1.5s">
                  <div class="col text-center text-capitalize">
                    <h2 class="display-5">Contact Us</h2>
                    <div class="underline bg-danger"></div>
                  </div>
                </div>
                <div class="row wow flipInY" data-wow-duration="1.5s">
                  <form id="contact-form" netlify>
                    <div class="form-group row px-5">
                      <div class="col-md-6 p-0 pr-md--2 my-2">
                        <input type="text" class="form-control " name="Fullname" placeholder="Full name" />
                      </div>
                      <div class=" col-md-6 p-0 pl-md-2 my-2">
                        <input type="email" class="form-control" name="email" placeholder="Email address" />
                      </div>
                      <textarea name="message" rows="3" class="form-control my-3" placeholder="Your message"></textarea>
                      <input type="submit" value="Submit" class="btn btn-success btn-block my-3" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style global>
          {`
          .icon {
            width: 5.5rem;
            border-radius: 50%;
            height: 5.5rem;
            box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
}
#contact {
}
.clip-path {
  background: rgba(255, 255, 255, 0.8);
}
.form-control {
  border: 0;
  padding: 0.7rem 1rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
@media screen and (min-width: 992px) {
  .clip-path {
    padding-left: 10%;
  }
}
          `}
        </style>
      </Layout >
    )
  }
}

