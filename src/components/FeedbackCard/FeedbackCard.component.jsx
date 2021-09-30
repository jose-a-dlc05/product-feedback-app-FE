import React from 'react';
import feedbackCardStyles from './FeedbackCard.module.scss';

function FeedbackCard() {
	return (
		<div className={feedbackCardStyles.feedbackCard}>
			<div className={feedbackCardStyles.leftPos}>
				<button className={feedbackCardStyles.upvoteBtn}>
					<span className={feedbackCardStyles.arrow}>^</span>
					<span className={feedbackCardStyles.upvoteAmt}>112</span>
				</button>
				<div className={feedbackCardStyles.cardContent}>
					<h4>Add tags for solutions</h4>
					<p>Easier to search for solutions based on a specific task</p>
					<span class='tag tag-btn is-small my-2'>Enchancement</span>
				</div>
			</div>
			<div className={feedbackCardStyles.commentAmt}>
				<span
					className={feedbackCardStyles.commentIcon}
					style={{ marginRight: '10px' }}
				>
					<i className={`fas fa-comment`} style={{ color: '#CDD2EE' }}></i>
				</span>
				<span
					className={feedbackCardStyles.commentNum}
					style={{ fontWeight: 'bold' }}
				>
					2
				</span>
			</div>
		</div>
	);
}

export default FeedbackCard;
