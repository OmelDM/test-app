import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import imgGen from "@dudadev/random-img";

import { Button, Input, Textarea } from "../UIKit";
import { Review } from "./types";

export const ReviewEditWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 16px;
`;

const EditItem = styled.div`
  margin-bottom: 8px;
`;

type ReviewEditProps = {
  review?: Review;
  onAdd: (review: Review) => void;
};

export const ReviewEdit = ({ review, onAdd }: ReviewEditProps) => {
  const [name, setName] = useState<string | undefined>(review?.name);
  const [comment, setComment] = useState<string | undefined>(review?.comment);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setName(event.target.value);
    }
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value) {
      setComment(event.target.value);
    }
  };

  const handleClick = async () => {
    if (name && comment) {
      let avatar = review?.avatar || "";

      if (!review) {
        avatar = await imgGen();
      }

      onAdd({
        id: !review ? uuidv4() : review.id,
        name,
        comment,
        avatar,
      });
      setName("");
      setComment("");
    }
  };

  return (
    <ReviewEditWrapper>
      <EditItem>
        <Input
          value={name || ""}
          onChange={handleInputChange}
          placeholder="Your Name"
          style={{
            width: "100%",
          }}
        />
      </EditItem>
      <EditItem>
        <Textarea
          value={comment || ""}
          onChange={handleTextareaChange}
          placeholder="Your Comment"
          style={{
            width: "100%",
          }}
        />
      </EditItem>
      <div>
        <Button onClick={handleClick}>{review ? "Save" : "Add"}</Button>
      </div>
    </ReviewEditWrapper>
  );
};
