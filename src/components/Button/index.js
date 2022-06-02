import './button.scss'
import React from 'react';

export function Button({text, icon, clickHandler}) {
	return (
		<button className='app-button' onClick={clickHandler}>
			{icon} {text}
		</button>
	)
}