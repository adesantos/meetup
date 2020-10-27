import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export function LoginModal() {
	const [show, setShow] = useState(false);
	const [user, setUser] = useState("");
	const [passw, setPass] = useState("");
	const { store, actions } = useContext(Context);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	var handleSubmit = e => {
		e.preventDefault();
		setUser("");
		setPass("");

		alert(actions.getAuth(user, passw));
	};

	return (
		<div id="login-modal">
			<Button variant="primary" onClick={handleShow}>
				Login
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{"Login"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							className="input col-12"
							value={user}
							placeholder="username"
							required
							onChange={e => setUser(e.target.value)}
						/>
						<input
							type="password"
							className="input col-12 pw"
							value={passw}
							placeholder="password"
							required
							onChange={e => setPass(e.target.value)}
						/>
						<Button type="submit" className="float-right" variant="primary" onClick={handleClose}>
							{"login"}
						</Button>
					</form>
				</Modal.Body>
			</Modal>
		</div>
	);
}
