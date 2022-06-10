import {rest} from 'msw';
import {setupServer} from 'msw/node';

import { store } from '../store/store';
import { fetchSkills, setSkills } from './skills';

let serverState = 0;

const TEST_SKILL = {'skill': 'Bla', 'range': 50};
const mockServer = setupServer(
	rest.get('/api/skills', (req, res, ctx) => {
		switch (serverState) {
			case 0:
				return res(ctx.json([TEST_SKILL]));
			case 1:
				return res(ctx.status(500));
		}
	}),
);

describe('skills', () => {
	beforeAll(() => {
		mockServer.listen();
	});

	afterAll(() => {
		mockServer.close();
	});

	it('sets skills', () => {
		expect(store.getState().cv.skills).toEqual([]);

		store.dispatch(setSkills([TEST_SKILL]));

		expect(store.getState().cv.skills).toEqual([TEST_SKILL])
	})

	it('fetch skills', async () => {
		serverState = 0;

		const {payload} = await store.dispatch(fetchSkills());

		expect(payload).toEqual([TEST_SKILL]);
		expect(store.getState().cv.skills).toEqual([TEST_SKILL]);
	});
})

