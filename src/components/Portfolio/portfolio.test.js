import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Portfolio } from './index';

const TEST_FILTERS = [{category: 'All', isChecked: true}];
const TEST_CARDS = [{
    id: 1,
		img: 'someImg.png',
    category:'code',
		portfolioInfo: {
			title: 'Some text',
			text: 'Donec pede justo, fringilla vel, aliquet nec, vulel, aliquet nec, vulputate eget eget, arcu. In enim justo',
			url: 'https://somesite.com'
		}
  }];


describe('Portfolio', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<Portfolio />
			</Provider>
		)).toMatchSnapshot();
	})
})