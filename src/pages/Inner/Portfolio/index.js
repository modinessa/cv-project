import './portfolio.scss';
import React from 'react';
 
import IsoTopeGrid from 'react-isotope';

import code from '../../../assets/images/code.png';
import ui from '../../../assets/images/ui.png';

const filters = [
	{label: 'all', isChecked: true},
	{label: 'Code', isChecked: false},
	{label: 'UI', isChecked: false}
];

const cadrdsLayout = [
	 {
    id: 1,
		img: code,
    row: 0,
    col: 0,
    w: 1,
    h: 1,
    filter: ['code']
  },
	 {
    id: 2,
		img: ui,
    row: 0,
    col: 1,
    w: 1,
    h: 1,
    filter: ['ui']
  },
	 {
    id: 3,
		img: code,
    row: 0,
    col: 2,
    w: 1,
    h: 1,
    filter: ['code']
  },
	 {
    id: 4,
		img: ui,
    row: 0,
    col: 3,
    w: 1,
    h: 1,
    filter: ['ui']
  },
]

export function Portfolio({data}) {
	//let number = 1;
	return (
		<section className='app-section'>
			<h2>
				Portfolio
			</h2>

			<div className='filter-container'>
        {filters.map(f => (
          <div className='filter' key={`${f.label}_key`}>
            <input
              id={f.label}
              type='checkbox'
              value={f.label}
              onChange={onFilter}
              checked={f.isChecked}
            />
            <label htmlFor={f.label}>{f.label}</label>
          </div>
        ))}
      </div>

			<div className='container'>
        <IsoTopeGrid
          gridLayout={cardsLayout} // gridlayout of cards
          noOfCols={4} // number of columns show in one row
          unitWidth={200} // card width of 1 unit
          unitHeight={100} // card height of 1 unit
          filters={filters} // list of selected filters
        >
          {cardsLayout.map(card => (
            <div key={card.id} className={card.filter[0]}>
							<img src={card.img} alt={`portfolio ${card.id}` }/>
            </div>
          ))}
        </IsoTopeGrid>
      </div>
		</section>
	)
}


	//<div 
	//				className='grid'
  //				data-isotope='{ 'itemSelector': '.grid-item', 'masonry': { 'columnWidth': 200 } }'
	//		>
	//			<div className='grid-item'>
	//				<img src={code} alt='portfolio' />
	//			</div>
	//			<div className='grid-item'>
	//				<img src={ui} alt='portfolio' />
	//			</div>
	//			<div className='grid-item'>
	//				<img src={code} alt='portfolio' />
	//			</div>
	//			<div className='grid-item'>
	//				<img src={ui} alt='portfolio' />
	//			</div>
	//		</div>