import React from 'react';

class Child2 extends React.Component {
  render() {
    const { Child2 } = this.props.data;

    return (
      <div>
        {Child2}
      </div>
    );
  }
}

export default Child2;