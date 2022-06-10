import {updateSkills} from './updateSkills';

const TEST_SKILL1 = {
	skill: 'tEsT_sKiLl_1',
	range: 22,
};
const TEST_SKILL2 = {
	skill: 'test_skill_2',
	range: 77,
};
const TEST_SKILL3 = {
	skill: 'test_skill_3',
	range: 11,
};
const ADDITIONAL_SKILL = {
	skill: 'test_skill_1',
	range: 99,
}

describe('updateSkills', () => {
	it('adds new skill and returns sorted skills list', () => {
		expect(updateSkills(TEST_SKILL1, [TEST_SKILL3, TEST_SKILL2]))
			.toEqual([TEST_SKILL2, TEST_SKILL1, TEST_SKILL3]);
	});

	it('updates existing skill', () => {
		expect(updateSkills(
			ADDITIONAL_SKILL, [TEST_SKILL1, TEST_SKILL2, TEST_SKILL3]))
					.toEqual([ADDITIONAL_SKILL, TEST_SKILL2, TEST_SKILL3]);
	});
})
