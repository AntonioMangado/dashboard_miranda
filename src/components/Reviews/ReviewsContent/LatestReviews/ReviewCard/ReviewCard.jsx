import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const StyledReview = styled.article`
    width: 431px;
    height: 275px;
    padding: 30px;
    background-color: white;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
      &:last-of-type {
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > div {
          &:first-of-type {
            display: flex;
            align-items: center;

            p {
              &:first-of-type {
                font-weight: 600;
                color: #000000;
              }

              &:last-of-type {
                font-size: 14px;
                color: #799283;
              }
            }
          }

          &:last-of-type {
            display: flex;
            gap: 10px;

            svg {
              font-size: 22px;
              cursor: pointer;

              &:first-of-type {
                color: #4CAF50;
              }

              &:last-of-type {
                color: #FF5C5C;
              }
            }
          }
        }
      }    

      img {
      width: 56px;
      margin-right: 10px;
      }
    }
`


const ReviewCard = ({customer, comment, date}) => {
  return (
  <StyledReview>
    <div>
      <p>{comment}</p>
    </div>
    <div>
      <div>
        <img src="employee.webp" alt="customer photo" />
        <div>
          <p>{customer}</p>
          <p>{date}</p>
        </div>
      </div>
      
      <div>
        <FontAwesomeIcon icon={faCircleCheck}/>
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
    </div>
  </StyledReview>
  );
};

export default ReviewCard;
