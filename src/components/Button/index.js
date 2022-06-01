import React from 'react';

export function Button({text, icon}) {

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