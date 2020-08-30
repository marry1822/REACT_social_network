import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import "../../assets/images/user.png";
const Header = (props) => {
	return (
		<header className={classes.header}>
			<img
			className={classes.logo}
				src="https://cdn4.iconfinder.com/data/icons/free-red-social-media-icons/744/social_media_social_network_photos_logo_logotype_logos_instagram_pictures_red-512.png"
				alt="logo"
			/>
			<div className={classes.loginBlock}>
				{props.isAuth ? (
					<div className={classes.loginInfo}>
						<div className={classes.login}>{props.login}</div>
						<div>
							<img
							className={classes.userImage}
								src={
									props.userImg ||
									"https://fotograf-kuchin.ru/wp-content/uploads/2017/06/people.png"
								}
							/>
						</div>
					</div>
				) : (
					<NavLink to={"/login"}>Login</NavLink>
				)}
				<button className={classes.logoutBtn} onClick={props.logout}>Logout</button>
			</div>
		</header>
	);
};

export default Header;
