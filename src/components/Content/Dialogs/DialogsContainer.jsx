import React from "react";
import Dialogs from "./Dialogs";
import {messageTextChangeActionCreator, sendMessageActionCreator} from "../../../redux/dialogsPageReducer";
import {connect} from "react-redux";


function mapStateToProps(state) {
    return ({
        dialogTitles: state.dialogsPage.dialogTitles,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        textMessageChanged: message => dispatch(messageTextChangeActionCreator(message)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    })
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer