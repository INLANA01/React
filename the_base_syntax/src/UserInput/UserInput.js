import React from 'react';

const userInput = (props) =>{
    return (
        <div className="UserInput">
            <p>I'm a user!</p>
            <input type="text" onChange={props.changed}/>
        </div>
    );
    };
    
    export default userInput;