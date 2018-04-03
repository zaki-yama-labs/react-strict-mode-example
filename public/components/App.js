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

class LegacyRef extends Component {
  handleClick = () => {
    const name = this.refs.name.value;
    console.log('LegacyRef', name);
  };

  render() {
    return (
      <div>
        <input ref="name" />
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

class NewRef extends Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
  }

  handleClick = () => {
    const name = this.nameRef.current.value;
    console.log('NewRef', name);
  };

  render() {
    return (
      <div>
        <input ref={this.nameRef} />
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}

export default function App() {
  return (
    <StrictMode>
      <UnsafeComponent />
      <LegacyRef />
      <NewRef />
    </StrictMode>
  );
}
