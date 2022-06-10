import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Info } from './index';

const TEST_TITLE = 'Title';
const TEST_TEXT = 'Content bla-bla';

describe('Info', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Info
					title={TEST_TITLE}
					text={TEST_TEXT}
				/>
			</Provider>
		)).toMatchSnapshot();
	})
})