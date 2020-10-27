import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export function SingleEvent() {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const id = parseInt(params.id);
	const group = parseInt(params.group);
	return (
		<div className="row">
			<div className="col-12">
				<div className="banner row">
					<div className="col-9 event-info">
						<p>{store.events[id].meta_keys.day}</p>
						<h1>{store.events[id].post_title}</h1>
						<Link to={"/info-event" + id + "/" + group} className="event-name">
							{store.groups[group].post_title}
						</Link>
					</div>
					<div className="col-3 people-going">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">People going</h5>
								<a className="btn btn-primary">Login to RSVP</a>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-9">
						<p>{store.events[id].post_content}</p>
					</div>
					<div className="col-3">
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{store.events[id].meta_keys.day}</h5>
								<p>{store.events[id].meta_keys.time}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
