/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const handleClick = buttonName => clickHandler(buttonName);
  return (
    <>
      <div>
        <Button clickHandler={handleClick('AC')} name="AC" />
        <Button clickHandler={handleClick('+/-')} name="+/-" />
        <Button clickHandler={handleClick('%')} name="%" />
        <Button clickHandler={handleClick('÷')} name="÷" />
      </div>
      <div>
        <Button clickHandler={handleClick('7')} name="7" />
        <Button clickHandler={handleClick('8')} name="8" />
        <Button clickHandler={handleClick('9')} name="9" />
        <Button clickHandler={handleClick('X')} name="X" />
      </div>
      <div>
        <Button clickHandler={handleClick('4')} name="4" />
        <Button clickHandler={handleClick('5')} name="5" />
        <Button clickHandler={handleClick('6')} name="6" />
        <Button clickHandler={handleClick('-')} name="-" />
      </div>
      <div>
        <Button clickHandler={handleClick('1')} name="1" />
        <Button clickHandler={handleClick('2')} name="2" />
        <Button clickHandler={handleClick('3')} name="3" />
        <Button clickHandler={handleClick('+')} name="+" />
      </div>
      <div>
        <Button clickHandler={handleClick('0')} name="0" />
        <Button clickHandler={handleClick('.')} name="." />
        <Button clickHandler={handleClick('=')} name="=" />
      </div>
    </>

  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
