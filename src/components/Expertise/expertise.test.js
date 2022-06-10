import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Expertise } from './index';

const TEST_DATA = [
	{
    date: '1900-2000', 
    info: {
      company: 'Test',
      job: 'Some Job',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute.'
		}
  }
]

describe('Expertise', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Expertise data={TEST_DATA} />
			</Provider>
		)).toMatchSnapshot();
	})
})