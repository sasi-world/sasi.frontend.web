import React from 'react';
import PropTypes from 'prop-types';


const Body =({className, children}) => {

    return (
        <p className ={`${className} font-display`}>{children}</p>
    )
}

Body.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Body.defaultProps = {
    className: "",
};

export default Body;