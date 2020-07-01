import React, { Component } from "react";
import Head from "next/head";
import Footer from "../footer/footer";
import firebase from "../../firebase";
import "firebase/auth";
import Link from "../UI/Link/link";
const google = () => {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "UA-144505091-4");
  gtag("config", "G-7VQHYZT9GQ");
};
class Layout extends Component {
  state = {
    userExists: false,
    userData: {},
  };
  componentDidMount() {
    google();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userExists: true, userData: { ...user } });
      } else {
        this.setState({ userExists: false });
      }
    });
  }

  render() {
    return (
      <div>
        <Head>
          <link href="/img/logo/gppcr-logo.png" rel="shortcut icon" />
          <meta property="og:image" content="/img/logo/gppcr-logo.png" />
          <meta property="og:title" content={this.props.title} />
          <title>{this.props.title ? this.props.title : ""}</title>
          <meta property="og:description" content={this.props.body} />
        </Head>

        <nav className="py-0 navbar navbar-expand-md  navbar-dark bg-dark sticky-top">
          <div className="container">
            <div className="d-flex align-items-center navbar-brand">
              <Link href="/">
                <a>
                  <img
                    style={{ height: "3rem" }}
                    src="/img/logo/gppcr-logo.png"
                  />
                </a>
              </Link>
              <Link href="/gppcr-tv">
                <a>
                  <h5 className="mb-0 pl-3 text-light">GPPCR tv</h5>
                </a>
              </Link>
            </div>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#topNav"
              aria-controls="topNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="material-icons">menu</i>
            </button>
            <div className="collapse navbar-collapse py-3 py-lg-0" id="topNav">
              <ul className="navbar-nav ml-auto  mt-0">
                <li className="nav-item mx-2 dropdown active">
                  <Link href="/">
                    <a
                      className="nav-link dropdown-toggle"
                      id="dropHome"
                      data-toggle="dropdown"
                    >
                      Home
                    </a>
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="dropHome">
                    <Link activeClassName="active" href="/#">
                      <a className="dropdown-item">
                        <i className="fa fa-home fa-2x"></i>
                      </a>
                    </Link>
                    <Link activeClassName="active" href="/#about">
                      <a className="dropdown-item">About Us</a>
                    </Link>
                    <Link activeClassName="active" href="/#gatherings">
                      <a className="dropdown-item">Our Gatherings</a>
                    </Link>
                    <a href="/#portfolio" className="dropdown-item">
                      Our Portfolio
                    </a>
                    <a href="/#ministers" className="dropdown-item">
                      Meet our ministers
                    </a>
                    <a href="/#contact" className="dropdown-item">
                      Conteact us
                    </a>
                  </div>
                </li>
                <li className="nav-item mx-2 ">
                  <Link activeClassName="active" href="/daily-blessings">
                    <a className="nav-link">Daily Blessings</a>
                  </Link>
                </li>
                <li className="nav-item mx-2 ">
                  <Link activeClassName="active" href="/praisechallenge/">
                    <a className="nav-link">Praise challenge</a>
                  </Link>
                </li>
                <li className="nav-item mx-2 ">
                  <Link activeClassName="active" href="/events">
                    <a className="nav-link">Events</a>
                  </Link>
                </li>
              </ul>
            </div>
            {this.state.userExists ? (
              <div className="d-flex align-items-center text-light">
                <img
                  src={this.state.userData.photoURL}
                  className="rounded-pill mx-3"
                  alt=""
                  style={{ height: "3rem" }}
                />
                <span
                  className="d-none d-md-inline-block"
                  style={{ fontSize: ".8rem" }}
                >
                  {this.state.userData.displayName}
                </span>
              </div>
            ) : (
              <Link activeClassName="active" href="/login">
                <a className="btn btn-outline-light">Login</a>
              </Link>
            )}
          </div>
        </nav>

        {this.props.children}
        <Footer />
        <style jsx>{`
          .overflow {
            overflow-x: hidden;
          }
        `}</style>
      </div>
    );
  }
}
0;
export default Layout;
