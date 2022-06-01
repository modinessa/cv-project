import './App.scss';

import { Box } from './components/Box/index';
import { Expertise } from './components/Expertise/index';
import { Feedback } from './components/Feedback';
import { NavigationPanel } from './components/NavigationPanel/index';

import { experience } from './components/Expertise/constants';
import { education } from './components/TimeLine/constants';
import { users } from './components/Feedback/constants';
import { aboutMe } from './components/Box/constants';

import { TimeLine } from './components/TimeLine';

function App() {
  return (
		<>
			<NavigationPanel />
			<div className='app-section-container'>
				<Box title="About me" content={aboutMe}/>
				<TimeLine data={education} />
				<Expertise data={experience} />
				<Feedback users={users} />
				
				{/*<Button text="learn more" />*/}
			</div>
		</>
  );
}

export default App;
