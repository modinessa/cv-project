
const initialState = [
	{skill: "HTML", range: 100},
	{skill: "CSS", range: 75},
	{skill: "jQuery", range: 25},
	{skill: "Php", range: 20},
	{skill: "Laravel 2 (Bla-bla-bla)", range: 10},
]

let lastId = 0;

export function skillsListReducer(state = initialState, action) {
	switch (action.type) {
		case 'skillAdded':
			return [
					...state,
				{
					id: ++lastId,
					description: action.payload.description,
				}
			]

		case 'skillRemoved':
			return state.filter(bug => bug.id !== action.payload.id)

		default:
			return state
	}
}
 