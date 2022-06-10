import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { TimeLine } from './index';

const TEST_DATA = [{
		"date": 2001,
		"title": "Title 0",
		"text": "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit."
	}
];
const TEST_ERROR_TRUE = true;
const TEST_ERROR_FALSE = false;

describe('TimeLine', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<TimeLine 
				data={TEST_DATA}
				error={TEST_ERROR_FALSE}
				/>
			</Provider>
		)).toMatchSnapshot();
	});

	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<TimeLine 
				data={[]}
				error={TEST_ERROR_TRUE}
				/>
			</Provider>
		)).toMatchSnapshot();
	});
	
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<TimeLine 
				data={[]}
				error={TEST_ERROR_FALSE}
				/>
			</Provider>
		)).toMatchSnapshot();
	});
})