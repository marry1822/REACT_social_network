import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.navItem}>
				<NavLink to="/profile">My profile</NavLink>
			</div>
			<div className={classes.navItem}>
				<NavLink to="/dialogs">Messages</NavLink>
			</div>
			<div className={classes.navItem}>
				<NavLink to="/news">News</NavLink>
			</div>
			<div className={classes.navItem}>
				<NavLink to="/music">Music</NavLink>
			</div>
			<div className={classes.navItem}>
				<NavLink to="/settings">Settings</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
