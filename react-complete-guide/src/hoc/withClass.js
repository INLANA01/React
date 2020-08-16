import React from 'react';

const withClass = (WrappedCpmponent, className) => {
    return props => (
        <div className = {className}>
            <WrappedCpmponent {...props} ></WrappedCpmponent>
        </div>    
    );

};

export default withClass;