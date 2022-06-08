import './navigation.scss';
import React from 'react';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faUser,
	faGraduationCap,
	faPencil,
	faDiamond,
	faBriefcase,
	faPaperPlane,
	faComment
} from '@fortawesome/free-solid-svg-icons';

export function Navigation() {
	return (
		<div className='app-navigation'>	
				<Link 
						smooth spy to='about-me'
						activeClass='active'
						className='app-navigation__nav-list-item'
				>
					<FontAwesomeIcon className='fa-icon-nav' icon={faUser}/>
					<span className='item-name'>About me</span>
				</Link>
				<Link
						smooth spy to='education'
						activeClass='active'
						className='app-navigation__nav-list-item'
				>
					<FontAwesomeIcon className='fa-icon-nav' icon={faGraduationCap}/>
					<span className='item-name'>Education</span>
				</Link>
				<Link
						smooth spy to='experience'
						activeClass='active'
						className='app-navigation__nav-list-item'
				>
					<FontAwesomeIcon className='fa-icon-nav' icon={faPencil}/>
					<span className='item-name'>Experience</span>
				</Link>
				<Link
						smooth spy to='skills' 
						activeClass='active'
						className='app-navigation__nav-list-item'
				>
					<FontAwesomeIcon className='fa-icon-nav' icon={faDiamond}/>
					<span className='item-name'>Skills</span>
				</Link>
				<Link
					smooth spy to='portfolio'
					activeClass='active'
					className='app-navigation__nav-list-item'
				>
					<FontAwesomeIcon className='fa-icon-nav' icon={faBriefcase}/>
					<span className='item-name'>Portfolio</span>
				</Link>
				<Link
						smooth spy to='contacts'
						activeClass='active'
						className='app-navigation__nav-list-item'
			>
					<FontAwesomeIcon className='fa-icon-nav' icon={faPaperPlane}/>
					<span className='item-name'>Contacts</span>
				</Link>
				<Link
						smooth spy to='feedbacks'
						activeClass='active'
						className='app-navigation__nav-list-item'
				>
					<FontAwesomeIcon className='fa-icon-nav' icon={faComment}/>
					<span className='item-name'>Feedbacks</span>
				</Link>
		</div>
	)
}