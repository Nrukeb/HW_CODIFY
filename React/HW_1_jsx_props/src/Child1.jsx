import React from 'react';

class Child1 extends React.Component {
  render() {
   const { Child1 } = this.props.data;

    return (
      <div>
      {Child1}
      </div>
    );
  }
}

export default Child1;