import './navigationPanel.scss';
import React from 'react';
//import { useSelector } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Navigation } from "../Navigation";
import { Button } from '../Button/index';
import { PhotoBox } from '../PhotoBox';

export function NavigationPanel() {

	//const { isClosed } = useSelector((state) => state.navigation);

	return (
		<div className={"app-navigation-panel"}>
			<PhotoBox
					name="John Doe"
					avatar="http://avatars0.githubusercontent.com/u/246180?v=4"
			/>
			<Navigation/>
			<Button
					icon={<FontAwesomeIcon icon={faChevronLeft}/>}
					text="Go back"
				/>
		</div>
	)
}