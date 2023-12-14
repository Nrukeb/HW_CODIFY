import React, { useState } from 'react';
import EventComponent from './events';
import Song from './song';

const App = () => {
  const bigIronVerses = [
  ["To the town of Agua Fria rode a stranger one fine day"],
  ["Hardly spoke to folks around him, didn't have too much to say"],
  ["Hardly spoke to folks around him, didn't have too much to say"],
  ["No one dared to ask his business no one dared to make a slip"],
  ["For the stranger there among them had a big iron on his hip"],
  ["Big iron on his hip"],
];
  return (
    <div>
        <EventComponent /> 
        
        <h1>Big Iron Lyrics</h1>
        <Song verses={bigIronVerses} />
    </div>
  );
};
export default App;



return (
  <div>
    
    
  </div>
);
};