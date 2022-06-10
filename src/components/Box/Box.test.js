import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Box } from './index';

const TEST_TITLE = 'Title';
const TEST_CONTENT = 'Content bla-bla';

describe('Box', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Box
					title={TEST_TITLE}
					content={TEST_CONTENT}
				/>
			</Provider>
		)).toMatchSnapshot();
	})
})