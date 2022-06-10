import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"; 
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { NavigationPanel } from './index';

describe('NavigationPanel', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<BrowserRouter>
					<NavigationPanel />
				</BrowserRouter>
			</Provider>
		)).toMatchSnapshot();
	})
})