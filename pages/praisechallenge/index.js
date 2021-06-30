import React, { Component } from "react";
import Layout from "../../components/layout/layout";
import Link from "next/link";

export default class Pchallenge extends Component {
  render() {
    return (
      <Layout title="Praise Challenge GPPCR">
        <header>
          <div className="container text-light">
            <div className="row align-items-center">
              <div className="col text-center">
                <h2 className="text-uppercase">Praise Challenge Season 4</h2>
                <Link
                  href="/praisechallenge/[sid]"
                  as="/praisechallenge/season4"
                >
                  <a className="btn btn-warning">Go to challenge</a>
                </Link>
              </div>
            </div>
          </div>
        </header>
        <section className="bg-light">
          +
          <div className="container">
            <div className="row  text-center  py-5">
              <div className="col">
                <h2 className="display-5">How To Participate</h2>
                <div className="underline bg-success "></div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ol>
                  <li>
                    Read the bible passage for the day. Sing a song in line with
                    your knowledge and interpretation of the passage. Your song
                    could be a hymn or any song of praise
                  </li>
                  <li>
                    Record an audio of the song or type the lyrics of the song
                    in the comment section of the praise challenge page
                  </li>
                  <li>Tag a friend to sing along with you</li>
                  <li>
                    Post the Bible verse and the song on any of your social
                    media platforms
                  </li>
                  <li>Struggle to be the first person to post on the site.</li>
                  Psalm118:15: The sound of joyful shouting and salvation is in
                  the tents of the righteous.
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light">
          <div className="container">
            <div className="row  text-center  py-5">
              <div className="col">
                <h2 className="display-5">Previous Seasons</h2>
                <div className="underline bg-danger   "></div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link
                  href="/praisechallenge/[sid]?timer=false"
                  as="/praisechallenge/season3?timer=false"
                >
                  <a className="btn btn-warning">Season 3</a>
                </Link>
              </div>
              <div className="col">
                <a
                  target="blank"
                  className="btn btn-lg rounded-pill btn-info px-2"
                  href="https://praisechallenge.netlify.com"
                >
                  Praise challenge Season 2
                </a>
              </div>
              <div className="col">
                <a
                  target="blank"
                  className="btn btn-lg rounded-pill btn-primary px-2"
                  href="https://gppcroshodi.ga/html/praise-challenge"
                >
                  Praise challenge Season 1
                </a>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          header {
            padding-top: 2rem;
            display: flex;
            align-items: center;
            background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
              url(/img/mike.jpg) center;
            background-size: cover;
            height: 60vh;
          }
        `}</style>
      </Layout>
    );
  }
}
