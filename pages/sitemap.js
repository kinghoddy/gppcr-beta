import React from 'react';
import firebase from '../firebase';
import 'firebase/database'

const EXTERNAL_DATA_URL = 'https://gppcr.now.sh/';

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
          .map((cur) => {
            return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/${cur}`}</loc>
                    </url>
                `;
          })
          .join('')}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps() {
    const request = await firebase.database().ref('ministers-desk/').once('value')
    return {request}
  }
  componentDidMount(){
    let data = this.props.request
    let url = []
    if(data.blessings){

    for (let keys in data){
      for(let id in data[keys]){
url.push('ministers-desk/read?pid=ministers-desk/' + keys + '/' + id)
      }
    }
    // console.log(url);
    
    // console.log(createSitemap(url));
    
    document.body.innerText = createSitemap(url)
    }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Sitemap;