import './photoBox.scss';
import React from 'react';
import { useSelector } from "react-redux";

export function PhotoBox({name, title, description, avatar}) {

	const { isClosed } = useSelector((state) => state.navigation);

	const root = "";
	//const root = "/";

	if(root === "/") {
			return (
		<div
				className='app-section__photo-box main-page'>
			<img
				className='app-photo main-photo'
				src={avatar}
				alt={name}
			/>
			 <h1>{name}</h1>
				<h3>{title}</h3>
			<p>{description}</p>	
		</div>
	)
	} else {
		if(!isClosed) {
			return (
				<div
						className="app-section__photo-box nav-panel-big">
					<img
						className='app-photo main-photo'
						src={avatar}
						alt={name}
					/>
					<h3>{name}</h3>
				</div>
			)
		} else {
			return (
				<div
						className="app-sectio__photo-box nav-panel-small">
					<img
						className='app-photo main-photo'
						src={avatar}
						alt={name}
					/>
				</div>
			)
		}
	}
}