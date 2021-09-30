import React from 'react';

import TitleTile from '../Title_Tile/TitleTile.component';
import TagTile from '../Tag_Tile/TagTile.component';
import RoadmapTile from '../Roadmap_Tile/RoadmapTile.component';
import Navbar from '../Navbar/Navbar.component';

import './Navigation.styles.scss';
import Feedback from '../Feedback/Feedback.component';

function Navigation() {
	return (
		<div className='columns'>
			<div className='column is-3 tile'>
				<div className='tile is-parent is-vertical'>
					<TitleTile />
					<TagTile />
					<RoadmapTile />
				</div>
			</div>
			<div className='column is-9 mt-3'>
				<Navbar />
				<Feedback />
			</div>
		</div>
	);
}

export default Navigation;
