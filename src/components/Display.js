import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <p>
      {result}
    </p>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
