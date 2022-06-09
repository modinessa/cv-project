import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getSkills } from '../utils/serverRequests';

const navigationIsHide = localStorage.getItem('navigationIsHide') === 'true';

export const fetchSkills = createAsyncThunk(
  'cv/fetchSkills',
  async () => {
		return getSkills()
			.then((response) => response.json())
 }
);


export const cvSlise = createSlice({
	name: "cv",
	initialState: {
		editSkillsIsHide: true,
		skills: [],
		navigationIsHide,
	},
	extraReducers: {
      [fetchSkills.fulfilled]: (state, {payload}) => {
        state.skills = payload;
      }
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