import classes from './ChatMessage.module.css'

function ChatMessage(props) {
    return <div className={classes.msgBox}>
        <div className={classes.userImage}>
            <img src={props.imgSrc} alt="" />
        </div>
        <div>
            <p>{`${props.userName} ${props.time.toTimeString().slice(0, 5)}`}</p>
            <p>{props.message}</p>
        </div>
    </div>
}

export default ChatMessage