import React from "react";
import logo from "./sasi-logo.svg";
import PropTypes from "prop-types";

const Logo = ({ className = "", onClick, children, ...props }) => {
  return (
    <div>
      <img className={`${className}`} height="200px" src={logo} />
    </div>
  );
};

const propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

Logo.PropTypes = propTypes;

export default Logo;
