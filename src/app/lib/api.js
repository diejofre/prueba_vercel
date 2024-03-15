import axios from "axios";

const api = axios.create({
  baseURL: "https://api-s4sl.onrender.com/api",
});

export const getMateriales = async () => {
  const res = await api.get("/materials");
  return res.data;
};

export const getReviews = async () => {
  const res = await api.get("/reviews");
  return res.data;
};
