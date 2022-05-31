import React from 'react';

export function Box( {title, content}) {
	
	return (
		<div className='app-box'>
			<h2 className='app-title'>
				{title}
			</h2>
			<p>
				{content}
			</p>
		</div>
	)
}
