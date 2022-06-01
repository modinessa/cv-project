import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../components/NavigationPanel/navigationPanelReducer";

export const store = configureStore({
	reducer: {
		navigation: navigationReducer,
	}
});