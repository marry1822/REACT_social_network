import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div>
			<div className={classes.coverImg}>
				<img
					src="https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL2Jsb2ctaW1hZ2VzL0Jvb2stY292ZXItZGVzaWduLXR1dG9yaWFsLWFuZC1mcmVlLXRlbXBsYXRlcy9wb3N0LWhlYWRlci5qcGc_bXRpbWU9MjAxODAzMTUyMjI4NTk&q=85&enlarge=true&h=215&w=570"
					alt="profile cover"
				/>
			</div>
			<div className={classes.userInfo}>
				<img
					src="https://image.flaticon.com/icons/svg/145/145843.svg"
					alt="avatar"
				/>
			</div>
			<MyPosts/>
		</div>
	);
};

export default Profile;
