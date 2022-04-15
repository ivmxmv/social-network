import classes from './CreateMessage.module.css'
import React from "react";

function CreateMessage(props) {

    let newPostElement = React.createRef()

    let textMessageChanged =  () =>{
        let message = newPostElement.current.value
        props.textMessageChanged(message)
    }

    let sendMessage = () => {
        props.sendMessage()
    }

    return <div className={classes.sendMsgBox}>
        <textarea
            ref={newPostElement}
            className={classes.textArea}
            autoFocus="autofocus"
            placeholder='Write a message'
            value={props.newMessageText}
            onChange={textMessageChanged}>
            </textarea>
        <button onClick={sendMessage}>-></button>
    </div>
}

export default CreateMessage