/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const result = calculate(this.state, buttonName);
    this.setState(state => ({
      total: result.total,
      next: result.next,
      operation: result.operation,
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    console.log('test');
    return (
      <>
        <Display result={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
