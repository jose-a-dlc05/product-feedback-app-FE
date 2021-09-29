import React from 'react';

import TitleTile from '../Title_Tile/TitleTile.component';
import TagTile from '../Tag_Tile/TagTile.component';
import RoadmapTile from '../Roadmap_Tile/RoadmapTile.component';
import Navbar from '../Navbar/Navbar.component';

import './Navigation.styles.scss';

function Navigation() {
	return (
		<div className='columns'>
			<div className='column is-4 tile'>
				<div className='tile is-parent is-vertical'>
					<TitleTile />
					<TagTile />
					<RoadmapTile />
				</div>
			</div>
			<div className='column is-8 mt-3'>
				<Navbar />
				<div class='tile is-parent '>
					<article class='tile is-child notification is-danger'>
						<p class='title'>Wide tile</p>
						<p class='subtitle'>Aligned with the right tile</p>
						<div class='content'></div>
					</article>
				</div>
			</div>
		</div>
	);
}

export default Navigation;
