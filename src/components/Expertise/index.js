import React from 'react';

export function Expertise({data}) {

	return (
		<section className='app-section'>
			<h2>
				Experience
			</h2>
			{data.map((job) => {
				const key = job.date;
				return(
					<div key={key} className="app-experience">
						<div className="title-column">
							<h3>
								{job.date}
							</h3>
							<p>
								{job.info.compamy}
							</p>
						</div>

						<div className="title-column">
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
