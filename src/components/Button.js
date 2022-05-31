import React from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Button(props) {

	const {text, icon} = {...props};

	console.log(props);
	console.log(icon);

	if (!icon) {
		// TODO implement navigation functional
		return (
			<button className='app-button'>
				{text}
			</button>
		)
	} else {
		// TODO implement go back functional
		return (
			<button>
				{/*<FontAwesomeIcon icon={faHome} />
				<FontAwesomeIcon icon={ChevronLeftIcon} />*/}
				{icon} {text}
			</button>
		)
	}
}