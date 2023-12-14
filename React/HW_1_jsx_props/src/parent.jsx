import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

class Parent extends React.Component {
  render() {
    const dataChild1 = {
      Child1: 1,
      
    };
    const dataChild2 = {
      Child2: 2,
    };
    return (
      <div>
        <Child1 data={dataChild1} />
        <Child2 data={dataChild2} />
      </div>
    );
  }
}

export default Parent;