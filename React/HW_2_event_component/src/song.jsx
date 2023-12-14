import React from 'react';
import Verse from './verse';

const Song = ({ verses }) => {
  return (
    <div>
      {verses.map((verse, index) => (
        <Verse key={index} lines={verse} />
      ))}
    </div>
  );
};

export default Song;