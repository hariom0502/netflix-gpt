import React from "react";
import { Img_Cdn_Url } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-36 pr-4">
      <img alt="Movie Card" src={Img_Cdn_Url + posterPath} />
    </div>
  );
};

export default MovieCard;
