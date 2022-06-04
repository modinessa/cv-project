import './rangeBar.scss';

export function RangeBar({name, range}) {
	return(
		<div
				className='range-bar'
				style={{width: `calc(${range}% - 15px)`}}>
			{name}
		</div>
	)
}