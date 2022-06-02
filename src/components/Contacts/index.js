import './contacts.scss';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhone,
	faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { 
	faTwitter,
	faFacebook,
	faSkype
 } from "@fortawesome/free-brands-svg-icons";

export function Contacts() {
return (
	<section className='app-section'>
		<h2>
			Contacts
		</h2>
		<div className='contacts-container'>
			<FontAwesomeIcon className='fa-icon-contacts' icon={faPhone}/>
			<div className='contact-info'>
				<h3>500 342 242</h3>
			</div>
		</div>
		<div className='contacts-container'>
			<FontAwesomeIcon className='fa-icon-contacts' icon={faEnvelope}/>
			<div className='contact-info'>
				<h3>office@kamsolutions.pl</h3>
			</div>
		</div>
		<div className='contacts-container'>
			<FontAwesomeIcon className='fa-icon-contacts' icon={faTwitter}/>
			<div className='contact-info'>
				<h3>Twitter</h3>
				<h4>{"//https://twitter.com/wordpress"}</h4>
			</div>
		</div>
		<div className='contacts-container'>
			<FontAwesomeIcon className='fa-icon-contacts' icon={faFacebook}/>
			<div className='contact-info'>
				<h3>Facebook</h3>
				<h4>{"//https:/www.facebook.com/facebook/.pl"}</h4>
			</div>
		</div>
		<div className='contacts-container'>
			<FontAwesomeIcon className='fa-icon-contacts' icon={faSkype}/>
			<div className='contact-info'>
				<h3>Skype</h3>
				<h4>kamsolutions.pl</h4>
			</div>
		</div>
	</section>
)
}