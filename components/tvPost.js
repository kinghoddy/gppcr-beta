import React, { useState } from "react";

export default (props) => {
  let date;
  var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var now = new Date(props.date);
  var month = months[now.getMonth()];
  var year = now.getFullYear();
  var monthDay = now.getDate();
  var week = weekDays[now.getDay()];
  var hour = now.getHours();
  var min = dec(now.getMinutes());
  var clock = " am";
  if (hour > 12) {
    clock = " pm";
    hour -= 12;
  }
  function dec(num) {
    if (num < 10) return "0" + num;
    else return num;
  }
  var current = new Date();

  if (current.getDate() === monthDay) {
    date = "Today at " + hour + ":" + min + clock;
  } else if (
    current.getDate() - monthDay === 1 ||
    current.getDate() - monthDay === -30
  ) {
    date = "Yesterday at " + hour + ":" + min + clock;
  } else if (
    current.getDate() - monthDay > 1 &&
    current.getDate() - monthDay < 7
  ) {
    date = week + " at " + hour + ":" + min + clock;
  } else if (year === current.getFullYear()) {
    date = month + " " + monthDay + " at " + hour + ":" + min + clock;
  } else if (year > current.getFullYear()) {
    date =
      month + " " + monthDay + " " + year + " at " + hour + ":" + min + clock;
  } else {
    date = week + "  " + hour + ":" + min + clock;
  }
  const [shouldReadMore, setShouldReadMore] = useState(false);
  const readMore = (e) => {
    e.preventDefault();
    setShouldReadMore(!shouldReadMore);
  };
  const rMore = (text) => {
    const t = (
      <React.Fragment>
        <p
          className="d-inline mb-0"
          dangerouslySetInnerHTML={{
            __html: shouldReadMore ? text : text.substring(0, 150),
          }}
        ></p>
        {text.length > 149 && (
          <a href="#" onClick={readMore} className="text-info">
            {shouldReadMore ? "...See less" : "...See more"}
          </a>
        )}
      </React.Fragment>
    );
    return t;
  };
  return (
    <div className="wrapper">
      <img src={props.profilePicture} alt="" />
      <div className="content " style={{ flex: 1 }}>
        <h5>{props.username}</h5>
        <div className="m-2">
          {props.comment && rMore(props.comment)}
          {props.src && (
            <audio
              src={props.src}
              className="w-100"
              controls
              preload="auto"
            ></audio>
          )}
        </div>
        <p>{date}</p>
      </div>
      <style jsx>
        {`
          .wrapper {
            max-width: 50rem;
            display: flex;
            align-items: top;
            box-shadow: 0 5px 0.8rem rgba(0, 0, 0, 0.2);
            margin: 1rem auto;
            background: white;
            border : 1px solid #eee;
            padding :10px;
          }
          .content {
              padding-left : 10px;
          }
          .content > *{
margin-bottom : 0
          }
          .content h5 {
              font-size : 14px !important;
              color : #272;
          }
          .content  p {
              font-size : 10px;
              color : #777;
          }
          .wrapper img {
            border-radius: 50%;
            height: 2rem;
            border : 1px solid : #ddd;
            width: 2rem;
            background: #ddd;
          }
        `}
      </style>
    </div>
  );
};
