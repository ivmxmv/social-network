import classes from './Chat.module.css'
import ChatMessage from "./Message/ChatMessage";
import React from "react";
import CreateMessage from "./CreateMessage/CreateMessage";

function Chat(props) {
//TODO: PERSON NAME
    //Здесь голые данные из BLL обертываются в компоненты
    let messagesArray = props.messages
        .map(m =>
            <ChatMessage
            message={m.message}
            time={m.time}
            msgID={m.msgID}
            userName={m.userName}
            imgSrc={m.imgSrc}
/>
        )


    return <div className={classes.chatPage}>
        <div className={classes.chatBox}>
            {/*Здесь находится массив с компонентами ChatMessage*/}
            {messagesArray}
        </div>
        <div className={classes.sendMsgBox}>
            <CreateMessage
                newMessageText={props.newMessageText}

                textMessageChanged={props.textMessageChanged}
                sendMessage={props.sendMessage}/>
        </div>
    </div>
}

export default Chat