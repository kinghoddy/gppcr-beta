import React, { Component } from "react";
import firebase from "../../firebase";
import "firebase/database";
import CommentForm from "../../components/forms/comment/comment";
import VC from "../../components/videochat/videochat";
import Posts from "../../components/tvPost";
import Layout from "../../components/layout/tv";
import Link from "next/link";

import Spinner from "../../components/UI/Spinner/Spinner";
export default class Watch extends Component {
  state = {
    name: "",
    comment: "",
    loading: true,
    activity: "",
    posts: [],
    nextActivity: "",
  };
  inputChanged = (e, type) => {
    console.log(type);
    if (type === "name") {
      this.setState({ name: e.target.value });
    } else {
      this.setState({ comment: e.target.value });
    }
  };

  componentDidMount() {
    const ref = firebase.database().ref("activity/");
    ref.once("value", (s) => {
      this.getPosts(s.val().activity);
      this.setState({ activity: s.val().activity });
    });
    firebase
      .database()
      .ref("tv/")
      .on("value", (s) => {
        const data = s.val();
        this.setState({ live: data.live, nextActivity: data.nextActivity });
      });
  }
  sendPost = (e, userData) => {
    e.preventDefault();
    console.log(userData);
    let post = {
      username: this.state.name,
      comment: this.state.comment.split("\n").join("<br/>"),
      date: Date.now(),
      profilePicture: "/img/avatar-red.png",
    };
    if (userData) {
      post.username = userData.displayName;
      post.profilePicture = userData.photoURL;
    }
    const ref = firebase.database().ref("/activity/" + this.state.activity);
    ref.push(post).then(() => {
      this.setState({ comment: "", username: "" });
    });
  };

  getPosts = (activity) => {
    this.setState({ loading: true });
    firebase
      .database()
      .ref("activity/" + activity)
      .on("value", (s) => {
        const posts = [];
        if (s.val()) {
          for (let key in s.val()) {
            if (s.val()[key].comment) {
              s.val()[key].comment = s
                .val()
                [key].comment.replace("\n", "<br/>");
              posts.push(s.val()[key]);
            } else {
              this.setState({ loading: false });
            }
          }
          this.setState({ posts: posts.reverse(), loading: false });
        } else {
          this.setState({ loading: false });
        }
      });
  };
  render() {
    return (
      <Layout
        body="Join the online service at Great physician pentecostal church of redeemer"
        title="Watch GPPCR tv online | "
      >
        {this.state.loading ? (
          <div className="tv">
            <div className="spinner-grow"></div>
            <div className="spinner-border"></div>
            <div className="spinner-grow"></div>
          </div>
        ) : this.state.live ? (
          <VC />
        ) : (
          <div className="tv">
            <i className="fa fa-alert"></i> Transmission Ended
            <p>
              You can watch older videos{" "}
              <Link href="/gppcr-tv">
                <a>Here</a>
              </Link>{" "}
            </p>
            <p>
              <strong>Up next: </strong> {this.state.nextActivity}{" "}
            </p>
          </div>
        )}
        <div className="container ">
          <div className="p-3 bg-light m-2">
            <CommentForm
              changeStyle={this.changeStyle}
              changed={(e, type) => {
                this.inputChanged(e, type);
              }}
              name={this.state.name}
              submit={this.sendPost}
              comment={this.state.comment}
            />
            <iframe
              src="https://mixlr.com/users/8499239/embed"
              width="100%"
              height="180px"
              scrolling="no"
              frameborder="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <small>
              <a
                href="https://mixlr.com/gppcr-radio"
                style={{
                  color: "#1a1a1a",
                  textAlign: "left",
                  fontFamily: "Helvetica, sans-serif",
                  fontSize: "11px",
                }}
              >
                GPPCR on Mixlr
              </a>
            </small>
          </div>
          {this.state.loading ? (
            <div style={{ height: "40vh" }}>
              {" "}
              <Spinner fontSize="8px" />{" "}
            </div>
          ) : (
            this.state.posts.map((cur) => <Posts {...cur} />)
          )}
        </div>
        <section id="app" className="bg-light py-5">
          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-lg-6 py-2">
                <h4 className="mb-0">Introducing GPPCR Mobile</h4>
                <p className="">Download the app for a better experience</p>
                <a
                  href="https://kinghoddy.now.sh/projects/GPPCR Mobile"
                  className="btn btn-warning"
                >
                  Got to Download Page
                </a>
              </div>
              <div className="col-lg-2 py-2 col-md-4">
                <img src="/img/brand.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <style jsx>
          {`
            .tv {
              display: flex;
              height: 60vh;
              background: #333;
              color: #fff;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }
          `}
        </style>
      </Layout>
    );
  }
}
