const navigationPanel = (state = 'VISIBLE', action) => {
	switch (action.type) {
		case 'TOGGLE_EDIT_SKILLS':
			return action.filter
		default:
			return state
	}
}

export default navigationPanel;
