import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
	required,
	maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const ProfileAddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				name={"newPostText"}
				component={Textarea}
				validate={[required, maxLength10]}
				placeholder={'lalala'}
			/>
			<div>
				<button>Add post</button>
			</div>
		</form>
	);
};

const ProfileAddNewPostFormRedux = reduxForm({
	form: "addNewPost",
})(ProfileAddNewPostForm);

const MyPosts = (props) => {
	let postElements = props.posts.map((post) => (
		<Post message={post.message} likeCounts={post.likeCounts} key={post.id} />
	));

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	};

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div className={classes.addPost}>
				<ProfileAddNewPostFormRedux onSubmit={onAddPost} />
			</div>
			<div className={classes.posts}>{postElements}</div>
		</div>
	);
};

export default MyPosts;
