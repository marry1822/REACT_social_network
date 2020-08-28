import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = ({
user,
followingInProgress,
unfollow,
follow
}) => {
	return (
		<div className={classes.user}>
			<div className={classes.userAvatar}>
				<div>
					<NavLink to={"/profile/" + user.id}>
						<img
							src={user.photos.small != null ? user.photos.small : userPhoto}
							alt=""
						/>
					</NavLink>
				</div>
				<div>
					{user.followed ? (
						<button
							disabled={followingInProgress.some((id) => id === user.id)}
							onClick={() => {
								unfollow(user.id);
							}}
						>
							Unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some((id) => id === user.id)}
							onClick={() => {
								follow(user.id);
							}}
						>
							Follow
						</button>
					)}
				</div>
			</div>
			<div className={classes.userInfo}>
				<div>
					<div className={classes.fullName}>{user.name}</div>
					<div className={classes.status}>{user.status}</div>
				</div>
				<div className={classes.location}>
					<div>{"user.location.country"}</div>
					<div>{"user.location.cityName"}</div>
				</div>
			</div>
		</div>
	);
};

export default User;
