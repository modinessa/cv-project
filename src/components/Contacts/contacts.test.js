import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Contacts } from './index';

describe('Contacts', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Contacts />
			</Provider>
		)).toMatchSnapshot();
	})
})