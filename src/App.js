import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar state={props.state.sideBar} />
				<div className="app-wrapper-content">
					<Route
						path="/profile"
						render={() => (
							<Profile
								state={props.state.profilePage}
								addPost={props.addPost}
							/>
						)}
					/>
					<Route
						path="/dialogs"
						render={() => <Dialogs state={props.state.dialogsPage} />}
					/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
