import React from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard.component';
import './Feedback.styles.scss';

function Feedback() {
	return (
		<div class='tile is-parent feedback'>
			<section class='tile is-child notification'>
				<FeedbackCard />
			</section>
		</div>
	);
}

export default Feedback;
