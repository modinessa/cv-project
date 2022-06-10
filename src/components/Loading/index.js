import './loading.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';


export function Loading() {
	return (
		<div className='loader-wrapper'>
    <div className='loader'>
			<FontAwesomeIcon className='fa-icon-loading' icon={faRefresh}/>
		</div>
  </div>
	)
}