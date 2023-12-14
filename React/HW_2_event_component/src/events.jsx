import React from 'react';

const EventComponent = () => {
  const handleClick = (event) => {
    console.log('Click event:', event);
  };

  const handleChange = (event) => {
    console.log('Change event:', event);
  };

  const handleMouseOver = (event) => {
    console.log('MouseOver event:', event);
  };

  const handleMouseOut = (event) => {
    console.log('MouseOut event:', event);
  };

  const handleFocus = (event) => {
    console.log('Focus event:', event);
  };

  const handleBlur = (event) => {
    console.log('Blur event:', event);
  };

  const handleKeyDown = (event) => {
    console.log('KeyDown event:', event);
  };

  const handleKeyUp = (event) => {
    console.log('KeyUp event:', event);
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    console.log('ContextMenu event:', event);
  };

  const handleDoubleClick = (event) => {
    console.log('DoubleClick event:', event);
  };

  return (
    <div className="event-component">
      <button onClick={handleClick}>Click me</button>
      <input type="text" onChange={handleChange} className="styled-input" />
      <div
        className="hoverable"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Hover over me
      </div>
      <input onFocus={handleFocus} onBlur={handleBlur} className="styled-input" />
      <textarea
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        className="styled-input"
      />
      <button
        onContextMenu={handleContextMenu}
        className="right-clickable"
      >
        Right-click me
      </button>
      <button onDoubleClick={handleDoubleClick} className="double-clickable">
        Double click me
      </button>
    </div>
  );
};

export default EventComponent;
