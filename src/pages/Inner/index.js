import './inner.scss';
import React from 'react';

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
import { education } from '../../components/TimeLine/constants';
import { users } from '../../components/Feedback/constants';
import { aboutMe } from '../../components/Box/constants';

export function Inner() {

	return (
		<main id='app-container'>
			<NavigationPanel />
			<div className='app-section-container'>
				<Box title='About me' content={aboutMe}/>
				<TimeLine data={education} />
				<Expertise data={experience} />
				<Skills />
				<Portfolio />
				<Contacts />
				<Feedback users={users} />
				<Button 
							icon={<FontAwesomeIcon icon={faChevronUp}/>}
							clickHandler={() => console.log('"goUp" is clicked')}
							type='square-bottom'
				/>
			</div>
		</main>

	)
}