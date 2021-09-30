import React from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard.component';
import styles from './Feedback.module.scss';

function Feedback() {
	return (
		<div className={`tile is-parent ${styles.feedback}`}>
			<section className='tile is-child notification'>
				<FeedbackCard />
			</section>
		</div>
	);
}

export default Feedback;
