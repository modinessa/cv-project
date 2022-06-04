import './info.scss';
import React from 'react';

export function Info({ title, text }) {
	return (
		<div className='info'>
			<h3>
				{title}
			</h3>
			<p>
				{text}
			</p>
		</div>
	)
}