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

class SideEffect extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    console.log('SideEffect constructor');
  }

  increment = () => {
    this.setState((prevState, props) => {
      console.log('SideEffect updater', prevState);
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    console.log('SideEffect render');
    return <div onClick={this.increment}>{this.state.count}</div>;
  }
}

export default function App() {
  return (
    <StrictMode>
      <UnsafeComponent />
      <LegacyRef />
      <NewRef />
      <SideEffect />
    </StrictMode>
  );
}
