import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.svg";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />;
	}

	const onAvatarSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	};

	return (
		<div className={classes.profileInfo}>
			<div className={classes.avatar}>
				<img src={profile.photos.large || userPhoto} alt="avatar" />
				{isOwner && <input type={"file"} onChange={onAvatarSelected} />}
			</div>
			<div className={classes.userInfo}>
				<div>
					<div className={classes.fullName}>{profile.fullName}</div>
					<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
					<div className={classes.aboutMe}>
						<span>About me:</span> {profile.aboutMe}
					</div>
					<div className={classes.job}>
						<div className={classes.jobItems}>
							<span>Looking for a job: </span>
							{(profile.lookingForAJob = true ? "Yes" : "No")}
						</div>
						<div className={classes.jobItems}>
							<span>Looking for a job description: </span>
							{profile.lookingForAJobDescription}
						</div>
						<div className={classes.contacts}>
							<span>Contacts:</span>
							<div className={classes.contactItems}>
								<a href={profile.contacts.facebook}>Facebook</a>
								<a href={profile.contacts.github}>GitHub</a>
								<a href={profile.contacts.instagram}>Instagram</a>
								<a href={profile.contacts.maillink}>Mail</a>
								<a href={profile.contacts.twitter}>Twitter</a>
								<a href={profile.contacts.vk}>Vk</a>
								<a href={profile.contacts.website}>Website</a>
								<a href={profile.contacts.youtube}>Youtube</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
