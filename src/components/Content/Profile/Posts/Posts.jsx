import classes from './Posts.module.css'
import Post from "./Post/Post";
import React from "react";
import CreatePost from "./CreatePost/CreatePost";


function Posts(props){
    let postsElements = props.posts
        .map(p => <Post
            id={p.id}
            text={p.text}
            likesCount={p.likesCount}
            userName={p.userName}
            userImgSrc={p.userImgSrc}
            time={p.time}

        />)

    return <div>
        <CreatePost
            newPostText={props.newPostText}
            addPost={props.addPost}
            postTextChange={props.postTextChange}/>
        {postsElements}
    </div>
}

export default Posts