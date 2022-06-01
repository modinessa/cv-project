import React from 'react';
import './feedback.scss'

export function Feedback({users}) {
	let number = 1;
	return (
		<section className='app-section'>
			<h2>
				Feedbacks
			</h2>
			<ul className='app-feedbacks'>
				{
					users.map((user) => {
						const key = `${user.name} ${number}`;
						number ++;
						return (
							<li key={key} className='app-feedbacks-user'>
								<p>{user.feedback}</p>
								<div className='user-info'>
									<img
											className='app-photo user-photo'
											src={user.photo}
											alt={user.name}
									/>
									<p>
										{user.company} 
									</p>
									<a href={user.website}>{user.website.slice(8, -1)}</a>
								</div>
							</li>
						)
					})
				}



			</ul>
		</section>
	)
}