import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export function Event(props) {
	const { actions, store } = useContext(Context);
	const group_id = actions.getGroup(store.events[props.id].meta_keys._groupId);

	return (
		<div className="card">
			<h2 className="card-header">{store.events[props.id].meta_keys.day}</h2>
			<div className="card-body row">
				<div className="col-4">
					<h3>{store.events[props.id].meta_keys.time}</h3>
				</div>
				<div className="col-8 text-left">
					<Link to={"/single-event" + props.id + "/" + group_id} className="stretched-link">
						<span>{store.events[props.id].post_title}</span>
					</Link>
					<p>{store.groups[group_id].post_title}</p>
				</div>
			</div>
		</div>
	);
}

Event.propTypes = {
	id: PropTypes.number
};
