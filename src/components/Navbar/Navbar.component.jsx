import React from 'react';
import image from '../../assets/image_one.png';

function Navbar() {
	return (
		<nav className='navbar' role='navigation' aria-label='main navigation'>
			<div className='nav-flex'>
				<div className='nav-left'>
					<div class='navbar-brand'>
						<a class='navbar-item' href='https://localhost:3000'>
							<img src={image} alt='product feedback logo' />
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
				<div className='buttons add-feedback'>
					<button class='button is-add'>
						<span className='add-feedback-plus'>+</span> Add Feedback
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
