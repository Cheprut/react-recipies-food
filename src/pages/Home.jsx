import { useState, useEffect } from "react";
import { getAllCategories } from "../../api";
import CategorieItem from "../component/CategorieItem";

function Home() {
  const [catalog, setCatalog] = useState([]);
  // console.log(catalog);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);
  return (
    <div className="list">
      {catalog.map((catalog) => (
        <CategorieItem catalog={catalog} key={catalog.idCategory} />
      ))}
    </div>
  );
}

export default Home;
