import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const KEY = `31013883-7e533408573fc88cfcaf1cb55`;

export const fetchImages = async (query, page) => {
  const options = `image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&${options}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
