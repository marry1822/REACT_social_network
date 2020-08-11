import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let dialogElements = props.state.dialogs.map((dialog) => (
		<DialogItem
			name={dialog.name}
			id={dialog.id}
			avatarSrc={dialog.avatarSrc}
		/>
	));

	let textArea = React.createRef();

	let addMessage = () => {
		let text = textArea.current.value;
		alert(text);
	};

	let messageElements = props.state.messages.map((message) => (
		<Message message={message.message} />
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>{dialogElements}</div>
			<div className={classes.messages}>{messageElements}</div>
			<div>
				<textarea ref={textArea}></textarea>
			</div>
			<div>
				<button onClick={addMessage}>Add post</button>
			</div>
		</div>
	);
};

export default Dialogs;
