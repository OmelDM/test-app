import { Review } from "../reviews/types";

const STORAGE_KEY = "test-app-key";

export const readFromStorage = (): Array<Review> => {
  try {
    const reviews = localStorage.getItem(STORAGE_KEY);
    const parsedReviews = JSON.parse(reviews || "");

    return parsedReviews;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const saveToStorage = (reviews: Array<Review>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch (error) {
    console.error(error);
  }
};
