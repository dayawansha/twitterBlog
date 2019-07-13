import React, { Component } from "react";

class Post extends Component {
        constructor(props) {
                super(props);
              
        }

        render() {
                const { timestamp,text,_id } = this.props;
                // const { text } = this.props;
                return (
                        <div className="posts">
                                {/* <p>{posts.text}</p>
                                <p>{posts.timestamp}</p> */}
                                <p>{text}</p>
                                <p className="timestamp">{timestamp}</p>

                                <button className="action-btn edit-btn">Edit</button>
                                <button className="action-btn del-btn" onClick= { () => this.props.onDelete(_id) }>Delete</button>
                        </div>
                )
        }


}



// // const Posts = (posts) => (

// const Post = ({ text, timestamp,_id }) => {

// console.log("text, timestamp####",text, timestamp);

// return (

//         <div className="posts">
//                 {/* <p>{posts.text}</p>
//         <p>{posts.timestamp}</p> */}
//                 <p>{text}</p>
//                 <p className="timestamp">{timestamp}</p>

//                 <button className="action-btn edit-btn">Edit</button>
//                 <button className="action-btn del-btn" onClick= { () => onDelete(_id) }>Delete</button>
//         </div>

// )
// }

export default Post;