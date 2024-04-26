import React from "react";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";

const StyledLatestReviews = styled.section`
  display: flex;
  gap: 40px;
  overflow-y: hidden;
  margin-bottom: 40px;
  margin-right: -35px;
  padding-right: 35px;
`

const LatestReviews = ({ reviews }) => {

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
