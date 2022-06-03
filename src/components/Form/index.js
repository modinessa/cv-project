import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import { Input } from "./Input/index";

export function Form({data}) {
	const {
				register,
				handleSubmit
	} = useForm({
		defaultValues: {
			skill: "skill",
			rangr: 50
		}
	})

	let number = 1;
	const onSubmit = useCallback(() => {
		console.log("Submitting");
	})

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{data.map((skill) => {
				const key = `${skill.skill} ${number}`;
					number ++;
					return(
						<Input key={key}
									name={skill.skill}
									range={skill.range}
									register={register}
						/>
					)
			})}
		</form >
	)
}