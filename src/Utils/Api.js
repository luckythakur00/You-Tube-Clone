import axios from 'axios'
import { toast } from 'react-toastify'

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log("Error fetching api data :: Api.js :: ", error);
    if (error?.status == 401) {
      toast.warning(`Sorry, we're experiencing API issues. Please try again later.`, { theme: 'dark' })
    } else if (error?.status == 429) {
      toast.warning(`Oops! API key exhausted. We'll update it shortly. 😊`, { theme: 'dark' })
    }
    throw error;
  }
}