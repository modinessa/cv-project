import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../../store/store';
import { RangeBar } from './index';

const TEST_NAME = 'skill';
const TEST_RANGE = 50;

describe('RangeBar', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<RangeBar
				name={TEST_NAME}
				range={TEST_RANGE}
				/>
			</Provider>
		)).toMatchSnapshot();
	})
})