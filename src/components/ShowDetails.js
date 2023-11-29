import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowDetails = ({ match }) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${match.params.id}`);
        setShow(response.data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetails();
  }, [match.params.id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{show.name}</h2>
      <img src={show.image && show.image.medium} alt={show.name} />
      <p>{show.summary}</p>
    </div>
  );
};

export default ShowDetails;
