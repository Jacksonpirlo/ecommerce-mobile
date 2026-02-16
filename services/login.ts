import axios from "axios";

const API = "https://ecommerce-drab-six.vercel.app";

export const login = async (data: { email: string; password: string }) => {
  const res = await axios.post(`${API}/api/auth/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data;
};
