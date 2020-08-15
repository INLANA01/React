import React from 'react';

const withClass = (WrappedCpmponent, className) => {
    return props => (
        <div className = {className}>
            <WrappedCpmponent></WrappedCpmponent>
        </div>    
    );

};

export default withClass;