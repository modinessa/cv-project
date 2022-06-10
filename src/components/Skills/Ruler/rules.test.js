import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../../store/store';
import { Ruler } from './index';

describe('Ruler', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Ruler/>
			</Provider>
		)).toMatchSnapshot();
	})
})