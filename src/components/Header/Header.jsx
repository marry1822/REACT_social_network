import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img
				src="https://cdn4.iconfinder.com/data/icons/free-red-social-media-icons/744/social_media_social_network_photos_logo_logotype_logos_instagram_pictures_red-512.png"
				alt="logo"
			/>
			<div className={classes.loginBlock}>
				{props.isAuth ? (
					<div className={classes.authInfo}>
						<div>{props.login}</div>
						<img src={props.userImg} alt="img"/>
					</div>
				) : (
					<NavLink to={"/login"}>Login</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
