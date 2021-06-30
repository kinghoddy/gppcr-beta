import React, { Component } from "react";
import Layout from "../../../components/layout/backend";
import Link from "next/link";
import firebase from "firebase";
import "firebase/database";
export default class Pc extends Component {
  state = {
    pc: {},
  };
  componentDidMount() {
    this.getPosts();
  }
  getPosts = () => {
    firebase
      .database()
      .ref("pc")
      .on("value", (s) => {
        let pc = {};
        for (let seasons in s.val()) {
          pc[seasons] = [];
          for (let id in s.val()[seasons]) {
            pc[seasons].push({
              ...s.val()[seasons][id],
              key: id,
            });
          }
        }
        this.setState({ pc: pc });
      });
  };
  delete = (ref) => {
    var shouldDelete = window.confirm("Do you want to delete this post ?");
    if (shouldDelete) {
      firebase.database().ref(ref).remove();
    }
  };
  render() {
    let posts = { ...this.state.pc };
    let Posts = [];
    for (let cat in posts) {
      Posts.push(
        <div className="px-3" key={cat}>
          <h4 className="px-4 m-0 text-uppercase py-3 border-bottom">{cat}</h4>
          {posts[cat].map((cur, i) => (
            <div
              key={cur.key}
              className="p-2 bg-white border-bottom d-flex justify-content-between align-items-center"
            >
              <div>
                Day {i + 1}
                <p className="mb-0">{cur.passageEn}</p>
                <p>{cur.date}</p>
              </div>
              <div>
                <Link href={"/admin/pc/add-post?pid=pc/" + cat + "/" + cur.key}>
                  <a className="btn btn-sm btn-primary">
                    <i className="fa fa-edit"></i>
                  </a>
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.delete("pc/" + cat + "/" + cur.key)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <Layout route="Praise challenge">
        <div className="bg-light">
          <Link href="/admin/pc/add-post">
            <a className="btn btn-dark">Add new passage</a>
          </Link>
          {Posts.reverse()}
        </div>
      </Layout>
    );
  }
}
