import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Loading } from './index';

describe('Loading', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Loading/>
			</Provider>
		)).toMatchSnapshot();
	})
})