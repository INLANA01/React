import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p> The user is: {props.userName}</p>
            <p>{props.paragraph}</p>
        </div>
    );

}; 

export default userOutput;