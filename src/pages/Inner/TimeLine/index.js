import './timeLine.scss';
import React from 'react';
import { Info } from '../../../components/Info';


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
								<Info title={date.title} text={date.text} />
							</div>
						</div>
					)
				})}
			</div>
			
		</section>	
	)
}