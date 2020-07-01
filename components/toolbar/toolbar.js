import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import "firebase/auth";
import Link from "../UI/Link/link";

export default (props) => {
  let isPhone;
  const [userExists, setUserExist] = React.useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    isPhone = window.innerWidth > 1100;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserExist(true);
        setUserData({ ...user });
      } else {
        setUserExist(false);
      }
    });
  }, []);
  return (
    <React.Fragment>
      <nav
        className={` py-2  fixed-top navbar  navbar-light bg-light x navbar-expand-lg`}
      >
        <div className="container">
          <Link href="/">
            <a className={"brand navbar-brand"}>
              <img src="/img/logo/gppcr-logo.png" alt="" />
              <h4 className="pl-3 mb-0">GPPCR</h4>
            </a>
          </Link>
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
                <Link activeClassName="active" href="/">
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
                <Link activeClassName="active" href="/gppcr-tv">
                  <a className="nav-link">GPPCR tv</a>
                </Link>
              </li>
              <li className="nav-item mx-2 ">
                <Link activeClassName="active" href="/praisechallenge">
                  <a className="nav-link">Praise challenge</a>
                </Link>
              </li>
              <li className="nav-item mx-2 ">
                <Link activeClassName="active" href="/events">
                  <a className="nav-link">Events</a>
                </Link>
              </li>
              <li className="nav-item mx-2 ">
                <a className="nav-link" href="/ministers-desk">
                  Ministers Desk
                </a>
              </li>
              <li className="nav-item mx-2 ">
                <Link activeClassName="active" href="/prayer-request">
                  <a className="nav-link">Prayer Request</a>
                </Link>
              </li>
            </ul>
          </div>
          {userExists ? (
            <div className="d-flex align-items-center ">
              <img
                src={userData.photoURL}
                className="rounded-pill mx-3"
                alt=""
                style={{ height: "3rem" }}
              />
              <span
                className="d-none d-md-inline-block"
                style={{ fontSize: ".8rem" }}
              >
                {userData.displayName}
              </span>
            </div>
          ) : (
              <Link activeClassName="active" href="/login">
                <a className="btn btn-outline-dark">Login</a>
              </Link>
            )}
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            background: var(--light);
            background-size: cover;
            background-position: bottom;
            box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
            z-index: 2000;
          }
          nav::-webkit-scrollbar {
            height: 1px;
          }
          nav img {
            height: 2.6rem;
          }
          .plug > * {
            display: flex;
            align-items: center;
          }

          nav .brand {
            display: flex;
            align-items: center;
            padding: 0 !important;
          }

          .nav-link:hover,
          .active {
            color: green !important;
          }
          @media only screen and (min-width: 1200px) {
          }
        `}
      </style>
    </React.Fragment>
  );
};
