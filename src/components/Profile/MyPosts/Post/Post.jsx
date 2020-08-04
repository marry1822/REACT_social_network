import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={classes.post}>
			<img src="https://image.flaticon.com/icons/svg/145/145843.svg" />
			{props.message}
			<div>
				<span>{props.likeCounts}</span>
			</div>
		</div>
	);
};

export default Post;
