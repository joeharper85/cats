import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats, fetchFavourites, fetchVotes } from "../actions";
import { ImageCard } from "./ImageCard";

import { Card } from "semantic-ui-react";

export const CatList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCats = async () => {
      await dispatch(fetchCats());
    };
    loadCats();

    const loadFavourites = async () => {
      await dispatch(fetchFavourites());
    };
    loadFavourites();

    const loadVotes = async () => {
      await dispatch(fetchVotes());
    };
    loadVotes();
  }, [dispatch]);

  const cats = useSelector((state) => state.cats);
  const favourites = useSelector((state) => state.favourites);
  const votes = useSelector((state) => state.votes);

  const getFavourite = (id) => {
    return favourites.filter((favourite) => favourite.image_id === id)[0];
  };

  const getVotes = (id) => {
    const votesForCat = votes.filter((vote) => vote.image_id === id);
    return votesForCat;
  };

  return (
    <div>
      {cats.length > 0 ? (
        <Card.Group itemsPerRow={4} style={{ padding: "20px" }}>
          {cats.map((cat) => (
            <ImageCard
              key={cat.id}
              image={cat}
              favourite={getFavourite(cat.id)}
              votes={getVotes(cat.id)}
            />
          ))}
        </Card.Group>
      ) : (
        <div></div>
      )}
    </div>
  );
};
