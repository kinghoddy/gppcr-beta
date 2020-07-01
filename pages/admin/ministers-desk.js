import React, { Component } from "react";
import Layout from "../../components/layout/backend";
import firebase from "../../firebase";
import Link from "next/link";
class Desk extends Component {
  state = {
    posts: {},
  };
  componentDidMount() {
    this.getPosts();
  }
  getPosts = () => {
    this.setState({ loading: true });
    const ref = firebase.database().ref("ministers-desk/");
    // load news
    ref.on("value", (snap) => {
      const news = {};
      for (let newsCat in snap.val()) {
        let newscat = snap.val()[newsCat];
        news[newsCat] = [];
        for (let key in newscat) {
          newscat[key].id = "ministers-desk/" + newsCat + "/" + key;
          news[newsCat].push(newscat[key]);
        }
      }
      this.setState({ posts: news, loading: false });
      console.log(news);
    });
  };

  deletePost = (id, src) => {
    var shouldDelete = window.confirm("Do you want to delete this post ?");
    console.log(id, src, "clicked");
    if (shouldDelete) {
      firebase.database().ref(id).set(null);
    }
  };
  render() {
    let posts = { ...this.state.posts };
    let Posts = [];
    for (let cat in posts) {
      Posts.push(
        <div className="px-3" key={cat}>
          <h4 className="px-4 m-0 text-uppercase py-3 border-bottom">
            {cat.split("-").join(" ")}
          </h4>

          {posts[cat].map((cur) => (
            <div className="post" key={cur.id + cur.title}>
              <img src={cur.src} alt="" />
              <div className="px-3">
                <h5 className="text-capitalize font-weight-bold">
                  {" "}
                  {window.innerWidth < 760
                    ? cur.title.split("<br/>").join(" ").substring(0, 20) +
                      (Array.from(cur.title).length > 20 ? "..." : "")
                    : cur.title.split("<br/>").join(" ").substring(0, 35) +
                      (Array.from(cur.title).length > 35 ? "..." : "")}{" "}
                </h5>
                <p>
                  {window.innerWidth < 760
                    ? cur.body.split("<br/>").join(" ").substring(0, 15) +
                      (Array.from(cur.body).length > 15 ? "..." : "")
                    : cur.body.split("<br/>").join(" ").substring(0, 150) +
                      (Array.from(cur.body).length > 150 ? "..." : "")}
                </p>
              </div>
              <div className="ml-auto">
                <Link
                  href={
                    "/admin/edit-post?postLink=" + cur.id + "&newscat=" + cat
                  }
                >
                  <a className="btn btn-sm">
                    <i className="material-icons">edit</i>
                  </a>
                </Link>
                <button className="btn btn-sm btn-danger ">
                  <i
                    onClick={() => {
                      this.deletePost(cur.id, cur.storageRef);
                    }}
                    className="material-icons"
                  >
                    delete
                  </i>
                </button>
              </div>
            </div>
          ))}
          <style jsx>{`
            .post {
              display: flex;
              align-items: center;
              height: 7rem;
              border-bottom: 1px solid #ddd;
            }
            .post img {
              width: 25%;
              height: 80%;
              object-fit: cover;
              background-color: #ddd;
              border: 1px solid #eee;
            }
            .post button {
              height: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 0.5rem;
              margin: 0;
              font-size: 0.5rem;
            }

            @media only screen and (min-width: 760px) {
              .post img {
                width: 15%;
              }
            }
          `}</style>
        </div>
      );
    }
    return <Layout route="ministers desk">{Posts}</Layout>;
  }
}

export default Desk;
