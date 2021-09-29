import React from 'react';

function TagTile() {
	return (
		<section className='tile is-child notification'>
			<span class='tag tag-btn is-medium mx-3 my-1 active-tag'>All</span>
			<span class='tag tag-btn is-medium mx-3 my-1'>UI</span>
			<span class='tag tag-btn is-medium mx-3 my-1'>UX</span>
			<span class='tag tag-btn is-medium mx-3 my-1'>Enhancement</span>
			<span class='tag tag-btn is-medium mx-3 my-1'>Bug</span>
			<span class='tag tag-btn is-medium mx-3 my-1'>Feature</span>
		</section>
	);
}

export default TagTile;
