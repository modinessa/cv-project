import { createSlice} from '@reduxjs/toolkit';

const navigationIsHide = localStorage.getItem('navigationIsHide') === 'true';
const savedSkills = localStorage.getItem('Skills');
const defatulSkills = [];

	//{skill: "HTML", range: 100},
	//{skill: "CSS", range: 75},
	//{skill: "jQuery", range: 25},
	//{skill: "Php", range: 20},
	//{skill: "Laravel 2 (Bla-bla-bla)", range: 10},

export const cvSlise = createSlice({
	name: "cv",
	initialState: {
		editSkillsIsHide: true,
		skills: savedSkills ? JSON.parse(savedSkills) : defatulSkills,
		navigationIsHide,
	},
	reducers: {
		setEditSkillsIsHide: (state, {payload}) => {
			state.editSkillsIsHide = payload;
		},
		setSkills: (state, {payload}) => {
			state.skills = payload;
		},
		setNavigationIsHide: (state, {payload}) => {
			state.navigationIsHide = payload;
		}
	}
});

export const {
	setEditSkillsIsHide,
	setNavigationIsHide,
	setSkills
} = cvSlise.actions;

export default cvSlise.reducer;