import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Navigation } from './index';

describe('Navigation', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Navigation/>
			</Provider>
		)).toMatchSnapshot();
	})
})