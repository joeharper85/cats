import React, { useState, useEffect } from "react";

export const ImageCard = (props) => {
  const [spans, setSpans] = useState();

  const imageRef = React.useRef();

  const setupSpans = () => {
    const height = imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    setSpans({ spans });
  };

  useEffect(() => {
    imageRef.current.addEventListener("load", setupSpans);
  });

  const { original_filename, url } = props.image;

  console.log(props);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={url} alt={original_filename} />
    </div>
  );
};
