export function updateSkills(data, skills) {
	skills = [...skills]
		.filter((skill) =>
			skill.skill.toLowerCase() !== data.skill.toLowerCase().trim());

	return [...skills, data].sort((a,b) => b.range - a.range)
}
export function deleteSkill(data, skills) {
	skills = [...skills]
		.filter((skill) =>
			skill.skill.toLowerCase() !== data.skill.toLowerCase().trim());

	return [...skills, data].sort((a,b) => b.range - a.range)
}
