import React from 'react';
import './Navigation.styles.scss';

function Navigation() {
	return (
		<div className='columns'>
			<div className='column is-4 tile'>
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
			<div className='column is-8 mt-3'>
				<nav className='navbar' role='navigation' aria-label='main navigation'>
					<div class='navbar-brand'>
						<a class='navbar-item' href='https://bulma.io'>
							<img
								src='https://bulma.io/images/bulma-logo.png'
								alt='Bulma: Free, open source, and modern CSS framework based on Flexbox'
								width='112'
								height='28'
							/>
						</a>

						<a
							role='button'
							class='navbar-burger'
							aria-label='menu'
							aria-expanded='false'
							href='google'
						>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
						</a>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Navigation;
