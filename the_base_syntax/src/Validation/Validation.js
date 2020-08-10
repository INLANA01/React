import React from 'react';

const validation = (props) =>{
    let validationMessage = '';
    if (props.inputLength < 5)
    {
        validationMessage = "text too short";
    }
    else{
        validationMessage = "text long enough";
    }


    return (
        <div className="Validation">
            <p>{validationMessage}</p>
        </div>
    );
    };
    
    export default validation;