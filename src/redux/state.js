let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hi, how are you?", likeCounts: 12 },
			{ id: 2, message: "It's my first post!", likeCounts: 5 },
		],
	},
	dialogsPage: {
		messages: [
			{ id: 1, message: "Hi!" },
			{ id: 2, message: "How are you?" },
			{ id: 3, message: "What's your name?" },
			{ id: 4, message: "How's the weather?" },
			{ id: 5, message: "How old are you?" },
		],
		dialogs: [
			{ id: 1, name: "Masha" },
			{ id: 2, name: "Misha" },
			{ id: 3, name: "Dasha" },
			{ id: 4, name: "Sasha" },
			{ id: 5, name: "Pasha" },
		],
	},
};

export default state;
