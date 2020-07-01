import React, { Component } from "react";
import classes from "./chat.module.css";
import firebase from "../../firebase";
import "firebase/database";
class VChat extends Component {
  state = {
    popUpData: {},
    showPopUp: false,
  };

  componentDidMount() {
    this.displayPopUp("bible study");
  }
  toggleFullscreen = () => {
    var con = document.querySelector("#full");

    if (con.webkitRequestFullScreen) {
      con.webkitRequestFullScreen();
    } else if (con.requestFullScreen) con.requestFullScreen();
    else if (con.mozRequestFullScreen) con.mozRequestFullScreen();
    let orientation = window.screen.orientation;
    orientation.lock("landscape");
  };

  displayPopUp = (activity) => {
    firebase
      .database()
      .ref("activity/" + activity)
      .on("child_added", (s) => {
        this.setState({ showPopUp: true, popUpData: { ...s.val() } });
        setTimeout(() => {
          this.setState({ showPopUp: false });
        }, 8000);
      });
  };
  render() {
    return (
      <div id="full" className={classes.iframe}>
        <iframe
          title="hdjdkfd"
          allow="microphone; camera; autoplay"
          src="https://skychat.daily.co/church"
        ></iframe>
        {this.state.showPopUp && (
          <div className="popup animated  fadeIn">
            <img
              src={this.state.popUpData.profilePicture}
              alt=""
              className="rounded-circle"
            />
            <div className="ml-2">
              <h6>{this.state.popUpData.username}</h6>
              <p
                dangerouslySetInnerHTML={{
                  __html: this.state.popUpData.comment,
                }}
              ></p>
            </div>
          </div>
        )}

        <div className={classes.brand}>
          <button
            className="btn btn-sm  btn-outline-warning"
            onClick={this.toggleFullscreen}
          >
            fullscreen
          </button>
        </div>
        <style jsx>{`
          .popup {
            display: flex;
            position: fixed;
            align-items: center;
            max-width: 80vw;
            bottom: 8rem;
            left: 50%;
            transform: translateX(-50%) !important;
            background: #fff;
            border: 1px solid #eee;
            z-index: 4000;
            box-shadow: 0 0px 10px rgba(0, 0, 0, 0.15);
            padding: 1rem 2rem;
            border-radius: 1rem;
          }
          .popup * {
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .popup h6 {
            font-size: 0.8rem;
            color: #888;
          }
          .popup p {
            font-weight: bold;
            font-size: 0.9rem;
          }
          .popup img {
            border: 1px solid #ddd;
            height: 2.5rem;
          }
        `}</style>
      </div>
    );
  }
}

export default VChat;
