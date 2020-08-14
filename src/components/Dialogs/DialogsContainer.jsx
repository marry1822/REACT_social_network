import React from "react";
import Dialogs from "./Dialogs";
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageTextActionCreator: (message) => {
			dispatch(updateNewMessageTextActionCreator(message));
		},
		sendMessage: () => {
			dispatch(addMessageActionCreator());
		},
	};
};

const DialogsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
