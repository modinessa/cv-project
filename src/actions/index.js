export const addSkill = () => {
	return 	{
			type: "skillAdded",
			payload: {
					id: 1,
					description: "New skill added"
			}
	}
}

export const removeSkill = (id) => {
	return 	{
			type: "skillRemoved",
			payload: {
					description: "Skill removed"
			}
	}
}