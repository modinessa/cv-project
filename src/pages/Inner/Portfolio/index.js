import './portfolio.scss';
import React from 'react';
 
import code from '../../../assets/images/code.png';
import ui from '../../../assets/images/ui.png';
import { PortfolioInfo } from './PortfolioInfo/PortfolioInfo';

const filters = [
	{label: 'All', isChecked: true},
	{label: 'Code', isChecked: false},
	{label: 'UI', isChecked: false}
];

const cardsLayout = [
	 {
    id: 1,
		img: code,
    filter:'code',
		portfolioInfo: {
			title: 'Some text',
			text: 'Donec pede justo, fringilla vel, aliquet nec, vulel, aliquet nec, vulputate eget eget, arcu. In enim justo',
			url: 'https://somesite.com'
		}
  },
	 {
    id: 2,
		img: ui,
    filter:'ui',
		portfolioInfo: {
			title: 'Title',
			text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo',
			url: 'https://somesite.com'
		}
  },
	 {
    id: 3,
		img: code,
    filter:'code',
		portfolioInfo: {
			title: 'Bla-bla',
			text: 'Pede justo, fringilla vel, aliquet nec, vulputate eget,vel, aliquet nec, vulputate eget arcu. In enim justo',
			url: 'https://somesite.com'
		}
  },
	 {
    id: 4,
		img: ui,
    filter:'ui',
		portfolioInfo: {
			title: 'Awesome text',
			text: 'Donec pede jusaliquet necto, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo',
			url: 'https://somesite.com'
		}
  },
]

export function Portfolio() {

	return (
		<section className='app-section'>
			<h2>
				Portfolio
			</h2>

			<div className='filter-container'>
        {filters.map(f => (
					<span key={`${f.label}_key`}>
						<div className='filter'>
							<div id={f.label}>
								{f.label}
							</div>
						</div>
						<span>/</span>
					</span>
        ))}
      </div>

			<div className='container'>
          {cardsLayout.map(card => {
						return(
							<div key={card.id} className={`card ${card.filter}`}>
								<img src={card.img} alt={`portfolio ${card.id}` }/>
								<PortfolioInfo 
													title={card.portfolioInfo.title}
													text={card.portfolioInfo.text}
													url={card.portfolioInfo.url} />
							</div>
						)
					})}
      </div>
		</section>
	)
}
