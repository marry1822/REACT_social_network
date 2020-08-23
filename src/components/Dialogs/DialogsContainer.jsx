import Dialogs from "./Dialogs";
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
