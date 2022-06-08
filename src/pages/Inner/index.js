import './inner.scss';
import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '../../components/Button';
import { NavigationPanel } from '../../components/NavigationPanel';
import { Box } from '../../components/Box';
import { TimeLine } from '../../components/TimeLine';
import { Expertise } from '../../components/Expertise';
import { Skills } from '../../components/Skills';
import { Portfolio } from '../../components/Portfolio';
import { Contacts } from '../../components/Contacts';
import { Feedback } from '../../components/Feedback';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { experience } from '../../components/Expertise/constants';
import { users } from '../../components/Feedback/constants';
import { aboutMe } from '../../components/Box/constants';
import { getEducations } from '../../utils/serverRequests';

export function Inner() {

	const { navigationIsHide } = useSelector((state) => state.cv);
	const [educations, setEducations] = useState([]);

	useEffect(() => {
		getEducations()
		.then((response) => response.json())
    .then((json) => setEducations(json))
	}, []);

	const scrollUp = useCallback(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}, []);

	return (
		<main id='app-container'>
			<NavigationPanel />
			<div className={`app-section-container ${navigationIsHide && 'nav-is-hide'}`}>
				<span id='about-me'>
					<Box title='About me' content={aboutMe}/>
				</span>
				<span id='education'>
					<TimeLine data={educations} />
				</span>
				<span id='experience'>
					<Expertise data={experience} />
					</span>
				<span id='skills'>
					<Skills />
					</span>
				<span id='portfolio'>
					<Portfolio />
					</span>
				<span id='contacts'>
					<Contacts />
				</span>
				<span id='feedbacks'>
					<Feedback users={users} />
				</span>
				<Button 
							icon={<FontAwesomeIcon icon={faChevronUp}/>}
							clickHandler={scrollUp}
							type='square-bottom'
				/>
			</div>
		</main>

	)
}