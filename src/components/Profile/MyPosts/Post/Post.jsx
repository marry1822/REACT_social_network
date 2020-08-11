import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={classes.post}>
			<div className={classes.postContent}>
				<img src="https://image.flaticon.com/icons/svg/145/145843.svg" />
				{props.message}
			</div>
			<div>
				{props.likeCounts} <span>Likes</span>
			</div>
		</div>
	);
};

export default Post;
