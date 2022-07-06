import './rangeBar.scss';

export function RangeBar({name, range, handleDoubleClick}) {
	return(
		<div
				className='range-bar'
				style={{width: `calc(${range}% - 30px)`}}
				onDoubleClick={handleDoubleClick}>
			{name}
		</div>
	)
}