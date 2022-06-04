import {createSlice} from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState: {
		isClosed: false,
	},
	reducers: {
		setIsClosed: (state, {payload}) => {
			state.isClosed = payload;
		}
	},
})

export default navigationSlice.reducer;