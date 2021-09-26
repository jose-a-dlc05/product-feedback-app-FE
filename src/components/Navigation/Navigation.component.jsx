import React from 'react';
import './Navigation.styles.scss';

function Navigation() {
	return (
		<div className='tile is-vertical is-8'>
			<div className='tile'>
				<div className='tile is-parent is-vertical'>
					<article className='tile is-child notification logo-block'>
						<h3 className='title'>Wombat</h3>
						<p className='subtitle'>Feedback Board</p>
					</article>
					<article className='tile is-child notification'>
						<span class='tag tag-btn is-medium mx-3 my-1 active-tag'>All</span>
						<span class='tag tag-btn is-medium mx-3 my-1'>UI</span>
						<span class='tag tag-btn is-medium mx-3 my-1'>UX</span>
						<span class='tag tag-btn is-medium mx-3 my-1'>Enhancement</span>
						<span class='tag tag-btn is-medium mx-3 my-1'>Bug</span>
						<span class='tag tag-btn is-medium mx-3 my-1'>Feature</span>
					</article>
					<article className='tile is-child notification'>
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
					</article>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
