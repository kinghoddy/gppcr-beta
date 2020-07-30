import React from "react";

class CountDown extends React.Component {
  state = {
    timer: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    message: "Praise challenge Completed",
  };
  componentDidMount() {
    // setInterval(() => {
    //   const f = new Date(2020, 6, 1);
    //   this.CountDown(f.getDate() + 31);
    // }, 1000);
  }
  CountDown = (future) => {
    const curDate = new Date();
    let timer = {
      days: future - curDate.getDate() - 2,
      hours: 23 - curDate.getHours(),
      minutes: 59 - curDate.getMinutes(),
      seconds: 59 - curDate.getSeconds(),
    };

    if (curDate.getMonth() >= 6) {
      this.setState({ hideDay: true });
      if (timer.hours === 23 && timer.minutes >= 30) {
        timer = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        this.setState({
          message: `Praise challenge Day ${curDate.getDate()} in progress`,
        });
      } else {
        this.setState({ message: `Day ${curDate.getDate() + 1} starts in` });
      }
    }
    this.setState({ timer: timer });
  };
  render() {
    return (
      <div className="countDown">
        <h4>{this.state.message}</h4>
        <div className="numbers">
          {!this.state.hideDay && (
            <div>
              <span>
                {this.state.timer.days < 10 && 0}

                {this.state.timer.days}
              </span>
              <span className="cap">Days</span>
            </div>
          )}
          <div>
            <span>
              {this.state.timer.hours < 10 && 0}

              {this.state.timer.hours}
            </span>
            <span className="cap">Hours</span>
          </div>
          <div>
            <span>
              {this.state.timer.minutes < 10 && 0}
              {this.state.timer.minutes}
            </span>
            <span className="cap">Mins</span>
          </div>
          <div>
            <span>
              {this.state.timer.seconds < 10 && 0}
              {this.state.timer.seconds}
            </span>
            <span className="cap">sec</span>
          </div>
        </div>
        <style jsx>{`
          .countDown {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .numbers {
            color: #f20;
            display: flex;
            font-size: 3rem;
            line-height: 1;
          }
          .numbers > * {
            display: flex;
            flex-direction: column;
            padding: 0 10px;
            align-items: center;
            font-family: "Teko", sans-serif;
          }
          .cap {
            font-size: 1rem;
            font-family: Open Sans, sans-serif;
            color: #fff;
            text-transform: uppercase;
          }
        `}</style>
      </div>
    );
  }
}

export default CountDown;
