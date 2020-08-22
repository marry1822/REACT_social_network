import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

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
				...action.data,
				isAuth: true,
			};

		default:
			return state;
	}
};

export const setAuthUserData = (userId, email, login, userImg) => ({
	type: "SET_AUTH_USER_DATA",
	data: {
		userId,
		email,
		login,
		userImg,
	},
});

export const getAuthUserData = () => (dispatch) => {
	authAPI.me().then((response) => {
		if (response.data.resultCode === 0) {
			let { id, login, email } = response.data.data;
			authAPI.profile(id).then((response) => {
				let userImg = response.data.photos.small;
				dispatch(setAuthUserData(id, email, login, userImg));
			});
		}
	});
};

export default authReducer;
