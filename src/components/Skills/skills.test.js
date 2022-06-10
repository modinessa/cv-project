import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Skills } from './index';


describe('Skills', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Skills />
			</Provider>
		)).toMatchSnapshot();
	})
})