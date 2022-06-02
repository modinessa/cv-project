import './photoBox.scss';
import React from 'react';
import { useSelector } from "react-redux";

export function PhotoBox({name, title, description, avatar}) {

	const { isClosed } = useSelector((state) => state.navigation);

	return (
		<div
				className='app-section photo-box'>
			<img
				className='app-photo avatar'
				src={avatar}
				alt={name}
			/>
			 <h1>{name}</h1>
				<h2>{title}</h2>
				<p>{description}</p>	
		</div>
	)
}