import React, { Component } from 'react';
import Layout from '../../components/layout/ministers';
import Card from '../../components/card/card';
import firebase from '../../firebase';
import 'firebase/database';
import Link from 'next/link'
import Spinner from '../../components/UI/Spinner/Spinner'
export default class Ministers extends Component {
    static async getInitialProps() {
        const post = await firebase.database().ref('ministers-desk/').once('value')
        return { post }
    }
    state = {
        searchVal: "",
        sermon: [],
        blessings: [],
        quickSermons: []
    }

    componentDidMount() {
        console.log(this.props);

        let data = this.props.post
        if (data.sermon) {
            for (let cat in data) {
                let arr = []
                for (let keys in data[cat]) {
                    arr.push({
                        ...data[cat][keys],
                        key: keys,
                        id: `ministers-desk/${cat}/${keys}`
                    })
                }
                this.setState({ [cat]: arr.reverse(), loading: false })
            }
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

        return <Layout title="Ministers Desk GPPCR |gppcroshodi" body="GPPCR ministers Desk Get inspired from our list of well composed sermons and prayers and quick sermons" src="/img/logo/gppcr-logo.png">
            <header>

                <div className="container header-top">

                    <div className="row mb-3 px-5">
                        <div className="col">
                            <h1 className="text-light">Ministers Desk</h1>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <form>
                                <input type="search" placeholder="Search..." value={this.state.searchVal} />
                                <button>
                                    <i className="material-icons">search</i>
                                </button>
                            </form>

                        </div>
                    </div>
                    {this.state.loading ? <div className="py-5"> <Spinner /> </div> : null}

                </div>
            </header>
            <div className='container body' >
                <div className="row h-100 pb-5">
                    <div className="col-md-6 col-lg-4 mb-3">
                        <Carousel id="sermons" items={this.state.sermon.map(cur => (
                            <Card {...cur } />
                        ))} />

                    </div>
                    <div className="col-md-6 col-lg-4 mb-3">
                        <Carousel id="blessings" items={this.state.blessings.map(cur => (
                            <Card {...cur} />
                        ))} />

                    </div>
                    <div className="col-md-6 col-lg-4 mb-3">
                        <Carousel id="quick" items={this.state.quickSermons.map(cur => (
                            <Card {...cur} />
                        ))} />

                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-6 col-lg-4'>
                        <ul>
                            <h4>Sermons </h4>
                            {this.state.sermon.map(cur => (
                                <li key={cur.id}>
                                    <Link href={`/ministers-desk/read?pid=${cur.id}`}  >
                                        <a >
                                            {cur.title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-md-6 col-lg-4'>
                        <ul>
                            <h4>You are blessed </h4>
                            {this.state.blessings.map(cur => (
                                <li key={cur.id} >
                                    <Link href={`/ministers-desk/read?pid=${cur.id}`} >
                                        <a >
                                            {cur.title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-md-6 col-lg-4'>
                        <ul>
                            <h4>Quick Sermons </h4>
                            {this.state.quickSermons.map(cur => (
                                <li key={cur.id} >
                                    <Link href={`/ministers-desk/read?pid=${cur.id}`} >
                                        <a >
                                            {cur.title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                header {
                    height : 70vh;
                    background : url(/img/pattern_2.svg), linear-gradient(to right bottom, rgba(10 ,200 ,106 , 1) , #272);
                    background-position : center;
                    overflow : visible;
                    background-size : contain; 
                }
                .header-top {
                    padding-top: 20vh;
                }
                header h1 {
  font-family: "Montserrat", sans-serif;
  font-weight : 600;

                }
                                                form {
                                    display : flex;
                                    width : 90%;
                                    margin : auto;
                                    height : 3rem;
                                    margin-bottom : 4rem
                                }
                                form input {
                                    width : 85%;
                                    border : 0;
                                    transition : .3s;
                                    outline : 0;
                                    padding : 0 1rem;
                                    background : rgba(255,255,255,.6)
                                }
                                form input:focus{
                                    background : rgba(255,255,255,.8)

                                }
                                form button {
                                    width : 15%;
                                    border : 0;
                                    outline : 0;
                                    background : rgba(255,255,255,.6)
                                }
                                form >*{
                                    align-self : stretch
                                }
                                .body {
                                    margin-top : -7rem;
                                }
                                @media only screen and (min-width : 760px){
                                    .body{
                                        margin-top : -10rem
                                    }
                                }
                `}
            </style>
        </Layout>
    }
}

const Carousel = props => {

    return <div id={props.id} class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            {/* {   props.items.map((cur , i) =>(
                        i === 0 ? <li data-target={`#${props.id}`} data-slide-to={i} class="active"></li> :
                        <li data-target={`#${props.id}`} data-slide-to={i} ></li>
                    ))}
               */}
        </ol>
        <div class="carousel-inner" role="listbox">
            {props.items.map((cur, i) => (
                i === 0 ? <div class="carousel-item active">{cur} </div> :
                    <div class="carousel-item"> {cur} </div>
            ))}
        </div>
        <a class="carousel-control-prev" href={`#${props.id}`} role="button" data-slide="prev"> <span
            class="sr-only">Previous</span> </a> <a class="carousel-control-next" href={`#${props.id}`}
                role="button" data-slide="next"> <span class="sr-only">Next</span> </a>
    </div>
}
