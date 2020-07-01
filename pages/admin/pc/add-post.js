import React from "react";
import CKEditor from "ckeditor4-react";
import Layout from "../../../components/layout/backend";
import firebase from "../../../firebase";
import "firebase/database";
import { withRouter } from "next/router";
class Add extends React.Component {
  static async getInitialProps({ query }) {
    return query;
  }
  state = {
    formData: {
      instruction: "",
      season: "season3",
      contentEn: "English passage",
      contentYou: "Yoruba passage",
      passageEn: "",
      passageYou: "",
      date: "",
      loading: true,
    },
  };
  componentDidMount() {
    const pid = this.props.router.query.pid;

    if (pid) {
      this.setState({ editing: true, loading: true });
      firebase
        .database()
        .ref(pid)
        .once("value", (s) => {
          let f = { ...s.val() };
          this.setState({ formData: f });
          setTimeout(() => {
            this.setState({ loading: false });
          });
        });
    } else {
      this.setState({ loading: false });
    }
  }
  changed = (e, type, con) => {
    let f = { ...this.state.formData };
    if (!con) {
      f[type] = e.target.value;
      this.setState({ formData: f });
    } else {
      f[type] = con;
      this.setState({ formData: f });
    }
  };
  sendPost = (e) => {
    e.preventDefault();
    const post = {
      ...this.state.formData,
    };
    const ref = firebase.database().ref("pc/" + this.state.formData.season);
    ref.push(post).then(() => {
      this.props.router.push("/admin/pc");
    });
  };
  update = () => {
    const post = {
      ...this.state.formData,
    };
    const ref = firebase.database().ref(this.props.router.query.pid);
    ref.set(post).then(() => {
      this.props.router.push("/admin/pc");
    });
  };
  render() {
    return (
      <Layout route="add praise challenge post">
        <div className="bg-white p-5">
          {this.state.loading ? (
            <div className="p5 text-center">
              <span className="spinner-border mr-2"></span>Loading
            </div>
          ) : (
            <form onSubmit={this.sendPost}>
              <select
                defaultValue={this.state.season}
                onChange={(e) => this.changed(e, "season")}
                className="form-control mb-3"
              >
                <option value="season3">Season 3</option>
              </select>
              <input
                required
                placeholder="Instruction"
                className="form-control mb-2 w-100"
                onChange={(e) => this.changed(e, "instruction")}
                value={this.state.formData.instruction}
              />
              <input
                placeholder="Full date"
                required
                className="form-control mb-2 w-100"
                onChange={(e) => this.changed(e, "date")}
                value={this.state.formData.date}
              />
              <div className="d-flex justify-content-between mb-3">
                <input
                  placeholder="Passage English"
                  required
                  className="form-control w-40"
                  onChange={(e) => this.changed(e, "passageEn")}
                  value={this.state.formData.passageEn}
                />
                <input
                  required
                  placeholder="Passage Yoruba"
                  className="form-control w-40"
                  onChange={(e) => this.changed(e, "passageYou")}
                  value={this.state.formData.passageYou}
                />
              </div>
              <CKEditor
                data={this.state.formData.contentEn}
                type="classic"
                onChange={(e) =>
                  this.changed(null, "contentEn", e.editor.getData())
                }
              />
              <CKEditor
                data={this.state.formData.contentYou}
                onChange={(e) =>
                  this.changed(null, "contentYou", e.editor.getData())
                }
              />
              {this.state.editing && (
                <button
                  type="button"
                  onClick={this.update}
                  className="btn my-2 btn-info btn-block"
                >
                  Update
                </button>
              )}
              <button className="btn my-2 btn-success btn-block">SUBMIT</button>
            </form>
          )}
        </div>
        <style jsx>{`
          .w-40 {
            width: 47%;
          }
        `}</style>
      </Layout>
    );
  }
}
export default withRouter(Add);
