import React from 'react';

export default function Banner() {
	return (
		<div className='column is-two-fifths'>
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
	);
}
