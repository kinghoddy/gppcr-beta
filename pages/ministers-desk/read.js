import React, { Component } from 'react';
import Layout from '../../components/layout/ministers';
import firebase from '../../firebase';
import 'firebase/database';
import Link from 'next/link'
import List from '../../components/post/post2'

class deskPost extends Component {
  static async getInitialProps({ query }) {
    console.log(query);

    const post = await firebase.database().ref(query.pid).once('value')
    return { query, post }
  }
  state = {
    post: {},
    sermon: [],
    blessings: [],
    quickSermons: []
  }
  componentDidUpdate() {
    if(this.props.query.pid !== this.state.pid ){
           firebase.database().ref(this.props.query.pid).once('value', s => {
        this.setState({ post: s.val() , pid : this.props.query.pid })
      })
    }
  }
  componentDidMount() {
    if (this.props.post.title) {
      this.setState({ post: this.props.post })
    } else {
      firebase.database().ref(this.props.query.pid).once('value', s => {
        this.setState({ post: s.val() })
      })
    }
    this.getPosts()
  }
  getPosts = () => {
    this.setState({ loading: true })
    firebase.database().ref('ministers-desk/').on('value', s => {

      for (let cat in s.val()) {
        let arr = []
        for (let keys in s.val()[cat]) {
          arr.push({
            ...s.val()[cat][keys],
            key: keys,
            id: `ministers-desk/${cat}/${keys}`
          })
        }
        this.setState({ [cat]: arr.reverse(), loading: false })

      }
    })
  }
  render() {
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
    var now = new Date(this.state.post.date);
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
      <Layout  {...this.props.post} {...this.state.post}>
        <header>
          <Link href="/ministers-desk">
            <a>
              <h3> {'<-'} Minsters Desk</h3>
            </a>
          </Link>
        </header>
        <section className="shadow">
          <div style={{ flexWrap: 'wrap' }} className="bg-light py-2 justify-content-between d-flex align-items-center sticky-top border-bottom">
            <h3 className="head pr-2">{this.state.post.title}
              <div className="a2a_kit a2a_kit_size_32 a2a_default_style pt-2" >
                <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                <a className="a2a_button_facebook"></a>
                <a className="a2a_button_twitter"></a>
                <a className="a2a_button_whatsapp"></a>
                <a className="a2a_button_telegram"></a>
                <a className="a2a_button_pinterest"></a>
              </div>
            </h3>
            <div className="d-flex align-items-center">

              <div className="pr-2">
                <h4 style={{ fontSize: '.9rem' }} className="m-0 text-capitalize">{this.state.post.author}</h4>
                <span style={{ fontSize: '.8rem' }} className="text-warning">{date} </span>
              </div>
              <div className="picture">
                <img src={this.state.post.src} />
              </div>
            </div>
          </div>
          <p className="py-3" dangerouslySetInnerHTML={{ __html: this.state.post.body }}></p>
          <div>
            <h4>You may also like </h4>
            <List data={this.state.sermon} />
          </div>
        </section>
        <style jsx>
          {`
  header {
      height : 50vh;
position : static !important;
  background : url(/img/pattern_2.svg), linear-gradient(to right bottom, rgba(10 ,200 ,106 , 1) , #272);
                    background-position : center;
                    overflow : visible;
                    background-size : contain; 
                    text-align : center
  }
  header  h3{
    color : white;
    text-align-center;
    padding : 4rem;
  }
  section{
      width : 100%;
      max-width : 60rem;
      z-index: 300;
      padding : 1.5rem;
      margin : -25vh auto 0 auto;
      overflow : visible;
      min-height : 50vh;
      background : var(--light);
      
  }
  .picture {
      height : 3rem;
      flex-shrink : 0;
      width : 3rem;
      border : 1px solid #ddd;
      background : var(--light);
      border-radius : 50%;
      overflow : hidden
  }
  .picture img {
      height : 100%;
      width : 100%;
  }
  .head{
      text-transform : uppercase;
      padding : 1rem 0;
      font-size : 1rem
  }
  @media only screen and (min-width : 760px) {
      .picture {
      height : 4rem;
      width : 4rem
      }
  header {
    height : 30vh
  }
  section {
    width : 90%;
    margin-top : -15vh
  }

  }
  @media only screen and (min-width : 1200px) {
.head {
font-size : 1.3rem;
}
  header {
    height : 50vh;
  }
  section {
    margin-top : -25vh
  }
  }
  `}
        </style>
      </Layout>
    )
  }
}

export default deskPost
