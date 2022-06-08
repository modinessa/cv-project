import code from '../../assets/images/Code.png';
import ui from '../../assets/images/UI.png';

export const filters = [
	{category: 'All', isChecked: true},
	{category: 'Code', isChecked: false},
	{category: 'UI', isChecked: false}
];

export const cardsDefault = [
	 {
    id: 1,
		img: code,
    category:'code',
		portfolioInfo: {
			title: 'Some text',
			text: 'Donec pede justo, fringilla vel, aliquet nec, vulel, aliquet nec, vulputate eget eget, arcu. In enim justo',
			url: 'https://somesite.com'
		}
  },
	 {
    id: 2,
		img: ui,
    category:'ui',
		portfolioInfo: {
			title: 'Title',
			text: 'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo',
			url: 'https://somesite.com'
		}
  },
	 {
    id: 3,
		img: code,
    category:'code',
		portfolioInfo: {
			title: 'Bla-bla',
			text: 'Pede justo, fringilla vel, aliquet nec, vulputate eget,vel, aliquet nec, vulputate eget arcu. In enim justo',
			url: 'https://somesite.com'
		}
  },
	 {
    id: 4,
		img: ui,
    category:'ui',
		portfolioInfo: {
			title: 'Awesome text',
			text: 'Donec pede jusaliquet necto, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo',
			url: 'https://somesite.com'
		}
  },
]