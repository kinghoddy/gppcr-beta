import React, { useState, useEffect } from "react";
import classes from "./comment.module.css";
import Link from "next/link";
import firebase from "../../../firebase";
import "firebase/auth";

export default (props) => {
  const [userData, setUserData] = useState({});
  const [userExists, setUserExists] = useState(false);
  const [focused, setFocused] = useState(false);
  const [localSrc, setLocalSrc] = useState(null);
  const AddAudio = () => {
    const recorder = document.createElement("input");
    recorder.accept = "audio/*";
    recorder.type = "file";
    recorder.setAttribute("capture", true);
    recorder.click();
    console.log(recorder);
    recorder.addEventListener("change", (e) => {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      // Do something with the audio file.
      setLocalSrc(url);
      props.pushFile(e.target);
    });
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserExists(true);
        setUserData({ ...user });
      } else {
        setUserExists(false);
      }
    });
  }, []);

  const userForm = (
    <form
      className={classes.form}
      onSubmit={(e) => {
        setFocused(false);
        props.submit(e, userData);
      }}
    >
      <div className="w-100 justify-content-center d-flex px-2 align-items-center">
        <img
          alt=""
          src={userData.photoURL}
          className="rounded-circle"
          style={{ border: "1px solid #ddd", height: "3rem" }}
        />
        <h5 className=" h6 mb-0 ml-2">{userData.displayName}</h5>
      </div>
      <div className="d-flex align-items-center justify-content-between w-100 px-2">
        <textarea
          className="form-control "
          onFocus={() => {
            setFocused(true);
          }}
          rows={focused ? 3 : 1}
          onChange={(e) => {
            props.changed(e, "comment");
          }}
          value={props.comment}
          placeholder="Your comment...."
        />
        <button
          type="button"
          className="btn rounded-circle btn-lg btn-info ml-3"
          onClick={AddAudio}
        >
          <i className="fad fa-microphone"></i>
        </button>
      </div>
      {props.completed
        ? null
        : localSrc && <audio src={localSrc} autoPlay controls></audio>}
      {props.comment || localSrc ? (
        props.uploading ? (
          <div
            className="p-2 w-100"
            style={{ boxShadow: "0 5px 10px rgba(0,0,0,.15)" }}
          >
            <div className="d-flex justify-content-between">
              <span style={{ fontSize: ".8rem", color: "#000" }}>
                {props.fileName}
              </span>
              <span style={{ fontSize: ".8rem", color: "#000" }}>
                {props.fileSize}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span
                className="spinner-border mr-3 text-muted"
                style={{ height: "15px", width: "15px" }}
              ></span>
              <div className={classes.progBar}>
                <span style={{ width: props.progBarLength }}></span>
              </div>
            </div>
            <span style={{ fontSize: ".8rem", color: "#05a" }}>
              {props.progressMessage}
            </span>
          </div>
        ) : (
          <button
            type="submit"
            className="animated  bounceIn btn btn-success btn-block"
          >
            ADD COMMENT
          </button>
        )
      ) : null}
    </form>
  );
  const AnonymousForm = (
    <form
      className={classes.form}
      onSubmit={(e) => {
        setFocused(false);
        props.submit(e, null);
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Your name"
        value={props.name}
        onChange={(e) => {
          props.changed(e, "name");
        }}
        required
      />
      <div className="d-flex align-items-center justify-content-between w-100 px-2">
        <textarea
          className="form-control "
          onFocus={() => {
            setFocused(true);
          }}
          rows={focused ? 3 : 1}
          required
          onChange={(e) => {
            props.changed(e, "comment");
          }}
          value={props.comment}
          placeholder="Your comment...."
        />
        <button
          type="button"
          className="btn rounded-circle btn-lg btn-info ml-3"
          onClick={AddAudio}
        >
          <i className="fad fa-microphone"></i>
        </button>
      </div>
      {localSrc && <audio src={localSrc} autoPlay controls></audio>}

      {props.comment && (
        <button
          type="button"
          className="btn animated bounceIn rounded-circle btn-lg btn-info ml-3"
          onClick={props.addAudio}
        >
          <i className="fad fa-microphone"></i>
        </button>
      )}
      <button type="submit" className="btn btn-success btn-block">
        ADD COMMENT
      </button>
      <Link href="/login">
        <a>You can also login to have a better commenting experience</a>
      </Link>
    </form>
  );

  return userExists ? userForm : AnonymousForm;
};
