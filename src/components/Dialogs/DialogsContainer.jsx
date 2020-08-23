import Dialogs from "./Dialogs";
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponent=withAuthRedirect(Dialogs)


const DialogsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
