import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../../store/store';
import { PortfolioInfo } from './index';

const TEST_TITLE = 'Title';
const TEST_TEXT = 'Content bla-bla';
const TEST_URL = 'www.url.com'

describe('PortfolioInfo', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<PortfolioInfo
					title={TEST_TITLE}
					text={TEST_TEXT}
					url={TEST_URL}
				/>
			</Provider>
		)).toMatchSnapshot();
	})
})