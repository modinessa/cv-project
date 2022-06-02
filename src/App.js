import './App.scss';
import { Route, Routes } from "react-router-dom";

import { Main } from './components/Main/index';
import { NavigationPanel } from './components/NavigationPanel/index';
import { Box } from './components/Box/index';
import { TimeLine } from './components/TimeLine/index';
import { Expertise } from './components/Expertise/index';
import { Skills } from './components/Skills/index';
import { Portfolio } from './components/Portfolio/index';
import { Contacts } from './components/Contacts/index';
import { Feedback } from './components/Feedback/index';

import { experience } from './components/Expertise/constants';
import { education } from './components/TimeLine/constants';
import { users } from './components/Feedback/constants';
import { aboutMe } from './components/Box/constants';


function App() {
  return (
		<Routes>
			<Route path="/" element={<Main/>} />
			<Route path="/inner" element={
				<main id="app-container">
					<NavigationPanel />
					<div className='app-section-container'>
						<Box title="About me" content={aboutMe}/>
						<TimeLine data={education} />
						<Expertise data={experience} />
						<Skills />
						<Portfolio />
						<Contacts />
						<Feedback users={users} />
					</div>
				</main>
			} />
		</Routes>
  );
}

export default App;
