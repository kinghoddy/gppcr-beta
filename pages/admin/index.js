import React, { Component } from 'react'
import Layout from '../../components/layout/backend';
import Explorer from '../../components/explorer/explorer';
class index extends Component {
    state = {

    }

    render() { 
        return (
            <Layout route="Dashboard">
                {/* <Explorer /> */}
            </Layout>
        )
    }
}

export default index
