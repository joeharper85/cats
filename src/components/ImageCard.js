import React from "react";
import { Button, Card, Image, Label } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import {
  favouriteCat,
  unfavouriteCat,
  voteCat,
  UP_VOTE,
  DOWN_VOTE,
} from "../actions";

export const ImageCard = (props) => {
  const { url, id } = props.image;
  const { favourite, votes } = props;

  const dispatch = useDispatch();

  const calculateScore = () => {
    let score = 0;
    votes.forEach((vote) => {
      switch (vote.value) {
        case 0:
          score--;
          break;
        case 1:
          score++;
          break;
        default:
        // Do nothing
      }
    });

    return score;
  };

  return (
    <Card>
      <Image src={url} size="medium" />
      <Card.Content extra>
        {favourite ? (
          <Button
            icon="heart"
            color="purple"
            onClick={() => dispatch(unfavouriteCat(favourite.id))}
          />
        ) : (
          <Button
            icon="heart outline"
            color="purple"
            onClick={() => dispatch(favouriteCat(id))}
          />
        )}
        <span style={{ float: "right" }}>
          <Label>Rating: {calculateScore()}</Label>
          <Button
            icon="thumbs up"
            color="purple"
            onClick={() => dispatch(voteCat(id, UP_VOTE))}
          />
          <Button
            icon="thumbs down"
            color="purple"
            onClick={() => dispatch(voteCat(id, DOWN_VOTE))}
          />
        </span>
      </Card.Content>
    </Card>
  );
};
