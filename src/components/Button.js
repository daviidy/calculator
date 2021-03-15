/* eslint-disable no-unused-vars */

import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, clickHandler } = props;
  const handleClick = () => clickHandler(name);
  return (
    <button
      className={name === '=' ? 'equal' : ''}
      onClick={handleClick}
      type="button"
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
