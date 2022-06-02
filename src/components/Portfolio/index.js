import './portfolio.scss';
import React from 'react';

export function Portfolio({data}) {
	//let number = 1;
	return (
		<section className='app-section'>
			<h2>
				Portfolio
			</h2>

			<img src='../../assets/images/Code.png' alt='portfolio' />

			{/*{data.map((work) => {
				const key = `${work.info} ${number}`;
				number ++;
				return(
					<div key={key} className="app-experience-item">
						PORTO
					</div>
				)
			})}*/}

		</section>
	)
}