import React from 'react';
import './Navigation.styles.scss';
import image from '../../assets/image_one.png';

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
					<div className='nav-flex'>
						<div className='nav-left'>
							<div class='navbar-brand'>
								<a class='navbar-item' href='https://localhost:3000'>
									<img src={image} alt='product feedback logo' />
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
							<p className='suggestions__amount'>6 Suggestions</p>
							<div class='dropdown'>
								<div class='dropdown-trigger'>
									<button
										class='button menu-btn'
										aria-haspopup='true'
										aria-controls='dropdown-menu'
									>
										<span className='dropdown__sort'>Sort by :</span>
										<span className='dropdown__sorttype'>Most Upvotes</span>
										<span class='icon is-small'>
											<i class='fas fa-angle-down' aria-hidden='true'></i>
										</span>
									</button>
								</div>
								<div class='dropdown-menu' id='dropdown-menu' role='menu'>
									<div class='dropdown-content'>
										<a href='google' class='dropdown-item'>
											Most Upvotes
										</a>
										<hr class='dropdown-divider' />
										<a class='dropdown-item' href='google'>
											Least Upvotes
										</a>
										<hr class='dropdown-divider' />
										<a href='google' class='dropdown-item'>
											Most Comments
										</a>
										<hr class='dropdown-divider' />
										<a href='google' class='dropdown-item'>
											Least Comments
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='nav-right'>
							<div className='buttons add-feedback'>
								<button class='button is-add'>
									<span className='add-feedback-plus'>+</span> Add Feedback
								</button>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Navigation;
