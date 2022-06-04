import './skills.scss';
import '../Button/button.scss';
import React, { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { Button } from '../Button/index';
import { Input } from '../Input/index';
import { Ruler } from '../Ruler/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { RangeBar } from '../RangeBar';

import { skills } from './constants';
import { updateSkillsUi } from '../../utils/updateSkillsUi';

const schema = yup.object({
  skill: yup.string().required(),
  range: yup.number().positive().min(0).max(100).required(),
});

export function Skills() {

	let number = 1;

	const {
		register,
		handleSubmit,
		formState:{ errors }
	} = useForm({resolver: yupResolver(schema)});

	const clickHandler = useCallback(() => {
		console.log("Open is clicked")
	});

	const onSubmit = useCallback((data) =>  {
		updateSkillsUi(data, skills);
	}, []);

	return (
		<section id="skills" className='app-section'>
			<div className='skills-title'>
				<h2 className='app-title'>
					Skills
				</h2>
				<Button
							icon={<FontAwesomeIcon icon={faPencil}/>}
							text="Open edit"
							clickHandler={clickHandler}
				/>
			</div>
			<div className='setSkills'>
				<form className='edit-skills' onSubmit={handleSubmit(onSubmit)}>
					<Input name="skill"
								title="Skill name"
								register={register}
								errors={errors}
					/>
					<Input name="range"
								title="Skill range"
								register={register}
								errors={errors}
					/>
					<input type="submit" className='submit-btn' value="Add skill" />
				</form>

				<div className='skill-ranges'>
					{skills.map((skill) =>{ 
						const key = `${skill.skill} ${number}`;
						number ++;
						return (
							<RangeBar 
											key={key}
											name={skill.skill}
											range={parseInt(skill.range)} />
						)
					})}
					<Ruler/>
				</div>
			</div>
		</section>
	)
}