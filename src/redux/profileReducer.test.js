import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

// 1. Initial data to test
let state = {
	posts: [
		{ id: 1, message: "Hi, how are you?", likeCounts: 12 },
		{ id: 2, message: "It's my first post!", likeCounts: 5 },
	],
};

test("posts' length should be incremented", () => {
	// 2. Action
	let action = addPostActionCreator("NewPost");

	let newState = profileReducer(state, action);

	// 3. Expectation
	expect(newState.posts.length).toBe(3);
});

test("the message of the new post should be NewPost ", () => {
	// 2. Action
	let action = addPostActionCreator("NewPost");

	let newState = profileReducer(state, action);

	// 3. Expectation
	expect(newState.posts[2].message).toBe("NewPost");
});


//tdd (test-driven development или разработка через тестирование)
test("the length of messages after deletion should be decremented", () => {
	// 2. Action
	let action = deletePost(1);

	let newState = profileReducer(state, action);

	// 3. Expectation
	expect(newState.posts.length).toBe(1);
});

