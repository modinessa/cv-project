export function updateSkillsUi(data, skills) {

	let alreadiInArr = false;

	for(const skill of skills) {
		if (skill.skill.toLowerCase() == data.skill.toLowerCase().trim()) {
				skill.range = data.range;
				alreadiInArr = true;
			}
		if(alreadiInArr) break;
	}
		if(!alreadiInArr) {
			skills.push(data);
		}		
		sortArrayOfObjects(skills)

	return skills;
}

function sortArrayOfObjects (arr) {
	const newArr = arr.sort((a,b) => {return b.range - a.range});
	return newArr;
}