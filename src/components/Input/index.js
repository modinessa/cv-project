import './input.scss'
import React from "react";

export function Input({ register, name, title, errors}) {

	return (
		<div className="data-row">
				<label htmlFor={name} className="title-column">
					{`${title}:`}
				</label>
				<input
					className={`data-column skill-input ${errors[name] ? "error" : ""}`}
					{...register(name)}
					placeholder={`Enter ${title.toLowerCase()}`}/>
		</div>
	)
}
