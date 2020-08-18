import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
	constructor(props) {
		super(props);
		axios
			.get("https://social-network.samuraijs.com/api/1.0/users")
			.then((response) => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		return (
			<div>
				{this.props.users.map((user) => (
					<div className={classes.user} key={user.id}>
						<div className={classes.userAvatar}>
							<div>
								<img
									src={
										user.photos.small != null ? user.photos.small : userPhoto
									}
									alt=""
								/>
							</div>
							<div>
								{user.followed ? (
									<button
										onClick={() => {
											this.props.unfollow(user.id);
										}}
									>
										Unfollow
									</button>
								) : (
									<button
										onClick={() => {
											this.props.follow(user.id);
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
	}
}

export default Users;
