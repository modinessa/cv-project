import {rest} from 'msw';
import {setupServer} from 'msw/node';

import { store } from '../store/store';
import { fetchEducations, setEducations } from './educations';

let serverState = 0;

const TEST_EDUCATION = {'educated': 'NO'};
const mockServer = setupServer(
	rest.get('/api/educations', (req, res, ctx) => {
		switch (serverState) {
			case 0:
				return res(ctx.json([TEST_EDUCATION]));
			case 1:
				return res(ctx.status(500));
		}
	}),
);

describe('educations', () => {
	beforeAll(() => {
		mockServer.listen();
	});

	afterAll(() => {
		mockServer.close();
	});

	it('sets educations', () => {
		expect(store.getState().educations.educations).toEqual([]);

		store.dispatch(setEducations([TEST_EDUCATION]));

		expect(store.getState().educations.educations).toEqual([TEST_EDUCATION]);
	})

	it('fetches educations', async () => {
		serverState = 0;

		const {payload} = await store.dispatch(fetchEducations());

		expect(payload).toEqual([TEST_EDUCATION]);
		expect(store.getState().educations.errors).toEqual(false);
	});

	it('shows error', async () => {
		serverState = 1;

		await store.dispatch(fetchEducations());

		expect(store.getState().educations.educations).toEqual([]);
		expect(store.getState().educations.errors).toEqual(true);
	});
});
