import React from 'react';
import Layout from '../../components/layout/tv';
import firebase from '../../firebase';
import 'firebase/database';
import Link from 'next/link';
import VidPost from '../../components/vidList';

export default class Tv extends React.Component {
    state = {
        activity: "Loading....",
        live: false,
        videos: []
    }
    componentDidMount() {
        firebase.database().ref('tv/').on('value', s => {
            const data = s.val()
            this.setState({ live: data.live, activity: data.nextActivity })
            let vid = []
            for (let keys in data.videos) {
                vid.push({ ...data.videos[keys] })
            }
            this.setState({ videos: vid })
        })
    }
    render() {
        return (
            <Layout title="GPPCR tv | gppcroshodi" body="Join the online service at Great physician pentecostal church of redeemer  ">
                <header>
                    <div className="container text-light py-3">
                        <h1 className="mt-5 text-center " >Hello </h1>
                    </div>
                    <div className="footer">
                        <div className="py-3 container d-flex align-items-center justify-content-between">
                            <div>{this.state.live ? < h5 className="mb-0" >We are live</h5> : <h5 className="mb-0" >
                                <strong>Next Up:</strong> <br /> {this.state.activity}
                            </h5>}
                            </div>

                            {this.state.live ? <Link href="/gppcr-tv/watch">
                                <a className="btn btn-success"> <i className="fa fa-play mr-3" ></i> Watch Now </a>
                            </Link> : null}
                        </div>
                    </div>
                </header>

                <section id="app" className="bg-light" >
                    <div className="container ">

                        <div className="row justify-content-center">
                            <div className="col">
                                <iframe src="https://mixlr.com/users/8499239/embed" width="100%" height="180px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe><small><a href="https://mixlr.com/gppcr-radio" style={{ color: '#1a1a1a', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', fontSize: '11px' }}>GPPCR on Mixlr</a></small>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 py-2" >
                                <h4 className="mb-0">Introducing GPPCR Mobile</h4>
                                <p className="" >Download the app for a better experience</p>
                                <a href="https://kinghoddy.now.sh/projects/GPPCR Mobile" className="btn btn-warning">Got to Download Page</a>
                            </div>
                            <div className="col-lg-2 py-2 col-md-4">
                                <img src="/img/brand.jpg" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        {this.state.videos.map(cur => <VidPost {...cur} />)}
                    </div>
                </section>
                <style jsx>{`
                   header { 
                       position : relative;
                       min-height : 50vh;
                       background : url(/img/banner.jpg) center;
                       background-size : cover;
                   }
                   .footer {
                       width : 100%;
                       position : absolute ;
                       bottom : 0;
                       left : 0
                   }
                   .footer > div {
                       background : rgba(255,255,255,.8);
                   }
                   section {
                       padding : 3rem 0;
                   }
                `}</style>
            </Layout>
        )
    }
}