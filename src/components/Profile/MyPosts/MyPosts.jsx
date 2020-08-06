import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
			<div className={classes.posts}>
				<Post message="Hi, how are you?" likeCounts="6" />
				<Post message="It's my first post!" likeCounts="10" />
			</div>
		</div>
	);
};

export default MyPosts;
