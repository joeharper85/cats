import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "../actions";
import { ImageCard } from "./ImageCard";
import { Header } from "semantic-ui-react";

export const CatList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCats = async () => {
      await dispatch(fetchCats());
    };
    loadCats();
  }, [dispatch]);

  const cats = useSelector((state) => state.cats);

  console.log(cats);

  return (
    <div>
      <Header as="h1">Available cats</Header>
      <Link to="/upload">Upload a new cat</Link>
      {cats.length > 0 ? (
        <div className="cat-list">
          {cats.map((cat) => (
            <ImageCard key={cat.original_filename} image={cat} />
          ))}
        </div>
      ) : (
        <div>No cats uploaded</div>
      )}
    </div>
  );
};
