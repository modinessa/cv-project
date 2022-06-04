import React from 'react';
import { Info } from '../Info';
import './feedback.scss'

export function Feedback({users}) {
	let number = 1;
	return (
		<section className='app-section'>
			<h2>
				Feedbacks
			</h2>
			<div className='app-feedbacks'>
				{
					users.map((user) => {
						const key = `${user.name} ${number}`;
						number ++;
						return (
							<div key={key} className='app-feedbacks-user'>
								<Info text={user.feedback} />
								<div className='user-info'>
									<img
											className='app-photo user-photo'
											src={user.photo}
											alt={user.name}
									/>
									<div>
										{`${user.company},`} 
									</div>
									<a href={user.website}>{user.website.slice(8, -1)}</a>
								</div>
							</div>
						)
					})
				}
			</div>
		</section>
	)
}