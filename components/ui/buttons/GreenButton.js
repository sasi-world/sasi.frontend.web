import React, {children} from 'react';

const GreenButton = ({children}) => {
    
    
    return(
        <button className = "cursor pointer rounded-lg shadow-2xl py-2 bg-gradient-to-r from-gradient-three-colorA to-gradient-three-colorB ">{children}</button>
    );    
}

export default GreenButton;

//pull from development
// commit regularly 
//for every compomnent make a pull request 