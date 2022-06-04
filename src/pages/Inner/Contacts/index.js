import './contacts.scss';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhone,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { 
	faTwitter,
	faFacebook,
	faSkype
 } from '@fortawesome/free-brands-svg-icons';

export function Contacts() {
return (
	<section className='app-section'>
		<h2>
			Contacts
		</h2>
		<div className='contacts-container'>
			<FontAwesomeIcon className='fa-icon-contacts' icon={faPhone}/>
			<div className='contact-info'>
				<a href='tel:500-342-0242'>500 342 242</a>
			</div>
		</div>
		<div className='contacts-container'>
			<FontAwesomeIcon className='fa-icon-contacts' icon={faEnvelope}/>
			<div className='contact-info'>
				<a href='mailto:office@kamsolutions.pl'>office@kamsolutions.pl</a>
			</div>
		</div>
		<div className='contacts-container'>
			<FontAwesomeIcon className='fa-icon-contacts' icon={faTwitter}/>
			<div className='contact-info'>
				<h3>Twitter</h3>
				<a
					href='https://twitter.com/wordpress'
					className='small-link'>
						{`//https://twitter.com/wordpress`}
				</a>
			</div>
		</div>
		<div className='contacts-container'>
			<FontAwesomeIcon className='fa-icon-contacts' icon={faFacebook}/>
			<div className='contact-info'>
				<h3>Facebook</h3>
				<a
					href='https://www.facebook.com/avdeeva.inessa' 
					className='small-link'>
						{`https://www.facebook.com`}
				</a>
			</div>
		</div>
		<div className='contacts-container'>
			<FontAwesomeIcon className='fa-icon-contacts' icon={faSkype}/>
			<div className='contact-info'>
				<h3>Skype</h3>
				<a
					href='skype:echo123?call'
					className='small-link'>
						kamsolutions.pl
				</a>
			</div>
		</div>
	</section>
)
}