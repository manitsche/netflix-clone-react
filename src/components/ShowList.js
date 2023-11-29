// src/components/ShowList.js
import React from 'react';

const ShowList = ({ shows }) => {
  return (
    <div className="show-list">
      {shows.map(show => (
        <div key={show.show.id} className="show-item">
          <img src={show.show.image && show.show.image.medium} alt={show.show.name} />
          <p className="show-title">{show.show.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
