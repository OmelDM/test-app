import styled from "styled-components";
import { Review } from "./types";
import { DeleteIcon } from "../svgs/DeleteIcon";
import { IconButton } from "../UIKit";
import { EditIcon } from "../svgs/EditIcon";
import { useState } from "react";

const ReviewWrapper = styled.section`
  background-color: #ffffff;
  display: flex;
  min-height: 100px;
  margin-bottom: 16px;
`;

const ReviewAvatar = styled.div`
  background-color: #ffffff;
  display: flex;
`;

const ReviewDetails = styled.span`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const ReviewName = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

const Actions = styled.div`
  padding: 16px;
  margin-bottom: 8px;
`;
const ReviewComment = styled.span``;

type ReviewProps = {
  review: Review;
  onRemove: (id: string) => void;
  onEdit: (id: string) => void;
};

export const ReviewItem = ({ review, onEdit, onRemove }: ReviewProps) => {
  const [hover, setHover] = useState(false);

  const handleEdit = () => {
    onEdit(review.id);
  };
  const handleRemove = () => {
    onRemove(review.id);
  };

  return (
    <ReviewWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ReviewAvatar>
        <img src={review.avatar} height="100px" />
      </ReviewAvatar>
      <ReviewDetails>
        <ReviewName>{review.name}</ReviewName>
        <ReviewComment>{review.comment}</ReviewComment>
      </ReviewDetails>
      {review && hover && (
        <Actions>
          <IconButton onClick={handleEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
        </Actions>
      )}
    </ReviewWrapper>
  );
};
