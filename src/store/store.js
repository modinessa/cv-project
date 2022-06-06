import { configureStore } from "@reduxjs/toolkit";
import cvReducer from '../reducers/index';

export const store = configureStore({
	reducer: {
		cv: cvReducer,
	}
});
