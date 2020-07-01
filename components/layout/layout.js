import React, { Component } from 'react'
import Toolbar from '../toolbar/toolbar'
import Head from 'next/head';
import Footer from '../footer/footer'
const google = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-144505091-4");
    gtag("config", "G-7VQHYZT9GQ");
}
class Layout extends Component {
    componentDidMount() {
        google()

    }
    render() {
        return <div>
            <Head>
                <link href="/img/logo/gppcr-logo.png" rel="shortcut icon" />
                <meta property="og:image" content="/img/logo/gppcr-logo.png" />
                <meta property="og:title" content={this.props.title} />
                <title>{this.props.title ? this.props.title : ''}</title>
                <meta property="og:description"
                    content={this.props.body} />
            </Head>
            {this.props.hideToolbar ? null : <Toolbar bg={this.props.bg} />}
            {this.props.children}
            <Footer />
            <style jsx>{`
            .overflow{
                overflow-x: hidden
            }
            `} </style>

        </div >
    }
}
0
export default Layout