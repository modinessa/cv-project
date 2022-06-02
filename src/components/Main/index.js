import './main.scss';
import React, { useCallback } from 'react';
import { PhotoBox } from '../PhotoBox/index';
import { Button } from '../Button';

export function Main() {

	const clickHandler = useCallback(() =>  {
		console.log('"Know more" is clicked'); //TODO add path
	}, []);

	return (
		<section className='app-section main-screen'>
				<PhotoBox 
							name="John Doe"
							title="Programmer. Creative. Innovator"
							description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
							avatar="http://avatars0.githubusercontent.com/u/246180?v=4"
						/>
				<Button text="Know more"
								clickHandler={clickHandler}/>
		</section>
	)
}