import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
	return (
		<nav className={classes.nav}>
			<div className={classes.navItem}>
				<NavLink to="/profile" activeClassName={classes.active}>My profile</NavLink>
			</div>
			<div className={classes.navItem}>
				<NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
			</div>
			<div className={classes.navItem}>
				<NavLink to="/news" activeClassName={classes.active}>News</NavLink>
			</div>
			<div className={classes.navItem}>
				<NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
			</div>
			<div className={classes.navItem}>
				<NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
			</div>
			<div className={classes.friends}>
			<img src="" alt="avatar"/>
			<span></span>
			</div>
		</nav>
	);
};

export default Navbar;
