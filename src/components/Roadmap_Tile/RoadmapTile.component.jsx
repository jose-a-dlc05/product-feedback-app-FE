import React from 'react';

function RoadmapTile() {
	return (
		<section className='tile is-child notification'>
			<div className='roadmap__title'>
				<div className='title is-size-6'>Roadmap</div>
				<span>
					<a href='google' className='roadmap__link'>
						View
					</a>
				</span>
			</div>
			<div className='roadmap__status'>
				<div className='statuses'>
					<span className='status-dot planned-color'></span>
					Planned
				</div>
				<span>2</span>
			</div>
			<div className='roadmap__status'>
				<div className='statuses'>
					<span className='status-dot progress-color'></span>
					In-Progress
				</div>
				<span>3</span>
			</div>
			<div className='roadmap__status'>
				<div className='statuses'>
					<span className='status-dot live-color'></span>
					Live
				</div>
				<span>1</span>
			</div>
		</section>
	);
}

export default RoadmapTile;
