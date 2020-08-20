import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div>
				{pages.map((page) => {
					return (
						<span
							onClick={(e) => {
								props.onPageChanged(page);
							}}
							className={props.currentPage === page && classes.selectedPage}
						>
							{page}
						</span>
					);
				})}
			</div>
			{props.users.map((user) => (
				<div className={classes.user} key={user.id}>
					<div className={classes.userAvatar}>
						<div>
							<NavLink to={"/profile/" + user.id}>
								<img
									src={
										user.photos.small != null ? user.photos.small : userPhoto
									}
									alt=""
								/>
							</NavLink>
						</div>
						<div>
							{user.followed ? (
								<button
									onClick={() => {
										axios
											.delete(
												`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
												{
													withCredentials: true,
													headers: {
														"api-key": "33fdc419-4c96-49a2-b3bb-109757a1fef3",
													},
												}
											)
											.then((response) => {
												if (response.data.resultCode === 0) {
													props.unfollow(user.id);
												}
											});
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										axios
											.post(
												`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
												{},
												{
													withCredentials: true,
													headers: {
														"api-key": "33fdc419-4c96-49a2-b3bb-109757a1fef3",
													},
												}
											)
											.then((response) => {
												if (response.data.resultCode === 0) {
													props.follow(user.id);
												}
											});
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
			))}
		</div>
	);
};

export default Users;
