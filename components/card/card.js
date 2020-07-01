import React from "react";
import Link from 'next/link'
export default props => {
  let date = 'Dec 12 2019 at 5:30pm'
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
    "Dec"
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
    hour -= 12
  }
  function dec(num) {
    if (num < 10) return "0" + num;
    else return num;
  }
  var current = new Date()

  if (current.getDate() === monthDay) {
    date = "Today at " + hour + ":" + min + clock;
  } else if ((current.getDate() - monthDay === 1) || (current.getDate() - monthDay === -30)) {
    date = "Yesterday at " + hour + ":" + min + clock;
  } else if (
    current.getDate() - monthDay > 1 &&
    current.getDate() - monthDay < 7
  ) {
    date = week + " at " + hour + ":" + min + clock;
  } else if (year === current.getFullYear()) {
    date =
      month + " " + monthDay + " at " + monthDay + " " + hour + ":" + min + clock;
  } else if (year > current.getFullYear()) {
    date =
      month +
      " " +
      monthDay +
      " " +
      year +
      " at " +
      hour +
      ":" +
      min +
      clock;
  } else {
    date = week + '  ' + hour + ':' + min + clock
  }

  return (
    <div className={"card shadow"}>
    <div className="body">
      <div className="header pt-3 px-3">
        <h5>{props.title}</h5>
        <span>{date}</span>
      </div>

      <p className=" px-3 " dangerouslySetInnerHTML={{ __html: props.body.substring(0, 160) + '...' }}>
      </p>
    </div>
      <div className={"d-flex justify-content-between align-items-center border-top px-3 py-2"}>
        <div className="d-flex align-items-center">
          <div className="mr-2 picture" style={{flexShrink : "0"}}>
            <img alt="" src={props.src} />
          </div>
          <span className="text-capitalize">{props.author} </span>
        </div>
        <Link href={'/ministers-desk/read?pid=' + props.id} >
        <a  style={{ flexShrink : 0 , fontSize : ".8rem"}} className="btn btn-sm btn-outline-warning">Read more -></a>
        </Link>
      </div>
      <style jsx>{`
      .card {
  width: 100%;
  background: rgba(255,255,255 ,.9);
  position: relative;
  transition : .3s;
  height : 21rem;

}
.body {
  height : 17rem;
}
.card:hover{
  background : #fff;
}
.card::after,
.card::before {
  position: absolute;
  content: "";
  bottom: 0;
  height: 100%;
  width: 1.3rem;
  background: linear-gradient(
    to right,
    rgba(17, 6, 6, 0.07),
    rgba(0, 0, 0, 0.01),
    transparent
  );
}
.card::after {
  transform: rotateY(180deg);
  right: 0;
}

.header{
margin-bottom : 1rem;
}
.header h5{
  margin : 0;
  color : #000;
  text-transform : uppercase;
} 
.header span {
  color : #aaa;
}

.picture {
  border-radius : 50%;
  height : 3rem;
  width : 3rem;
  background : var(--light)
}
.picture img {
  height : 100%;
  width : 100%;
}
      `} </style>
    </div>
  );
};
