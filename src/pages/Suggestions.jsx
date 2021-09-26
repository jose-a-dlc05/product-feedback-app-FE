import React from 'react';

function Suggestions() {
	return (
		// Grid Layout
		<div className='container'>
			<div class='columns'>
				<div class='column is-two-fifths tile'>
					<div className='tile is-vertical is-8'>
						<div className='tile'>
							<div className='tile is-parent is-vertical'>
								<article className='tile is-child notification is-primary'>
									<p className='title'>Vertical...</p>
									<p className='subtitle'>Top tile</p>
								</article>
							</div>
						</div>
					</div>
				</div>
				<div class='column'>Banner</div>
			</div>
		</div>
	);
}

export default Suggestions;
