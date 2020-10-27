import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Event } from "../component/event";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="row">
			<div className="banner col-12">
				<h1>The Meetup Clone</h1>
				<h4>
					This is a mini project created by <span className="text-primary">4GeeksAcademy</span>
				</h4>
				<p>Using: ReactJS, Bootstrap, @Fontawesome</p>
			</div>
			{store.events.map((item, i) => {
				return (
					<div key={i} className="col-12 mt-3">
						<div key={i} className="col-5 mx-auto">
							{<Event id={i} />}
						</div>
					</div>
				);
			})}
		</div>
	);
};
