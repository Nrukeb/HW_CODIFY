import React from 'react';

const JSX = () => {
  const myNumber = 1007;
  const myString = 'чото что может быть строкой';

  return (
    <div>
      <h1>components</h1>
      <ul>
        <li>elem`s</li>
      </ul>
      <div>
        <p>data</p>
        <p>{myNumber}</p>
        <p>{myString}</p>
      </div>
    </div>
  );
};

export default JSX;