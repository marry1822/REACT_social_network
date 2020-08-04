import React from "react";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<header className={classes.header}>
			<img
				src="https://cdn4.iconfinder.com/data/icons/free-red-social-media-icons/744/social_media_social_network_photos_logo_logotype_logos_instagram_pictures_red-512.png"
				alt="logo"
			/>
		</header>
	);
};

export default Header;
