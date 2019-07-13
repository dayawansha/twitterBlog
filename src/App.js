import React from 'react';
import Posts from "./components/Post";
import Composer from "./components/Composer";
import Header from './components/Header';
// import { ReactComponent } from '*.svg';

// import {name, email} from "./data/posts"
// import Skfjlsdkj from "./data/posts";
import posts from "./data/posts";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: posts
    };

  }

  /*
  // renderPostItems(posts) {
    renderPostItems({_id, ...rest}) {
    // return <Posts key={posts._id} _id={posts._id} text={posts.text} timestamp={posts.timestamp}/>
    // console.log("_id,...rest####",_id,...rest);
    return <Posts key={_id} {...rest}/>
  }*/


    renderPostItems = (posts) =>{
      return <Posts key={posts.id} {...posts} onDelete={this.onDelete}/>
    }

  onSubmit = (text) => {
    const {posts} = this.state ;
    const _id = posts.length +  1;
    const timestamp = String(new Date);
    const post = {_id, text, timestamp}

    posts.push(post);
    this.setState({
        posts
      }, () => console.log("posts", posts)  )
  }

  onDelete = (_id) => {
    const {posts} = this.state;
    const filterdPosts = posts.filter((post) => {
      return post._id !==_id;
    })

    this.setState({
      posts:filterdPosts
    });
  }

  render(){

    const{posts} =this.state;
    //  console.log("posts####",posts);
    return(
      <div className="container">
        <Header/>
        <div className="content">
          <Composer  onSubmit = {this.onSubmit} />
          <div className="posts">
            {/* {this.state.posts.map(this.renderPostItems)} */}
            {posts.map(this.renderPostItems)}
          </div>
        </div>
      </div>
      );
    }
  
  }


export default App;
      
