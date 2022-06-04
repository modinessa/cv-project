import './navigationPanel.scss';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useSelector } from 'react-redux';

import { Navigation } from '../Navigation';
import { Button } from '../../../components/Button';
import { PhotoBox } from '../../../components/PhotoBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export function NavigationPanel() {

	const navigate = useNavigate();

	//const { isClosed } = useSelector((state) => state.navigation);
	const clickHandler = useCallback(() =>  {
		navigate('/');
	}, []);

	return (
		<aside className='app-navigation-panel'>
			<PhotoBox
					name='John Doe'
					avatar='http://avatars0.githubusercontent.com/u/246180?v=4'
			/>
			<div className='nav-menu'>
				<Navigation/>
				<Button
						icon={<FontAwesomeIcon icon={faChevronLeft}/>}
						text='Go back'
						clickHandler={clickHandler}
				/>
			</div>
		</aside>
	)
}