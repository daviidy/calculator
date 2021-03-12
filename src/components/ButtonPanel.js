/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  return (
    <div className="main">
      <div>
        <Button clickHandler={clickHandler} name="AC" />
        <Button clickHandler={clickHandler} name="+/-" />
        <Button clickHandler={clickHandler} name="%" />
        <Button clickHandler={clickHandler} name="÷" />
      </div>
      <div>
        <Button clickHandler={clickHandler} name="7" />
        <Button clickHandler={clickHandler} name="8" />
        <Button clickHandler={clickHandler} name="9" />
        <Button clickHandler={clickHandler} name="X" />
      </div>
      <div>
        <Button clickHandler={clickHandler} name="4" />
        <Button clickHandler={clickHandler} name="5" />
        <Button clickHandler={clickHandler} name="6" />
        <Button clickHandler={clickHandler} name="-" />
      </div>
      <div>
        <Button clickHandler={clickHandler} name="1" />
        <Button clickHandler={clickHandler} name="2" />
        <Button clickHandler={clickHandler} name="3" />
        <Button clickHandler={clickHandler} name="+" />
      </div>
      <Button clickHandler={clickHandler} name="0" />
      <Button clickHandler={clickHandler} name="=" />
      <Button clickHandler={clickHandler} name="." />
    </div>

  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
