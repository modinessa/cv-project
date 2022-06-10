import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { PhotoBox } from './index';

const TEST_TITLE = 'Title';
const TEST_NAME = 'Name';
const TEST_DESCRIPTION = 'Content bla-bla';
const TEST_AVATAR ='../../assets/images/test.jpeg';

describe('PhotoBox', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<PhotoBox
					name={TEST_NAME}
					title={TEST_TITLE}
					description={TEST_DESCRIPTION}
					avatar={TEST_AVATAR}
				/>
			</Provider>
		)).toMatchSnapshot();
	})
})