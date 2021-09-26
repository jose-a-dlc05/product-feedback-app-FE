import React from 'react';
import Banner from '../components/Banner/Banner.component';
import Navigation from '../components/Navigation/Navigation.component';

function Suggestions() {
	return (
		<div className='container'>
			<div class='columns'>
				<div class='column is-two-fifths tile'>
					<Navigation />
				</div>
				<Banner />
			</div>
		</div>
	);
}

export default Suggestions;
