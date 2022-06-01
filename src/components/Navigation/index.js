import './navigation.scss';
import React from 'react';
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export function Navigation() {

	const { isClosed } = useSelector((state) => state.navigation);
	console.log(isClosed)

	if(!isClosed) {

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
						<span className="button-name">Education</span>
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="experience" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faPencil}/>
						<span className="button-name">Experience</span>
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="skills" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faDiamond}/>
						<span className="button-name">Skills</span>
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="portfolio" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faBriefcase}/>
						<span className="button-name">Portfolio</span>
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="contacts" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faPaperPlane}/>
						<span className="button-name">Contacts</span>
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="feedbacks" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faComment}/>
						<span className="button-name">Feedbacks</span>
					</Link>
				</div>
			</div>
		)
	} else {
		return (
			<div className='app-navigation'>
				<div className='app-navigation-button'>
					<Link to="about me" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faUser}/>
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="education" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faGraduationCap}/>		
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="experience" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faPencil}/>
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="skills" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faDiamond}/>
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="portfolio" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faBriefcase}/>
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="contacts" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faPaperPlane}/>
					</Link>
				</div>
				<div className='app-navigation-button'>
					<Link to="feedbacks" className="app-navigation__nav-list-item">
						<FontAwesomeIcon className='fa-icon-nav' icon={faComment}/>
					</Link>
				</div>
			</div>
		)
	}
}