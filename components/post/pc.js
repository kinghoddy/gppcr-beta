import React from "react";
import CommentForm from "../../components/forms/comment/comment";
import Comment from "../../components/tvPost";
import firebase from "../../firebase";
import "firebase/database";
import "firebase/storage";
export default class PCPost extends React.Component {
  state = {
    lang: "en",
    commentForm: {
      comment: "",
      name: "",
    },
    comments: [],
    shouldReadMore: false,
    showAll: false,
    file: null,
    uploading: false,
  };
  changed = (e, type) => {
    const commentForm = { ...this.state.commentForm };
    commentForm[type] = e.target.value;
    this.setState({ commentForm: commentForm, completed: false });
  };
  componentDidMount() {
    this.getComments();
  }
  getComments = () => {
    this.setState({ loading: true });
    firebase
      .database()
      .ref("pc/" + this.props.id + "/comments")
      .on("value", (s) => {
        let c = [];
        if (s.val()) {
          for (let key in s.val()) {
            c.push({
              ...s.val()[key],
              key,
            });
          }
          this.setState({ comments: c.reverse(), loading: false });
        } else {
          this.setState({ loading: false });
        }
      });
  };
  readMore = (e) => {
    e.preventDefault();
    this.setState({ shouldReadMore: !this.state.shouldReadMore });
  };
  sendPost = (e, userData) => {
    e.preventDefault();
    this.setState({ error: null, completed: false });
    let post = {
      username: this.state.commentForm.name,
      comment: this.state.commentForm.comment.split("\n").join("<br/>"),
      date: Date.now(),
      profilePicture: "/img/avatar-red.png",
    };
    if (userData) {
      post.username = userData.displayName;
      post.profilePicture = userData.photoURL;
    }
    const ref = firebase.database().ref("/pc/" + this.props.id + "/comments");
    if (this.state.file) {
      this.upload(this.state.file, (src) => {
        post.src = src;
        ref.push(post).then(() => {
          let f = {
            comment: "",
            name: "",
          };
          this.setState({ commentForm: f });
        });
      });
    } else {
      ref.push(post).then(() => {
        let f = {
          comment: "",
          name: "",
        };
        this.setState({ commentForm: f, completed: true });
      });
    }
  };
  showAllFunc = () => {
    this.setState({ showAll: !this.state.showAll });
  };

  upload = (files, callBack) => {
    let storageRef = firebase.storage().ref("praiseChallenge");
    const file = files.files[0];
    if (file.size > 40000000) {
      alert("File size too large");
    } else {
      const uploadTask = storageRef.child(file.name).put(file);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          this.setState({
            uploading: true,
            fileName: file.name,
            fileSize: (snapshot.totalBytes / 1000000).toFixed(2) + " mb",
          });
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          var progressMessage = "Upload is " + Math.floor(progress) + "% Done.";
          this.setState({
            progressMessage: progressMessage,
            progbarLength: progress + "%",
          });
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              this.setState({ progressMessage: "Upload is paused" });
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              break;
            default:
              break;
          }
        },
        (error) => {
          this.setState({ uploading: false });
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              this.setState({
                error: "You don't have permission to access the object",
              });
              break;
            case "storage/canceled":
              this.setState({ error: "Upload canceled" });
              break;
            case "storage/unknown":
              this.setState({ error: "Unknown error occurred" });
              // Unknown error occurred, inspect error.serverResponse
              break;
            default:
              this.setState({ error: "Unknown error occurred" });
              break;
          }
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            console.log(url);
            this.setState({
              uploading: false,
              progressMessage: null,
              error: null,
            });
            callBack(url);
          });
        }
      );
    }
  };

  render() {
    const rMore = (text) => {
      const t = (
        <React.Fragment>
          <p
            className="d-inline mb-0"
            dangerouslySetInnerHTML={{
              __html: this.state.shouldReadMore ? text : text.substring(0, 280),
            }}
          ></p>{" "}
          ...
          <a href="#" onClick={this.readMore} className="text-info">
            {this.state.shouldReadMore ? "See less" : "See more"}
          </a>
        </React.Fragment>
      );
      return t;
    };
    return (
      <div className="post row py-4">
        <div className="col-md-6 bible">
          <div className="d-flex heading pb-3 align-items-center justify-content-between border-bottom mb-3">
            <div className="">
              <h5 className="text-muted">Day {this.props.day}</h5>
              <h4 className="mb-0 font-weight-bold text-uppercase">
                {this.state.lang === "en"
                  ? this.props.passageEn
                  : this.props.passageYou}{" "}
              </h4>
              <p className="mb-0">
                <strong>Instruction: </strong>
                <span>{this.props.instruction}</span>
              </p>
            </div>
            <div className="">
              <h5 className="text-muted">Language</h5>
              <div className="d-flex">
                <button
                  onClick={() => this.setState({ lang: "en" })}
                  className={
                    "btn btn-sm  " +
                    (this.state.lang === "en"
                      ? "btn-primary"
                      : "btn-outline-primary")
                  }
                >
                  English
                </button>
                <button
                  onClick={() => this.setState({ lang: "you" })}
                  className={
                    "btn btn-sm  " +
                    (this.state.lang === "en"
                      ? "btn-outline-warning"
                      : "btn-warning")
                  }
                >
                  Youruba
                </button>
              </div>
            </div>
          </div>
          {this.state.lang === "en"
            ? rMore(this.props.contentEn)
            : rMore(this.props.contentYou)}
        </div>
        <div className="col-md-6 p-2">
          <h4 className="text-center pt-3 pt-md-0 font-weight-bold">
            Comments {this.state.comments.length}
          </h4>
          {this.state.error && (
            <div className="alert alert-danger mx-2">{this.state.error}</div>
          )}
          <CommentForm
            changed={this.changed}
            {...this.state.commentForm}
            uploading={this.state.uploading}
            fileName={this.state.fileName}
            fileSize={this.state.fileSize}
            progBarLength={this.state.progbarLength}
            progressMessage={this.state.progressMessage}
            completed={this.state.completed}
            submit={this.sendPost}
            pushFile={(f) => this.setState({ file: f })}
          />
          {this.state.comments.length === 0 &&
            (this.state.loading ? (
              <div classsName="text-center p-2">
                <span className="spinner-grow"></span>
              </div>
            ) : (
              <p className="text-muted text-center">Be the first to comment</p>
            ))}
          <div className="px-2 px-lg-4">
            {this.state.comments.map((cur, i) =>
              this.state.showAll ? (
                <Comment {...cur} />
              ) : (
                i < 3 && <Comment {...cur} />
              )
            )}
            {this.state.comments.length > 0 && (
              <button
                className="btn btn-primary btn-block "
                onClick={this.showAllFunc}
              >
                {this.state.showAll
                  ? "Show less comments"
                  : "Show all comments"}
              </button>
            )}
          </div>
        </div>
        <style jsx>{`
          .post {
            margin-bottom: 1rem;
            background: var(--white);
            color: var(--dark);
          }
          .heading {
            text-align: center;
            flex-direction: column;
          }
          @media only screen and (min-width: 760px) {
            .post {
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            }
            .bible {
              border-right: 1px solid #ddd;
            }
            .heading {
              text-align: left;
              flex-direction: row;
            }
          }
        `}</style>
      </div>
    );
  }
}
