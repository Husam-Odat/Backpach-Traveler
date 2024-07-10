import axios from "axios";

export const fetchData = async (userId) => {
  try {
    const response = await axios.get(`https://651a6344340309952f0d333a.mockapi.io/hasan/${userId}`);
    const data = response.data;
    return data;
  } catch (error) {
    // Handle any errors that might occur during the request
    console.error(error);
    throw error;
  }
};