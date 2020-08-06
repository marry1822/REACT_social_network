import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={classes.dialog + " " + classes.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
	let dialogs = [
		{ id: 1, name: "Masha" },
		{ id: 2, name: "Misha" },
		{ id: 3, name: "Dasha" },
		{ id: 4, name: "Sasha" },
		{ id: 5, name: "Pasha" },
	];

	let messages = [
		{ id: 1, message: "Hi!" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "What's your name?" },
		{ id: 4, message: "How's the weather?" },
		{ id: 5, message: "How old are you?" },
	];

	let dialogElements = dialogs.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} />
	));

	let messageElements = messages.map((message) => (
		<Message message={message.message} />
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>{dialogElements}</div>
			<div className={classes.messages}>{messageElements}</div>
		</div>
	);
};

export default Dialogs;
