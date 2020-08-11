import { rerenderEntireTree } from "../render";

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hi, how are you?", likeCounts: 12 },
			{ id: 2, message: "It's my first post!", likeCounts: 5 },
		],
	},
	dialogsPage: {
		dialogs: [
			{
				id: 1,
				name: "Masha",
				avatarSrc:
					"https://lh3.googleusercontent.com/proxy/OugIn_p8_BiOQBxKt_oVBTZ4lw7-RclQAViNOtdcAgWUS4-LozQFzq8o81-sLR4wl2QeQQtpo5VRf3Nhv6WZhE5J56NP30_DCKi_I4cquxqa1NuIXKpJKtxgcZuwuMTSJ8HuFL-zpGWTGy8",
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
	},
	sideBar: {
		friends: [
			{
				id: 1,
				name: "Masha",
				avatarSrc:
					"https://lh3.googleusercontent.com/proxy/OugIn_p8_BiOQBxKt_oVBTZ4lw7-RclQAViNOtdcAgWUS4-LozQFzq8o81-sLR4wl2QeQQtpo5VRf3Nhv6WZhE5J56NP30_DCKi_I4cquxqa1NuIXKpJKtxgcZuwuMTSJ8HuFL-zpGWTGy8",
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
		],
	},
};

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likeCounts: 0,
	};
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
};

export default state;
