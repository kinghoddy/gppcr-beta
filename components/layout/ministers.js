import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../footer/footer'

export default props => {
    return <div>
        <Head>
                <meta property="og:title" content={props.title ? props.title + ' Ministers Desk GPPCR' : "GPPCR Ministers Desk"} />
                <title>{props.title ? props.title : 'Minsters desk GPPCR'}</title>
                <meta name="description" content={props.body} />
                <meta property="og:description"
                    content={props.body} />
                <meta property="og:image" content={props.src ? props.src : '/img/logo/logo.png'} />
                <link rel="shortcut icon" href={props.src} type="image/jpg" />
        </Head>
          <div class="elfsight-app-b6c142f5-a479-4825-9bfc-ba83f6436219"></div>
        <div class="elfsight-app-b678dadf-16ec-4b46-b557-e6b6f2bb3bc7"></div>

        <nav className="px-2 px-lg-5">
            <Link href="/">
                <a className="h-100">
                    <img className="logo" alt="" src="/img/logo/gppcr-logo.png" />
                    <span className="mb-0 ml-2">GPPCR</span>
                </a>
            </Link>
            <button className="animated bounceIn delay-1s ">
                <i className="material-icons">menu</i>
            </button>
        </nav>
        <div className="body">
            {props.children}
        </div>
        <Footer />
        <style jsx global>{`
             nav a .logo { 
            height : 80%
        }
        nav{
            height : 3rem ;
            position : absolute;
            width : 100%;
            display : flex;
            align-items: center;
            z-index : 2000 ;
        }
        nav span{
            font-family : sans-serif;
            font-weight : bold;
            color : white;
        }
        nav button {
            position : fixed ;
            right : 2rem ;
            top : 10px;
            height : 3rem;
            transition : .3s;
            background : rgba(255,255,255,.7);
            width : 3rem;
            border-radius : 50%;
            border : 1px solid #eef;
            box-shadow : 0 10px 15px rgba(0,0,0,.1)
        }
        nav button:hover{
            background : white;

        }
        .body{
            padding-bottom : 0rem;
        }

        `} </style>
    </div>
}