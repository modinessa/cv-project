const editSkills = (state = 'VISIBLE', action) => {
	switch (action.type) {
		case 'TOGGLE_EDIT_SKILLS':
			return action.filter
		default:
			return state
	}
}

export default editSkills;

export function skillsListReducer(state = initialState, action) {
	switch (action.type) {
		case '':
			return [
					...state,
				{
					id: ++lastId,
					description: action.payload.description,
					resollve:false,
				}
			]

		case 'skillRemoved':
			return state.filter(bug => bug.id !== action.payload.id)

		default:
			return state
	}
}