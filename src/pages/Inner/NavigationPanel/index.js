import './navigationPanel.scss';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setNavigationIsHide } from '../../../reducers';

import { Navigation } from '../Navigation';
import { Button } from '../../../components/Button';
import { PhotoBox } from '../../../components/PhotoBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';

export function NavigationPanel() {

	const navigate = useNavigate();
	const { navigationIsHide } = useSelector((state) => state.cv);
	const dispatch = useDispatch();

	const toggleMenu = useCallback(() =>  {
		dispatch(setNavigationIsHide(!navigationIsHide));
		localStorage.setItem('navigationIsHide', !navigationIsHide);
	}, [navigationIsHide, dispatch]);

	const goBackkHandler = useCallback(() =>  {
		navigate('/');
	}, [navigate]);

	return (
		<aside className={`app-navigation-panel ${navigationIsHide ? 'nav-closed' : '' }`}>
			<div className={`panel ${navigationIsHide ? 'menu-closed' : '' }`}>
				<PhotoBox
						name='John Doe'
						avatar='http://avatars0.githubusercontent.com/u/246180?v=4'
				/>
				<div className='nav-menu'>
					<Navigation/>
					<Button
							icon={<FontAwesomeIcon icon={faChevronLeft}/>}
							text='Go back'
							clickHandler={goBackkHandler}
					/>
				</div>
			</div>
			<span id='menu-toggle'>
				<Button 
							icon={<FontAwesomeIcon icon={faBars}/>}
							clickHandler={toggleMenu}
				/>
			</span>
		</aside>
	)
}