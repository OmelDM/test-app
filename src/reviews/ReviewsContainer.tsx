import { useState } from "react";
import styled from "styled-components";

import { useReviews } from "./useReviews";
import { ReviewEdit } from "./ReviewEdit";
import { Review } from "./types";
import { ReviewItem } from "./ReviewItem";

export const ReviewsWrapper = styled.div`
  font-family: Arial;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  padding: 16px 32px;
`;

export const ReviewsTitle = styled.h1`
  text-align: center;
  color: #ffffff;
`;

export const ReviewsContainer = () => {
  const { reviews, addReview, removeReview, editReview } = useReviews();
  const [currentEditId, setCurrentEditId] = useState<string | null>(null);

  const handleAdd = (review: Review) => {
    addReview(review);
  };

  const handleReview = (id: string) => {
    removeReview(id);
  };

  const handleSelectToEdit = (id: string) => {
    setCurrentEditId((prevId) => (prevId === id ? null : id));
  };

  const handleEdit = (review: Review) => {
    editReview(review);
    setCurrentEditId(null);
  };

  return (
    <ReviewsWrapper>
      <ReviewsTitle>Reviews</ReviewsTitle>
      {reviews.map((review) => (
        <div key={review.id}>
          <ReviewItem
            review={review}
            onEdit={handleSelectToEdit}
            onRemove={handleReview}
          />
          {currentEditId === review.id && (
            <ReviewEdit onAdd={handleEdit} review={review} />
          )}
        </div>
      ))}
      {!currentEditId && <ReviewEdit onAdd={handleAdd} />}
    </ReviewsWrapper>
  );
};
