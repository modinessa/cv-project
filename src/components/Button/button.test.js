import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { store } from '../../store/store';
import { Button } from './index';

const TEST_ICON = 'FontAwesomeIcon';
const TEST_TYPE_TRANS = 'link-transparent';
const TEST_TYPE_BTN = 'link-button';
const TEST_TYPE_SQR_T = 'square-top';
const TEST_TYPE_SQR_R = 'square-right';
const TEST_TYPE_SQR_B = 'square-bottom';
const TEST_TYPE_SQR_L = 'square-left';
const TEST_TYPE_SOME = 'some';
const TEST_TEXT = 'Texty bla-bla';

describe('Button', () => {
	it('renders component', () => {
		const mockCallBack = jest.fn();
		expect(renderer.create(
			<Provider store={store}>
				<Button
					icon={TEST_ICON}
					type={TEST_TYPE_BTN}
					cliclickHandler={mockCallBack}
					text={TEST_TEXT}
				/>
			</Provider>
		)).toMatchSnapshot();
	});

	it('renders component', () => {
		const mockCallBack = jest.fn();
		expect(renderer.create(
			<Provider store={store}>
				<Button
					icon={TEST_ICON}
					type={TEST_TYPE_TRANS}
					cliclickHandler={mockCallBack}
					text={TEST_TEXT}
				/>
			</Provider>
		)).toMatchSnapshot();
	});
	
	it('renders component', () => {
		const mockCallBack = jest.fn();
		expect(renderer.create(
			<Provider store={store}>
				<Button
					icon={TEST_ICON}
					type={TEST_TYPE_SQR_T}
					cliclickHandler={mockCallBack}
				/>
			</Provider>
		)).toMatchSnapshot();
	})
	
	it('renders component', () => {
		const mockCallBack = jest.fn();
		expect(renderer.create(
			<Provider store={store}>
				<Button
					icon={TEST_ICON}
					type={TEST_TYPE_SQR_R}
					cliclickHandler={mockCallBack}
				/>
			</Provider>
		)).toMatchSnapshot();
	})
	
	it('renders component', () => {
		const mockCallBack = jest.fn();
		expect(renderer.create(
			<Provider store={store}>
				<Button
					icon={TEST_ICON}
					type={TEST_TYPE_SQR_L}
					cliclickHandler={mockCallBack}
				/>
			</Provider>
		)).toMatchSnapshot();
	})
	
	it('renders component', () => {
		const mockCallBack = jest.fn();
		expect(renderer.create(
			<Provider store={store}>
				<Button
					icon={TEST_ICON}
					type={TEST_TYPE_SQR_B}
					cliclickHandler={mockCallBack}
				/>
			</Provider>
		)).toMatchSnapshot();
	})

	it('renders component', () => {
		const mockCallBack = jest.fn();
		expect(renderer.create(
			<Provider store={store}>
				<Button
					icon={TEST_ICON}
					type={TEST_TYPE_SOME}
					cliclickHandler={mockCallBack}
					text={TEST_TEXT}
				/>
			</Provider>
		)).toMatchSnapshot();
	})
})