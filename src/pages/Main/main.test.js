import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Main } from './index';

describe('Main', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/test' element={<Main/>}/>
					</Routes>
				</BrowserRouter>
			</Provider>
		)).toMatchSnapshot();
	})
})