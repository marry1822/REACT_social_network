import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div>
			{/* <div className={classes.coverImg}>
				<img
					src="https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL2Jsb2ctaW1hZ2VzL0Jvb2stY292ZXItZGVzaWduLXR1dG9yaWFsLWFuZC1mcmVlLXRlbXBsYXRlcy9wb3N0LWhlYWRlci5qcGc_bXRpbWU9MjAxODAzMTUyMjI4NTk&q=85&enlarge=true&h=215&w=570"
					alt="profile cover"
				/>
			</div> */}

			<div className={classes.userInfo}>
				<img src={props.profile.photos.small} alt="avatar" />
				<ProfileStatus status={"Hello"} />

				<div>
					<div className={classes.fullName}>{props.profile.fullName}</div>
					<div className={classes.aboutMe}>
						<span>About me:</span> {props.profile.aboutMe}
					</div>
					<div className={classes.contacts}>
						<span>Contacts:</span>
						<div className={classes.contactItems}>
							<a href={props.profile.contacts.facebook}>Facebook</a>
							<a href={props.profile.contacts.github}>GitHub</a>
							<a href={props.profile.contacts.instagram}>Instagram</a>
							<a href={props.profile.contacts.maillink}>Mail</a>
							<a href={props.profile.contacts.twitter}>Twitter</a>
							<a href={props.profile.contacts.vk}>Vk</a>
							<a href={props.profile.contacts.website}>Website</a>
							<a href={props.profile.contacts.youtube}>Youtube</a>
						</div>
					</div>
					<div className={classes.job}>
						<div className={classes.jobItems}>
							<span>Looking for a job: </span>
							{(props.profile.lookingForAJob = true ? "Yes" : "No")}
						</div>
						<div className={classes.jobItems}>
							<span>Looking for a job description: </span>
							{props.profile.lookingForAJobDescription}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
