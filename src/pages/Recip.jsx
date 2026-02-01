import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipiesById } from "../../api";
import { useNavigate } from "react-router-dom";

function Recip() {
  const { id } = useParams();
  const [recip, setRecip] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getRecipiesById(id).then((data) => {
      setRecip(data.meals[0]);
    });
  }, []);

  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn">
        Go back
      </button>
      {!recip.idMeal ? (
        "loading"
      ) : (
        <div className="recipe">
          <img src={recip.strMealThumb} alt={recip.strMeal} />
          <h1>{recip.strMeal}</h1>
          {recip.strArea ? <h2>{recip.strArea} </h2> : null}

          <h6>
            <strong>Category:</strong> {recip.strCategory}
          </h6>
          <p>{recip.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recip).map((key) => {
                if (key.includes("Ingredient") && recip[key]) {
                  return (
                    <tr>
                      <td>{recip[key]}</td>
                      <td>{recip[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          {recip.strYoutube ? (
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${recip.strYoutube.slice(-11)}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Recip;
