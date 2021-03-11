/* eslint-disable no-unused-vars */

import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, clickHandler } = props;
  const handleClick = name => clickHandler;
  return (
    <button onClick={handleClick(name)} type="button">
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
