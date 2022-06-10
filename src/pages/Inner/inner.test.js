import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 

import { store } from '../../store/store';
import { Inner } from './index';

describe('Inner', () => {
	beforeAll(() => {
		window.history.pushState({}, '', `/test`);
	});

	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/test' element={<Inner/>}/>
					</Routes>
				</BrowserRouter>
			</Provider>
		)).toMatchSnapshot();
	})
})