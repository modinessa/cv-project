import './expertise.scss';
import React from 'react';

export function Expertise({data}) {
let number = 1;
	return (
		<section className='app-section'>
			<h2>
				Experience
			</h2>
			{data.map((job) => {
				const key = `${job.info.job} ${number}`;
				number ++;
				return(
					<div key={key} className='app-experience-item'>
						<div className='app-experience-title'>
							<h3>
								{job.info.company}
							</h3>
							<h4>
								{job.date}
							</h4>
						</div>
						<div className='app-experience-info'>
							<h3>
								{job.info.job}
							</h3>
							<p>
								{job.info.description}
							</p>
						</div>
					</div>
				)
			})}
	</section>	
	)
}
