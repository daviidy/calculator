/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../index.css';

const App = props => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    live: null,
    reset: null,
  });

  const handleClick = buttonName => {
    setState(calculate(state, buttonName));
  };

  const {
    total,
    live,
  } = state;

  return (
    <>
      <div className="container">
        <div className="calculator s_flex">
          <Display
            result={total}
            live={live}
          />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};

export default App;
