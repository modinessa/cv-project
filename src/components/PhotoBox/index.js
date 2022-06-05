import './photoBox.scss';
import React from 'react';

export function PhotoBox({name, title, description, avatar}) {

	return (
		<div
				className='app-section_photo-box'>
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