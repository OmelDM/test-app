import { useEffect, useState } from "react";
import { Review } from "./types";
import { readFromStorage, saveToStorage } from "../store/storage";

export const useReviews = () => {
  const [reviews, setReviews] = useState<Array<Review>>(readFromStorage);

  readFromStorage();

  useEffect(() => {
    saveToStorage(reviews);
  }, [reviews]);

  const handleAddReview = (newReview: Review) => {
    setReviews((prev) => [...prev, newReview]);
  };

  const handleRemoveReview = (idToRemove: string) => {
    setReviews((prev) => prev.filter(({ id }) => id !== idToRemove));
  };

  const handleEditReview = (editedReview: Review) => {
    setReviews((prev) =>
      prev.map((review) => {
        if (review.id === editedReview.id) {
          return editedReview;
        }

        return review;
      })
    );
  };

  return {
    reviews,
    addReview: handleAddReview,
    removeReview: handleRemoveReview,
    editReview: handleEditReview,
  };
};
