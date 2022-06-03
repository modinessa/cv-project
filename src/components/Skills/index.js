import './skills.scss';
import React, { useCallback } from 'react';
import { Button } from '../Button/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Form } from '../Form/index';

import { skills } from './constants';

export function Skills() {

	const clickHandler = useCallback(() =>  {
		console.log('"Go back" is clicked'); //TODO add UI apdating
	}, []);

	return (
		<section className='app-section'>
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
				<Form data={skills} />
			</div>
		</section>
	)
}