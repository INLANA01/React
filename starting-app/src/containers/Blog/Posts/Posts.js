import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';
class Posts extends Component{
    state = {
        posts: [],
        error: false
    }
    postSelectedHnadler = (id) => {
        // this.setState( { selectedPostId: id });
        this.props.history.push({pathname: '/' + id})
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('/posts').then(
            response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                }

                )
                this.setState({posts: updatedPosts});
                // console.log(response)
        }).catch(
            error => {
                console.log(error)
                // this.setState({error: true});
            }
        );
    }

    render(){
        let posts = <p style = {{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/' + post.id}key = {post.id} >
                    <Post 
                        key = {post.id}
                        title={post.title} 
                        author = {post.author}
                        match = {this.props.match}
                        clicked = {() => this.postSelectedHnadler (post.id) }></Post>
                    // </Link>
                );
            });
        }
        
        return(
            <section className="Posts">
            {posts}
            </section>
        );
    }
}

export default Posts