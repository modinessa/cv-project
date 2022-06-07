import './main.scss';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoBox } from '../../components/PhotoBox';
import { Button } from '../../components/Button';

import avatar from '../../assets/images/avatar.jpeg';

export function Main() {

	const navigate = useNavigate();
	const clickHandler = useCallback(() =>  {
		navigate('/inner');
	}, [navigate]);

	return (
		<div className='main-screen '>
			<div className='main-screen-info-container'>
				<PhotoBox 
							name='Miu Miu'
							title='Programmer. Creative. Innovator'
							description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
							avatar={avatar}
						/>
				<Button text='Know more'
								clickHandler={clickHandler}
								type='link-button'/>
			</div>
		</div>
	)
}