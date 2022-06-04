import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../pages/Inner/NavigationPanel/navigationPanelReducer";

export const store = configureStore({
	reducer: {
		navigation: navigationReducer,
	}
});