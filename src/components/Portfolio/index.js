import './portfolio.scss';
import React, { useCallback, useState} from 'react';

import { PortfolioInfo } from './PortfolioInfo';
import { filters, cardsDefault } from './constants';

export function Portfolio() {

	const [cards, setCards] = useState(cardsDefault);
	const [checkedFilters, setcheckedFilters] = useState(filters);

	const handelFilter = useCallback((filterCategory) => {
		setCards(cardsDefault.filter(card =>
			filterCategory.toLowerCase() === 'all' ? true :
				card.category=== filterCategory.toLocaleLowerCase() ));

		for (const filter of filters) {
			filter.isChecked = filter.category === filterCategory;
		}
		setcheckedFilters(filters);
			
	}, [setCards]);

	return (
		<section className='app-section'>
			<h2>
				Portfolio
			</h2>

			<div className='filter-container'>
        {checkedFilters.map((f, i) => (
					<div key={`${f.category}_key`} className='filter-item'>	
						<div
						   id={f.category}
							 className={`filter ${f.isChecked && 'isChecked'}`}
							 onClick={() => handelFilter(f.category)}>
							{f.category}
						</div>
						{i < filters.length - 1 &&
							<div className='separator'>/</div>
						}
					</div>
        ))}
      </div>

			<div className='container'>
          {cards.map(card => {
						return(
							<div key={card.id} className={`card ${card.category}`}>
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
