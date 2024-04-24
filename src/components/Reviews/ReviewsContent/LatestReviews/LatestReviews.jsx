import React from "react";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";

const StyledLatestReviews = styled.section`
  display: flex;
  gap: 40px;
  overflow-x: auto;
  margin-bottom: 40px;
`

const LatestReviews = ({ reviews }) => {

  console.log(reviews)
  const renderCards = () => {
    return reviews.map((review, i) => <ReviewCard key={i} comment={review.comment} customer={review.customer}  date={review.date} />)
  }
  
  return (
    <StyledLatestReviews>
      {renderCards()}
    </StyledLatestReviews>
  )
  ;
};

export default LatestReviews;
