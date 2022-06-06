import './skills.scss';
import '../../../components/Button/button.scss';
import React, { useCallback } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { setEditSkillsIsHide, setSkills } from '../../../reducers';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { RangeBar } from './RangeBar';
import { Ruler } from './Ruler';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import { updateSkills } from './utils/updateSkills';

const schema = yup.object({
  skill: yup.string().required(),
  range: yup.number().positive().min(0).max(100).required(),
});

export function Skills() {

	const {skills, editSkillsIsHide} = useSelector((state) => state.cv);
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState:{ errors }
	} = useForm({resolver: yupResolver(schema)});

	const clickHandler = useCallback(() => {
		dispatch(setEditSkillsIsHide(!editSkillsIsHide));
		localStorage.setItem('editSkillsIsHide', !editSkillsIsHide);
	}, [editSkillsIsHide, dispatch]);

	const onSubmit = useCallback((data) =>  {
		let updatedSkills = updateSkills(data, skills);
		dispatch(setSkills(updatedSkills));
		localStorage.setItem("Skills", JSON.stringify(updatedSkills));
	}, [skills, dispatch]);

	return (
		<section id="skills" className='app-section'>
			<div className='skills-title'>
				<h2 className='app-title'>
					Skills
				</h2>
				<Button
							icon={<FontAwesomeIcon icon={faPencil}/>}
							text={editSkillsIsHide ? "Open edit" : "Close edit"}
							clickHandler={clickHandler}
				/>
			</div>
			{!editSkillsIsHide && 
				<div className='setSkills '>
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
				</div>
			}
			<div className='skill-ranges'>
				{skills.map((skill) =>{ 
					return (
						<RangeBar 
										key={skill.skill}
										name={skill.skill}
										range={parseInt(skill.range)} />
					)
				})}
				<Ruler/>
			</div>
		</section>
	)
}