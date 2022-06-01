import { configureStore } from "@reduxjs/toolkit";
import { navigationPanelReducer } from "./components/NavigationPanel/navigationPanelReducer";

export const store = configureStore({
	reducer: {
		navigation: navigationPanelReducer,
	}
});
