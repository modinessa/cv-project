import React from "react";

export function Input({ register, name, ...rest }) {

	return (
		<div className="data-row">
				<label htmlFor={name} className="title-column">
					{name}
				</label>
				<input
					className="skill-input"
					{...register(name.toLowerCase())}
					placeholder="Enter skill range"/>
		</div>
	)
}
