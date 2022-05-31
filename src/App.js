import './App.scss';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import {Box} from './components/Box';
import {Button} from './components/Button';

function App() {
  return (
		<>
			<Box title="Title of the Box" content="lorem blaaa"/>
			<Button
				//icon={<FontAwesomeIcon icon={regular("chevron-left")} />}
				text="Go back"
			/>
			<Button text="learn more" />
		</>
  );
}

export default App;
