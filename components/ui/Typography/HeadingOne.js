import React from 'react';
import PropTypes from 'prop-types'

const HeadingOne = ({className, children}) => {

    return(
        <P className = {`${className} font-display text-4xl text-white`}>{children}</P>
    );
};

HeadingOne.PropTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

HeadingOne.defaultProps = {
    className:"",
};

export default HeadingOne;