import './portfolioInfo.scss';
import React from 'react';

export function PortfolioInfo({ title, text, url}) {
	return (
		<div className='card-info'>
			<h4>{title}</h4>
			<p>{text}</p>
			<a href={url}>View resource</a>	
		</div>
	)
}