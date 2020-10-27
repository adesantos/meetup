import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Event } from "../component/event";

export function InfoEvent() {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const id = parseInt(params.id);
	const group = parseInt(params.group);
	return (
		<div className="row">
			<div className="banner col-12">
				<div className="col-6" />
				<div className="col-6">
					<h2>{store.groups[group].post_title}</h2>
					<p>{store.events[id].meta_keys.location}</p>
				</div>
			</div>
			<div className="col-12 next-events">
				<p>Next Events</p>
			</div>
			{store.events.map((item, i) => {
				if (store.groups[group].id == item.meta_keys._groupId) {
					return (
						<div key={i} className="col-12 mt-3">
							<div key={i} className="col-5 mx-auto">
								{<Event id={i} />}
							</div>
						</div>
					);
				}
			})}
		</div>
	);
}
