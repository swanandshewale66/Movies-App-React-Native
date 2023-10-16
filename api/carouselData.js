import axios from 'axios';
import {apiKey} from '../constants';

const liveRailUrl =
  'https://tickernews.co/wp-content/uploads/2023/08/TickerAppFASTchannels.json';
const catchUpRailUrl =
  'https://zznylmsrqi.execute-api.us-east-2.amazonaws.com/vprism/cms/videolistv2?account_id=61a0c96ed4f9d00009d0f691&portal_id=64f1e7ba1496c9000811f517&master_profile_id=64f17c33234f220008803d38&pgindex=0&pgitems=30';
// const trendingMoviesEndPoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;

export const getImage = path => {
  return path ? 'https://image.tmdb.org/t/p/w500' + path : null;
};

const networkCall = async (url, payload) => {
  const options = {method: 'GET', url, params: payload ? payload : {}};

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
  }
};

export const fetchTrendingMovies = () => {
  return networkCall(liveRailUrl);
};

export const fetchCatchUpData = () => {
  return networkCall(catchUpRailUrl);
};
