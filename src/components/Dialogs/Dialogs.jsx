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

const Dialogs = () => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>
				<DialogItem name="Masha" id="1" />
				<DialogItem name="Misha" id="2" />
				<DialogItem name="Dasha" id="3" />
				<DialogItem name="Pasha" id="4" />
				<DialogItem name="Sasha" id="5" />
			</div>
			<div className={classes.messages}>
				<Message message="Hi!" />
				<Message message="How are you?" />
				<Message message="What's your name?" />
				<Message message="How's the weather?" />
				<Message message="How old are you?" />
			</div>
		</div>
	);
};

export default Dialogs;
