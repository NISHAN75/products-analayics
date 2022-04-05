import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews,setReviews]=useReviews();
  return (
    <div className='review-content grid grid-cols-3 gap-10 mt-20 mx-auto text-center'>
      {
        reviews.map(review=><Review review={review} key={review.id}></Review>)
      }
    </div>
  );
};

export default Reviews;