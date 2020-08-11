import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postElements = props.posts.map((post) => (
		<Post message={post.message} likeCounts={post.likeCounts} />
	));

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch({ type: "ADD-POST" });
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
	};

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div className={classes.addPost}>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						value={props.newPostText}
					/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>{postElements}</div>
		</div>
	);
};

export default MyPosts;
