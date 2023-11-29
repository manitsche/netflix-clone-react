import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ShowList from './ShowList';

const Home = () => {
  const [shows, setShows] = useState([]);
  
  const searchShows = async (query) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      setShows(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={searchShows} />
      <ShowList shows={shows} />
    </div>
  );
};

export default Home;
