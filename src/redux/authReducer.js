import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	userImg: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, isAuth, userImg) => ({
	type: "auth/SET_AUTH_USER_DATA",
	payload: {
		userId,
		email,
		login,
		isAuth,
		userImg,
	},
});

export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me();
	if (response.data.resultCode === 0) {
		let { id, login, email } = response.data.data;
		dispatch(setAuthUserData(id, email, login, true));
		authAPI.profile(id).then((response) => {
			let userImg = response.data.photos.small;
			dispatch(setAuthUserData(id, email, login, true, userImg));
		});
	}
	return response;
};

export const login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe);
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData());
	} else {
		let message =
			response.data.messages.length > 0 ? response.data.messages[0] : "Error";
		dispatch(stopSubmit("login", { _error: message }));
	}
};

export const logout = () => async (dispatch) => {
	let response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false, null));
	}
};

export default authReducer;
