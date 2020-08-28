import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, CreateField } from "../common/formsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import classes from "./../common/formsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{CreateField("Email", "email", [required], Input)}
			{CreateField("Email", "email", [required], Input, { type: "password" })}
			{CreateField(
				null,
				"rememberMe",
				null,
				Input,
				{ type: "checkbox" },
				"remember me"
			)}

			<div>
				<button>Login</button>
			</div>
			{error && <div className={classes.formSummaryError}>{error}</div>}
		</form>
	);
};

const LoginReduxForm = reduxForm({
	form: "login",
})(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	};

	if (props.isAuth) {
		return <Redirect to={"/profile"} />;
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
