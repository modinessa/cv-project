import code from '../../../assets/images/code.png';
import ui from '../../../assets/images/ui.png';

export const filters = [
	{label: 'All', isChecked: true},
	{label: 'Code', isChecked: false},
	{label: 'UI', isChecked: false}
];

export const cardsLayout = [
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