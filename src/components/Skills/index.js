import './skills.scss';
import '../../components/Button/button.scss';
import React, { useCallback } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { setEditSkillsIsHide, setSkills } from '../../reducers';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { Button } from '../Button';
import { Input } from '../Input';
import { RangeBar } from './RangeBar';
import { Ruler } from './Ruler';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import { updateSkills } from './utils/updateSkills';

const schema = yup.object({
  skill: yup.string('Enter skill')
			.required('Skill name is a required field'),
  range: yup.number('Skill range must be a number from 10 to 100')
			.typeError('Skill range must be a number from 10 to 100')
			.required('Skill range is a required field')
			.min(10, 'Skill range must be greater or equal to 10')
			.max(100, 'Skill range must be less or equal to 10'),
});

export function Skills() {

	const {skills, editSkillsIsHide} = useSelector((state) => state.cv);
	const dispatch = useDispatch();

	const {
		reset,
		register,
		handleSubmit,
		formState:{ errors, isDirty }
	} = useForm({resolver: yupResolver(schema)});

	const isError = Object.keys(errors).length > 0;

	const clickHandler = useCallback(() => {
		dispatch(setEditSkillsIsHide(!editSkillsIsHide));
	}, [editSkillsIsHide, dispatch]);

	const onSubmit = useCallback((data) =>  {
		let updatedSkills = updateSkills(data, skills);
		dispatch(setSkills(updatedSkills));
		localStorage.setItem('Skills', JSON.stringify(updatedSkills));
		reset()
	}, [skills, dispatch]);

	return (
		<section id='skills' className='app-section'>
			<div className='skills-title'>
				<h2 className='app-title'>
					Skills
				</h2>
				<Button
							icon={<FontAwesomeIcon icon={faPencil}/>}
							text={editSkillsIsHide ? 'Open edit' : 'Close edit'}
							clickHandler={clickHandler}
				/>
			</div>
			{!editSkillsIsHide && 
				<div className='setSkills '>
					<form className='edit-skills' onSubmit={handleSubmit(onSubmit)}>
						<Input name='skill'
									title='Skill name'
									register={register}
									errors={errors}
						/>
						<Input name='range'
									title='Skill range'
									register={register}
									errors={errors}
						/>
						<input 
									type='submit'
									className='submit-btn'
									value='Add skill'
									disabled={!isDirty || isError}/>
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