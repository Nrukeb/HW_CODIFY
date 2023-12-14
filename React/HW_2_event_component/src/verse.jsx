import React from 'react';
import Line from './line';

const Verse = ({ lines }) => {
  return (
    <div>
      {lines.map((line, index) => (
        <Line key={index} text={line} />
      ))}
    </div>
  );
};

export default Verse;
