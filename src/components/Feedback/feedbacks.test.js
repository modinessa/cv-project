import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Feedback } from './index';

const TEST_USERS = [{
    name: 'Name', 
		photo: "https://photo.jpg",
    feedback: 'Loreusum. Integer tincidunt. Cras dapibus.',
		company: "A Game of Thrones",
		website: "https://somesite.com/"
	}];


describe('Feedback', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Feedback
					users={TEST_USERS}
				/>
			</Provider>
		)).toMatchSnapshot();
	})
})