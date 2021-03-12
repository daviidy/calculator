/* eslint-disable react/no-access-state-in-setstate */
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
      live: null,
      reset: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    const {
      total,
      live,
    } = this.state;
    return (
      <>
        <div className="container">
          <div className="calculator s_flex">
            <Display
              result={total}
              live={live}
            />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
