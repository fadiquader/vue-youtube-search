import axios from 'axios';
//
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from '../utils/constants';

export const onSearchChange = query => {
  const params = [
    `q=${query}`,
    `key=${YOUTUBE_API_KEY}`,
    `part=snippet`,
    `type=video`,
    `maxResults=10`
  ].join('&');
  const queryUrl = `${YOUTUBE_API_URL}?${params}`;
  return axios.get(queryUrl);
};
