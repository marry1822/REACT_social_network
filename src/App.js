import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar store={props.store} />
				<div className="app-wrapper-content">
					<Route
						path="/profile"
						render={() => <Profile store={props.store} />}
					/>
					<Route
						path="/dialogs"
						render={() => (
							<DialogsContainer
							store={props.store}
							/>
						)}
					/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
