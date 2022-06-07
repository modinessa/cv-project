import './button.scss'
import React from 'react';
import { Link } from "react-router-dom";

export function Button({text, icon, clickHandler, type}) {

	switch (type) {
		case 'link-transparent':
			return (
				<button
						className='app-button link-transparent'
						onClick={clickHandler}
						alt='Link'
				>
					{icon} <span className='text'>{text}</span>
				</button>
			)
			
		case 'link-button':
			return (
				<button
						className='app-button link-button'
						onClick={clickHandler}
				>
					{icon} <span className='text'>{text}</span>
				</button>
			)
		case 'square-top': 
			return (
					<button
							className='app-button square-top'
							onClick={clickHandler}
					>
						{icon}
					</button>
				)
		case 'square-right':
			return (
				<button
						className='app-button square-right'
						onClick={clickHandler}
				>
					{icon}
				</button>
			)
		case 'square-bottom': 
			return (
				<button
						className='app-button square-bottom'
						onClick={clickHandler}
				>
					{icon}
				</button>
			)
		case 'square-left':
			return (
				<button
						className='app-button square-left'
						onClick={clickHandler}
				>
					{icon}
				</button>
			)

		default:
			return (
				<button
						className='app-button'
						onClick={clickHandler}
				>
					{icon} <span className='text'>{text}</span>
				</button>
			)
	}

}