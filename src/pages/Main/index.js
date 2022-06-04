import './main.scss';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoBox } from '../../components/PhotoBox';
import { Button } from '../../components/Button';

export function Main() {

	const navigate = useNavigate();
	const clickHandler = useCallback(() =>  {
		navigate('/inner');
	}, []);

	return (
			<div className='main-screen'>
				<PhotoBox 
							name='John Doe'
							title='Programmer. Creative. Innovator'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
							avatar='http://avatars0.githubusercontent.com/u/246180?v=4'
						/>
				<Button text='Know more'
								clickHandler={clickHandler}/>
			</div>
	)
}