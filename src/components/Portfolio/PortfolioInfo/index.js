import './portfolioInfo.scss';
import React from 'react';

export function PortfolioInfo({ title, text, url}) {
	return (
		<div className='card-info'>
			<h4>{title}</h4>
			<p>{text}</p>
			<a href='https://somesite.com'>View resource</a>	
		</div>
	)
}