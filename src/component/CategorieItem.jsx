import React from "react";
import { Link } from "react-router-dom";

function CategorieItem({ catalog }) {
  console.log(catalog);

  return (
    <div className="card">
      <div className="card-image">
        <img src={catalog.strCategoryThumb} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{catalog.strCategory}</h2>
        <p>{catalog.strCategoryDescription.slice(0, 135)}... </p>
      </div>
      <div className="card-action">
        <Link to={`/category/${catalog.strCategory}`}>Watches recipies</Link>
      </div>
    </div>
  );
}

export default CategorieItem;
