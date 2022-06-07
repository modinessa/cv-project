import './input.scss'
import React from "react";

export function Input({ register, name, title, errors}) {
	console.log(errors);
	let message = "";

	if (errors.hasOwnProperty('message')) {
		message = errors.message;
	} else if (name in errors) {
		message = errors[name].message;
	}

	return (
		<>
			<div className="data-row">
					<label htmlFor={name} className="title-column">
						{`${title}:`}
					</label>
					<input
						className={`data-column skill-input ${errors[name] ? "error" : ""}`}
						{...register(name)}
						placeholder={`Enter ${title.toLowerCase()}`}/>
			</div>
			<div className='error-message'>
				{message}
			</div>
		</>
	)
}
