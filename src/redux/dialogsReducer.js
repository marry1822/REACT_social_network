const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
	dialogs: [
		{
			id: 1,
			name: "Masha",
			avatarSrc:
				"https://fotograf-kuchin.ru/wp-content/uploads/2017/06/people.png",
		},
		{
			id: 2,
			name: "Misha",
			avatarSrc:
				"https://www.shareicon.net/data/256x256/2016/05/26/771188_man_512x512.png",
		},
		{
			id: 3,
			name: "Dasha",
			avatarSrc:
				"https://fotograf-kuchin.ru/wp-content/uploads/2017/06/people.png",
		},
		{
			id: 4,
			name: "Sasha",
			avatarSrc:
				"https://static.tildacdn.com/tild3966-6236-4137-b163-633865346433/flat-faces-icons-cir.png",
		},
		{
			id: 5,
			name: "Pasha",
			avatarSrc:
				"https://thumb.tildacdn.com/tild6464-6261-4662-b038-333831326134/-/resize/160x/-/format/webp/man1.png",
		},
	],
	messages: [
		{ id: 1, message: "Hi!" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "What's your name?" },
		{ id: 4, message: "How's the weather?" },
		{ id: 5, message: "How old are you?" },
	],
	newMessageText: "",
};
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messages: [
					...state.messages,
					{
						id: 6,
						message: action.newMessageBody,
					},
				],
			};
		default:
			return state;
	}
};

export const addMessageActionCreator = (newMessageBody) => ({
	type: ADD_MESSAGE,
	newMessageBody
});


export default dialogsReducer;
