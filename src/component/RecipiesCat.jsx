import React from "react";
import { Link } from "react-router-dom";

function RecipiesCat({ recip }) {
  console.log(recip);

  return (
    <div className="card">
      <div className="card-image">
        <img src={recip.strMealThumb} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{recip.strMeal}</h2>
      </div>
      <div className="card-action">
        <Link to={`/recip/${recip.idMeal}`}>Watches recip</Link>
      </div>
    </div>
  );
}

export default RecipiesCat;
