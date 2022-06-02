import './App.scss';
import React, { useCallback } from 'react';
import { Route, Routes } from "react-router-dom";

import { Main } from './components/Main/index';
import { Button } from './components/Button/index';
import { NavigationPanel } from './components/NavigationPanel/index';
import { Box } from './components/Box/index';
import { TimeLine } from './components/TimeLine/index';
import { Expertise } from './components/Expertise/index';
import { Skills } from './components/Skills/index';
import { Portfolio } from './components/Portfolio/index';
import { Contacts } from './components/Contacts/index';
import { Feedback } from './components/Feedback/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { experience } from './components/Expertise/constants';
import { education } from './components/TimeLine/constants';
import { users } from './components/Feedback/constants';
import { aboutMe } from './components/Box/constants';


function App() {

const toggleMenu = useCallback(() =>  {
		console.log('"Toggle menu" is clicked'); //TODO add path
	}, []);
const goUp = useCallback(() =>  {
		console.log('"goUp" is clicked'); //TODO add path
	}, []);

  return (
		<Routes>
			<Route path="/" element={<Main/>} />
			<Route path="/inner" element={
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
			} />
		</Routes>
  );
}

export default App;
