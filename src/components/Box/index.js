import React from 'react';

export function Box( {title, content}) {
	
	return (
		<section className='app-section'>
			<h2 className='app-title'>
				{title}
			</h2>
			<p>
				{content}
			</p>
		</section>
	)
}
