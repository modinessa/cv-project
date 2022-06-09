import { configureStore } from "@reduxjs/toolkit";
import cvReducer from '../reducers/skills';
import educationsReducer from '../reducers/educations';

export const store = configureStore({
	reducer: {
		cv: cvReducer,
		educations: educationsReducer
	}
});
