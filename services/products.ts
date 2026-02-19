import axios from "axios";

const API = "https://ecommerce-drab-six.vercel.app";

export const getProducts = async () => {
  const res = await axios.get(`${API}/api/dashboard/products`);
  return res;
};

export default getProducts;
