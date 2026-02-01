import { API_URL } from "./config";

const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  return await response.json();
};

const getRecipiesById = async (id) => {
  const response = await fetch(API_URL + `lookup.php?i=${id} `);
  return await response.json();
};

const getRecipiesByCatname = async (catname) => {
  const response = await fetch(API_URL + `filter.php?c=${catname} `);
  return await response.json();
};

export { getAllCategories, getRecipiesByCatname, getRecipiesById };
