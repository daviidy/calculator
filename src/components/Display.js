/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result, live } = props;
  return (
    <div className="screen">
      <div className="cal_formula" role="cal_formula">{live}</div>
      <div className="cal_total" role="cal_total">{result}</div>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
  live: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  live: '0',
};

export default Display;
