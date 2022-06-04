import '../../App.scss';
import React, { useCallback } from 'react';

import { Button } from '../../components/Button';
import { NavigationPanel } from './NavigationPanel';
import { Box } from '../../components/Box';
import { TimeLine } from './TimeLine';
import { Expertise } from './Expertise';
import { Skills } from './Skills';
import { Portfolio } from './Portfolio';
import { Contacts } from './Contacts';
import { Feedback } from './Feedback';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { experience } from './Expertise/constants';
import { education } from './TimeLine/constants';
import { users } from './Feedback/constants';
import { aboutMe } from '../../components/Box/constants';

export function Inner() {

	const toggleMenu = useCallback(() =>  {
		console.log('"Toggle menu" is clicked'); //TODO add path
	}, []);
const goUp = useCallback(() =>  {
		console.log('"goUp" is clicked'); //TODO add path
	}, []);

	return (
		<main id="app-container">
			<NavigationPanel />
			<div className='app-section-container'>
				<Button 
							icon={<FontAwesomeIcon icon={faBars}/>}
							clickHandler={toggleMenu}
				/>
				<Box title="About me" content={aboutMe}/>
				<TimeLine data={education} />
				<Expertise data={experience} />
				<Skills />
				<Portfolio />
				<Contacts />
				<Feedback users={users} />
				<Button 
							icon={<FontAwesomeIcon icon={faChevronUp}/>}
							clickHandler={goUp}
				/>
			</div>
		</main>

	)
}