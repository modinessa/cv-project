import './ruler.scss';

export function Ruler() {
	return (
		<div>
			<div className='ruler-container'>
				<div className='mark-25'></div>
				<div className='mark-50'></div>
				<div className='mark-75'></div>
			</div>
			<div className='ruler-labels'>
				<div className='item-1'>
					Beginner
				</div>
				<div className='item-2'>
					Proficient
				</div>
				<div className='item-3'>
					Expert
				</div>
				<div className='item-4'>
					Master
				</div>
			</div>
		</div>
		
	)
}