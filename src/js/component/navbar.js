import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { LoginModal } from "./login-modal";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	var login = "";

	if (store.login.active) {
		login = <div className="ml-auto text-light">{actions.getUser}</div>;
	} else {
		login = <div className="ml-auto">{<LoginModal />}</div>;
	}

	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">4Geeks</span>
			</Link>
			<div className="ml-auto">{login}</div>
		</nav>
	);
};
