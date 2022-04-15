import classes from './CreatePost.module.css'
import React from "react";


function CreatePost(props) {

    const newPostElement = new React.createRef()

    const postTextChange = () =>{
        const text = newPostElement.current.value
        props.postTextChange(text)
    }

    const addPost = () =>{
        props.addPost()
    }

    return <div className={classes.createPostBox}>
        <div className={classes.text}>
            <textarea ref={newPostElement}
                      value={props.newPostText}
                      onChange={postTextChange}
                      placeholder='Write something'>
            </textarea>
        </div>
        <div className={classes.buttons}>
            <button onClick={addPost}>post</button>
        </div>
    </div>
}

export default CreatePost