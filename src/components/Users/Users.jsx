import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import classes from "./Users.module.css";

let Users = ({
	currentPage,
	totalUsersCount,
	pageSize,
	onPageChanged,
	users,
	...props
}) => {
	return (
		<div className={classes.mainContainer}>
			<Paginator
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
			/>
			<div>
				{users.map((user) => (
					<User
						key={user.id}
						user={user}
						followingInProgress={props.followingInProgress}
						unfollow={props.unfollow}
						follow={props.follow}
					/>
				))}
			</div>
		</div>
	);
};

export default Users;
