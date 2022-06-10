import { Provider } from "react-redux";
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Input } from "./index";

const TEST_NAME = 'name';
const TEST_TITLE = 'Title';
const TEST_ERRORS = {[TEST_NAME]: {message: 'test error'}};

describe('Input', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Input
					register={() => {}}
					name={TEST_NAME}
					title={TEST_TITLE}
					errors={{TEST_ERRORS}}
					/>
			</Provider>
		)).toMatchSnapshot();
	})
})