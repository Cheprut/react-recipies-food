import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipiesByCatname } from "../../api";
import RecipiesCat from "../component/RecipiesCat";
import { useNavigate } from "react-router-dom";

function Recipies() {
  const [recipies, setRecipies] = useState([]);
  const { catname } = useParams();
  const navigate = useNavigate();
  console.log(recipies);

  useEffect(() => {
    getRecipiesByCatname(catname).then((data) => {
      data.meals && setRecipies(data.meals);
    });
  }, [catname]);
  console.log(catname);

  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn">
        Go back
      </button>
      <div className="list">
        {recipies.map((recip) => (
          <RecipiesCat recip={recip} key={recip.idMeal} />
        ))}
      </div>
    </div>
  );
}

export default Recipies;
