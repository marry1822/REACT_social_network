import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/formsControls/FormsControls";
import { required,maxLengthCreator } from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100)

const addNewMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				name={"newMessageBody"}
				component={Textarea}
				placeholder={"Enter your message"}
				validate={[required, maxLength100]}
			/>
			<div>
				<button>Send</button>
			</div>
		</form>
	);
};

const AddNewMessageFormRedux = reduxForm({
	form: "addNewMessage",
})(addNewMessageForm);

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogElements = state.dialogs.map((dialog) => (
		<DialogItem
			name={dialog.name}
			id={dialog.id}
			avatarSrc={dialog.avatarSrc}
			key={dialog.id}
		/>
	));


	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	};

	let messageElements = state.messages.map((message) => (
		<Message message={message.message} key={message.id} />
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>{dialogElements}</div>
			<div className={classes.messages + " " + classes.dFlex}>
				{messageElements}
				<div className={classes.addMessage}>
					<AddNewMessageFormRedux onSubmit={addNewMessage} />
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
