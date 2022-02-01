import axios from "axios";

const getItems = async (skip) => {
  const data = await axios.get(`http://localhost:5000/api/item?skip=${skip}`);
  return data;
};
const getItem = async (id) => {
  const data = await axios.get(
    `http://localhost:5000/api/item/description/${id}`
  );
  return data;
};
const creat = async (name, description) => {
  const data = await axios.post(`http://localhost:5000/api/item/create`, {
    name,
    description,
  });
  return data;
};
export { getItems, getItem, creat };
