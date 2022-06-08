import './timeLine.scss';
import React from 'react';
import { Info } from '../../components/Info';
import { Loading } from '../Loading';


export function TimeLine({data, error}) {
	let number = 1;
	return (
		<section className='app-section'>
			<h2 className='app-title'>
				Education
			</h2>
			<div className='time-line-container'>
				{ (data.length < 1) && (error.length < 1)
					? <Loading />
					: data.length > 0 ?
						<> 
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
						</>
						: <div className="responce-error">
								Something went wrong; please review your server connection!
							</div>
				}
			</div>
		</section>	
	)
}
