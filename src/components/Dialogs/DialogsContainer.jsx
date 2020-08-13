import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import Message from "./Message/Message";
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;

	let onSendMessageClick = () => {
		props.store.dispatch(addMessageActionCreator());
	};

	let onMessageChange = (message) => {
		props.store.dispatch(updateNewMessageTextActionCreator(message));
	};

	return (
		<Dialogs
			updateNewMessageTextActionCreator={onMessageChange}
			sendMessage={onSendMessageClick}
			dialogsPage={state}
		/>
	);
};

export default DialogsContainer;
