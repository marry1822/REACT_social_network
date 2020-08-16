import React from "react";
import classes from "./Users.module.css";

let Users = (props) => {
	if (props.users.length === 0) {
    
		props.setUsers([
			{
				id: 1,
				avatarUrl:
					"https://fotograf-kuchin.ru/wp-content/uploads/2017/06/people.png",
				followed: false,
				fullName: "Masha",
				status: "Bored...",
				location: {
					cityName: "Moscow",
					country: "Russia",
				},
			},
			{
				id: 2,
				avatarUrl:
					"https://www.shareicon.net/data/256x256/2016/05/26/771188_man_512x512.png",
				followed: false,
				fullName: "Misha",
				status: "I'm happy!",
				location: {
					cityName: "New-York",
					country: "USA",
				},
			},
			{
				id: 3,
				avatarUrl:
					"https://fotograf-kuchin.ru/wp-content/uploads/2017/06/people.png",
				followed: true,
				fullName: "Dasha",
				status: "Looking for a job",
				location: {
					cityName: "London",
					country: "UK",
				},
			},
			{
				id: 4,
				avatarUrl:
					"https://static.tildacdn.com/tild3966-6236-4137-b163-633865346433/flat-faces-icons-cir.png",
				followed: true,
				fullName: "Sasha",
				status: "Watching a movie",
				location: {
					cityName: "Mexico",
					country: "Mexico",
				},
			},
		]);
	}

	return props.users.map((user) => (
		<div className={classes.user} key={user.id}>
			<div className={classes.userAvatar}>
				<div>
					<img src={user.avatarUrl} alt="" />
				</div>
				<div>
					{user.followed ? (
						<button
							onClick={() => {
								props.unfollow(user.id);
							}}
						>
							Unfollow
						</button>
					) : (
						<button
							onClick={() => {
								props.follow(user.id);
							}}
						>
							Follow
						</button>
					)}
				</div>
			</div>
			<div className={classes.userInfo}>
				<div>
					<div className={classes.fullName}>{user.fullName}</div>
					<div className={classes.status}>{user.status}</div>
				</div>
				<div className={classes.location}>
					<div>{user.location.country}</div>
					<div>{user.location.cityName}</div>
				</div>
			</div>
		</div>
	));
};

export default Users;
