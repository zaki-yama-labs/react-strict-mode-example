/* eslint-disable react/no-multi-comp */
import React, { Component, StrictMode } from 'react';

class UnsafeComponent extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps');
  }

  render() {
    return <div>Unsafe Component</div>;
  }
}

export default function App() {
  return (
    <StrictMode>
      <UnsafeComponent />
    </StrictMode>
  );
}
