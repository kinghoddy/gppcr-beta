import React, { Component } from "react";
import Layout from "../../components/layout/layout";
import Link from "next/link";
import firebase from "../../firebase";
import "firebase/database";
import Post from "../../components/post/pc";
import CountDown from "../../components/countdown";

export default class SeasonId extends Component {
  static async getInitialProps({ query }) {
    return query;
  }
  state = {
    posts: [],
    season: 3,
    Day: 0,
  };
  componentDidMount() {
    this.getPosts();
    this.setState({ season: this.props.sid.split("season")[1] });
    setInterval(() => {
      let day = 0;
      let date = new Date();
      if (date.getMonth() >= 10) {
        day = date.getDate() + (date.getMonth() === 11 ? 30 : 0);
      }
      this.setState({ Day: day });
    }, 1000);
  }
  getPosts = () => {
    this.setState({ loading: true });
    firebase
      .database()
      .ref("pc/" + this.props.sid)
      .on("value", (s) => {
        let p = [];
        for (let keys in s.val()) {
          p.push({
            ...s.val()[keys],
            key: keys,
            id: this.props.sid + "/" + keys,
          });
        }
        this.setState({ posts: p.reverse(), loading: false });
      });
  };
  render() {
    return (
      <Layout title={"SEASON " + this.state.season + " Praise Challenge GPPCR"}>
        <header>
          <div className="container text-light">
            <div className="row align-items-center">
              <div className="col text-center">
                <h2 className="text-uppercase heading">
                  <span> Praise Challenge Season </span>
                  <span className="three">{this.state.season}</span>
                </h2>
                {this.state.loading && <div className="spinner-border"></div>}
                {this.state.loading && <div className="spinner-grow"></div>}
                {this.state.loading && <div className="spinner-border"></div>}
              </div>
              {this.props.timer !== "false" && (
                <div className="col-12">
                  <CountDown />
                </div>
              )}
            </div>
            {this.props.timer !== "false" && this.state.Day > 0 && (
              <div className="row pane">
                <div className="col text-center">
                  <h5 className="mb-0">Praise Challenge Completed </h5>
                </div>
              </div>
            )}
          </div>
        </header>

        <section id="bible" className="bg-light py-5">
          <div className="container">
            {this.state.posts.map((cur, i) =>
              this.state.posts.length - i <= this.state.Day ||
              this.props.timer === "false" ? (
                <Post {...cur} day={this.state.posts.length - i} />
              ) : null
            )}
          </div>
        </section>
        <style jsx>{`
          header {
            padding-top: 2rem;
            display: flex;
            align-items: center;
            background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
              url(/img/mike.jpg) center;
            background-size: cover;
            position: relative;
            min-height: 70vh;
            overflow : visible;
          }
          .pane {
            background: var(--white);
            color: var(--dark);
            padding: 0.8rem 1rem;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
            position: absolute;
            width: 100%;
            margin : 0;
            max-width : 760px;
            left 50%;
            bottom: 0;
            transform : translate(-50% , 50%) ;
            z-index : 10000;
          }
          .heading {
            font-family: "Teko", sans-serif;
            background: linear-gradient(to right, #f80, yellow);
            font-size: 1.5rem;
            color: transparent;
            font-weight: 700;
            align-items: center;
            display: flex;
            justify-content: center;
            -webkit-background-clip: text;
            background-clip: text;
          }

          .three {
            color: white;
            padding-left: 0.4rem;
            padding-top: 0.5rem;
            font-family: Josefin Sans, cursive;
            font-size: 3rem;
          }
          @media only screen and (min-width: 760px) {
            .heading {
              font-size: 2.6rem;
            }
            .three {
              font-size: 4rem;
            }
          }
          @media only screen and (min-width: 1200px) {
            .heading {
              font-size: 3rem;
            }
            .three {
              font-size: 6rem;
              padding-left: 1rem;
              padding-top: 1rem;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
