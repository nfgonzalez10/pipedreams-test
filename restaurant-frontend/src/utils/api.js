import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 5000,
});

export const fetchStaff = async () => {
  try {
    const response = await api.get("/api/v1/staff");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
