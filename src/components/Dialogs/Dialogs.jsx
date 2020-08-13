import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogElements = state.dialogs.map((dialog) => (
		<DialogItem
			name={dialog.name}
			id={dialog.id}
			avatarSrc={dialog.avatarSrc}
		/>
	));

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	let onMessageChange = (e) => {
		let message = e.target.value;
		props.updateNewMessageTextActionCreator(message);
	};

	let messageElements = state.messages.map((message) => (
		<Message message={message.message} />
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>{dialogElements}</div>
			<div className={classes.messages + " " + classes.dFlex}>
				{messageElements}
				<div className={classes.addMessage}>
					<div>
						<textarea
							placeholder="Enter your message"
							onChange={onMessageChange}
							value={state.newMessageText}
						></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Add message</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
