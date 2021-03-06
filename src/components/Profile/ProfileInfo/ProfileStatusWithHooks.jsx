import React from "react";
import classes from "./ProfileStatus.module.css";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div className={classes.status}>
			{!editMode && (
				<div>
					<span onDoubleClick={activateEditMode}>
						{props.status || "---"}
					</span>
				</div>
			)}
			{editMode && (
				<div>
					<input
						onBlur={deactivateEditMode}
						autoFocus={true}
						value={status}
						onChange={onStatusChange}
					/>
				</div>
			)}
			<div className={classes.line}></div>
		</div>
	);
};

export default ProfileStatusWithHooks;
