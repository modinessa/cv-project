const url = '/api'

export function getEducations() {
  return fetch(`${url}/educations`, {
    method: 'GET',
  });
}

export function getSkills() {
  return fetch(`${url}/skills`, {
    method: 'GET',
  });
}

export function postSkills(data) {
  return fetch(`${url}/skills`, {
    method: 'POST',
		body: JSON.stringify(data)
  });
}
