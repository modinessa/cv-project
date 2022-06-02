import './App.scss';

import { NavigationPanel } from './components/NavigationPanel/index';
import { Box } from './components/Box/index';
import { TimeLine } from './components/TimeLine';
import { Expertise } from './components/Expertise/index';
import { Portfolio } from './components/Portfolio/index';
import { Contacts } from './components/Contacts';
import { Feedback } from './components/Feedback';

import { experience } from './components/Expertise/constants';
import { education } from './components/TimeLine/constants';
import { users } from './components/Feedback/constants';
import { aboutMe } from './components/Box/constants';


function App() {
  return (
		<>
			<NavigationPanel />
			<div className='app-section-container'>
				<Box title="About me" content={aboutMe}/>
				<TimeLine data={education} />
				<Expertise data={experience} />
				<Portfolio />
				<Contacts />
				<Feedback users={users} />
				
				{/*<Button text="learn more" />*/}
			</div>
		</>
  );
}

export default App;
