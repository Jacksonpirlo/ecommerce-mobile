import axios from "axios";

const API = "https://ecommerce-drab-six.vercel.app";

export const register = async (data: {
  user: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.post(
      `${API}/api/auth/register`,
      {
        name: data.user,
        email: data.email,
        password: data.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      },
    );
    return res;
  } catch (error) {
    throw error;
  }
};
