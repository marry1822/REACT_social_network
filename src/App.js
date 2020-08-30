import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import { Route, withRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { initializeApp } from "../src/redux/appReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/reduxStore";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { withSuspense } from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() =>
	import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
	import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}

		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Route
						path="/profile/:userId?"
						render={withSuspense(ProfileContainer)}
					/>
					<Route
						path="/dialogs"
						render={withSuspense(DialogsContainer)}
					/>
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/login" render={() => <LoginPage />} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
	return (
		<HashRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</HashRouter>
	);
};

export default MainApp;
