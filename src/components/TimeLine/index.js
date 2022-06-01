import './timeLine.scss';
import React from 'react';


export function TimeLine({data}) {
let number = 1;
	return (
		<section className='app-section'>
			<h2 className='app-title'>
				Education
			</h2>
			<div className='time-line-container'>
				{data.map((date) => {
					const key = `${data.title} ${number}`;
				number ++;
					return (
						<div key={key} className='time-line-item'>
							<div className='time-line'>
								<h3>{date.date}</h3>
								<div className='line-vert'></div>
							</div>
							<div className='info-container'>
								<div className='triangle-left'>
								</div>
								<div className='info'>
									<h3>
										{date.title}
									</h3>
									<p>
										{date.text}
									</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
			
		</section>	
	)
}