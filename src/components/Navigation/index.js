import './navigation.scss';
import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faUser,
	faGraduationCap,
	faPencil,
	faDiamond,
	faBriefcase,
	faPaperPlane,
	faComment
} from "@fortawesome/free-solid-svg-icons";

export function Navigation() {

	//const { isClosed } = useSelector((state) => state.navigation);
	return (
		<div className='app-navigation'>
			<div className='app-navigation-button'>
				<Link to="about me" className="app-navigation__nav-list-item">
					<FontAwesomeIcon className='fa-icon-nav' icon={faUser}/>
					<span className="button-name">About me</span>
				</Link>
			</div>
			<div className='app-navigation-button'>
				<Link to="education" className="app-navigation__nav-list-item">
					<FontAwesomeIcon className='fa-icon-nav' icon={faGraduationCap}/>
					<span className="item-name">Education</span>
				</Link>
			</div>
			<div className='app-navigation-button'>
				<Link to="experience" className="app-navigation__nav-list-item">
					<FontAwesomeIcon className='fa-icon-nav' icon={faPencil}/>
					<span className="item-name">Experience</span>
				</Link>
			</div>
			<div className='app-navigation-button'>
				<Link to="skills" className="app-navigation__nav-list-item">
					<FontAwesomeIcon className='fa-icon-nav' icon={faDiamond}/>
					<span className="item-name">Skills</span>
				</Link>
			</div>
			<div className='app-navigation-button'>
				<Link to="portfolio" className="app-navigation__nav-list-item">
					<FontAwesomeIcon className='fa-icon-nav' icon={faBriefcase}/>
					<span className="item-name">Portfolio</span>
				</Link>
			</div>
			<div className='app-navigation-button'>
				<Link to="contacts" className="app-navigation__nav-list-item">
					<FontAwesomeIcon className='fa-icon-nav' icon={faPaperPlane}/>
					<span className="item-name">Contacts</span>
				</Link>
			</div>
			<div className='app-navigation-button'>
				<Link to="feedbacks" className="app-navigation__nav-list-item">
					<FontAwesomeIcon className='fa-icon-nav' icon={faComment}/>
					<span className="item-name">Feedbacks</span>
				</Link>
			</div>
		</div>
	)
}