import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	// let posts = [
	// 	{ id: 1, message: "Hi, how are you?", likeCounts: 12 },
	// 	{ id: 2, message: "It's my first post!", likeCounts: 5 },
	// ];

	let postElements = props.posts.map((post) => (
		<Post message={post.message} likeCounts={post.likeCounts} />
	));

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div className={classes.addPost}>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>{postElements}</div>
		</div>
	);
};

export default MyPosts;
