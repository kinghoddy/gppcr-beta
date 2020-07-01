import React from 'react';
import Layout from '../../components/layout/backend';
import firebase from '../../firebase';
import 'firebase/database'

export default class Tv extends React.Component {
    state = {
        formData: {
            title: '',
            activity: '',
            description: '',
            src: '',
            size: ''
        },
        live: false,
        posts: []
    }
    componentDidMount() {

        this.getPosts()
    }
    getPosts = () => {
        firebase.database().ref('tv/').on('value', s => {
            const formData = { ...this.state.formData }
            formData.activity = s.val().nextActivity
            this.setState({ live: s.val().live, formData: formData })
            const posts = s.val().videos;
            const postsArr = []
            for (let keys in posts) {
                postsArr.push({
                    ...posts[keys],
                    key: keys
                })
            }
            this.setState({ posts: postsArr })
        })
    }
    inputChanged = (e, type) => {
        let fd = { ...this.state.formData }
        fd[type] = e.target.value
        this.setState({ formData: fd })
    }
    updateActivity = () => {
        firebase.database().ref('tv/nextActivity').set(this.state.formData.activity)
    }
    sendPost = e => {
        e.preventDefault();
        const Post = {
            ...this.state.formData,
            date: Date.now()
        }
        if (Post.title) {
            firebase.database().ref('tv/videos').push(Post).then(() => {
                this.setState({
                    formData: {
                        title: '',
                        src: '',
                        activity: '',
                        size: '',
                        description: ''
                    }
                })
            })
        }
    }
    toggleLive = () => {
        let curLive = this.state.live
        this.setState({ live: !curLive })
        firebase.database().ref('tv/live').set(!curLive)
    }
    render() {
        return (
            <Layout route="GPPCR tv" >
                <div className="container">
                    <div className="d-flex py-3">
                        <input className="form-control w-50" placeholder="Set next activity" value={this.state.formData.activity} onChange={e => this.inputChanged(e, 'activity')} />
                        <button className="btn btn-outline-success" onClick={this.updateActivity} >Go </button>
                        <button onClick={this.toggleLive} className={"btn " + (this.state.live ? 'btn-success' : 'btn-outline-success')} > {this.state.live ? 'Stop transmission' : 'Go Live'} </button>
                    </div>
                    <form onSubmit={this.sendPost}>
                        <input required onChange={e => this.inputChanged(e, 'title')} placeholder="Name" className="form-control" value={this.state.formData.title} />
                        <input required onChange={e => this.inputChanged(e, 'src')} placeholder="Video url" className="form-control" value={this.state.formData.src} />
                        <input required onChange={e => this.inputChanged(e, 'size')} placeholder="Size" className="form-control" value={this.state.formData.size} />
                        <textarea required onChange={e => this.inputChanged(e, 'description')} value={this.state.formData.description} placeholder="Description" className="form-control" />
                        <button className="btn btn-block btn-primary" >Submmit</button>
                        <video autoplay loop controls src={this.state.formData.src}></video>
                    </form>
                    <div className="py-3">
                        {this.state.posts.map(cur => (
                            <div className="d-flex">
                                <video style={{ height: '7rem' }} src={cur.src} preload />
                                <h5>{cur.title} </h5>
                            </div>
                        ))}
                    </div>
                </div>
                <style jsx>{`
                       
                `} </style>
            </Layout>
        )
    }
}