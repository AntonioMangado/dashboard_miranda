import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import LatestReviews from "./LatestReviews"
import { getReviewsData, getReviewsStatus, getReviewsError } from "../../../features/contact/contactSlice";
import { getReviewsThunk } from "../../../features/contact/contactThunk";
import Filters from "../../Filters"
import Table from "../../Table"

const StyledReviewsContainer = styled.section`
    padding: 35px;
    overflow-y: auto;
`

const ReviewsContent = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviewsData);
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const initialFetch = async () => {
    await dispatch(getReviewsThunk()).unwrap();
    setReviewsData(reviews);
    setLoading(false);
  } 

  useEffect(() => {
    initialFetch();
  }, [])

  const ratingToStars = (rating) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span>★</span>)
    }
    return stars;
  }

  const cols = [
    {label: 'Order ID', property: 'orderId'},
    {label: 'Date', property: 'date'},
    {label: 'Customer', property: 'customer'},
    {label: 'Comment', property: 'comment', display: (row, i) => <article key={i}><p>{ratingToStars(row.rating)}</p><p>{row.comment}</p></article>},
  ]

  const filters = [
    {label: 'All Reviews', action: () => setReviewsData(reviews)},
    {label: 'Archived', action: () => setReviewsData(reviews.filter(review => review.archived === true))}
  ]

  return (
  <StyledReviewsContainer>
    {loading ? 
      <p>Loading...</p> 
      :
      <>
        <LatestReviews reviews={reviews.slice(0, 5)}/> 
        <Filters buttons={filters} data={reviewsData} setData={setReviewsData} reviews={reviews}/>
        <Table cols={cols} data={reviewsData} />
      </> 
    }
  </StyledReviewsContainer>
  );
};

export default ReviewsContent;
