import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getEducations } from '../utils/serverRequests';

export const fetchEducations = createAsyncThunk(
  'educations/fetchEducations',
  async () => {
		return getEducations()
			.then((response) => response.json())
 }
);

export const educationsSlise = createSlice({
	name: 'educations',
	initialState: {
		educations: [],
		errors: false
	},
	extraReducers: {
      [fetchEducations.fulfilled]: (state, {payload}) => {
        state.educations = payload;
				state.errors = false;
      },
      [fetchEducations.rejected]: (state) => {
        state.educations = [];
				state.errors = true;
      },
			
	},
	reducers: {
		setEducations: (state, {payload}) => {
			state.educations = payload;
		}
	}
});

export const { setEducations } = educationsSlise.actions;
export default educationsSlise.reducer;