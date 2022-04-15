import classes from './Dialogs.module.css'
import Chat from "./Chat/Chat";
import DialogTitle from "./DialogTitle/DialogTitle";
import React from "react";

function Dialogs(props) {

    //Обертываем голые данные в массив компонент
    let usersArray = props.dialogTitles
        .map(d => <DialogTitle
            name={d.chatName}
            userId={d.userId}
            imgSrc={d.imgSrc}
            lastMessage={d.lastMsg}
            senderName={d.senderName}
/>

        )

    return <div className={classes.page}>
        <div className={classes.dialogBox}>
            {/*Передаем этот массив компонент на рендер*/}
            {usersArray}
        </div>
        <div className={classes.chatBox}>
            <Chat
                  messages={props.messages}
                  newMessageText={props.newMessageText}
                  sendMessage={props.sendMessage}
                  textMessageChanged={props.textMessageChanged}
            />
        </div>
    </div>
}

export default Dialogs