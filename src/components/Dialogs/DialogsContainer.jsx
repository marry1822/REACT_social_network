import React from "react";
import Dialogs from "./Dialogs";
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState().dialogsPage;

				let onSendMessageClick = () => {
					store.dispatch(addMessageActionCreator());
				};

				let onMessageChange = (message) => {
					store.dispatch(updateNewMessageTextActionCreator(message));
				};
				return (
					<Dialogs
						updateNewMessageTextActionCreator={onMessageChange}
						sendMessage={onSendMessageClick}
						dialogsPage={state}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default DialogsContainer;
