import React from 'react';
import Layout from '../components/layout/layout';

export default function Custom404() {
    return <Layout title="404 | page not found Great physician pent" >
        <div className="container">
            <h2>404 - Page Not Found</h2>
            <a href="/" className="btn btn-lg btn-success">
                Go to our home page
            </a>
        </div>
        <style jsx>{`
            .container {
                flex-direction : column;
                height : 60vh;
                text-align : center;
                justify-content : center;
                display : flex;
                align-items : center
            }
`} </style>
    </Layout>
}