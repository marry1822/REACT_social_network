import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
	let dialogElements = props.dialogsPage.dialogs.map((dialog) => (
		<DialogItem
			name={dialog.name}
			id={dialog.id}
			avatarSrc={dialog.avatarSrc}
		/>
	));

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	};

	let onMessageChange = (e) => {
		let message = e.target.value;
		props.dispatch(updateNewMessageTextActionCreator(message));
	};

	let messageElements = props.dialogsPage.messages.map((message) => (
		<Message message={message.message} />
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>{dialogElements}</div>
			<div className={classes.messages}>{messageElements}</div>
			<div className="addMessage">
				<div>
					<textarea
						onChange={onMessageChange}
						value={props.dialogsPage.newMessageText}
					></textarea>
				</div>
				<div>
					<button onClick={addMessage}>Add message</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
