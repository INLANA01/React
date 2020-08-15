import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    useEffect(() => {

        console.log('[Cockpit.js] useEffect');
        //Http Request
        const timer = setTimeout(()=>{
            alert('Saved Data to Cloud!');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] clean up work in Use Effect')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js clean up work in 2nd useEffect]');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
    } 
    if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
    } 


    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className = {assignedClasses.join(' ')}>This is working fine</p>
            <button 
            className={btnClass}
                onClick={props.clicked}>Switch Name
            </button>
        </div>
    );
}

export default React.memo(cockpit);
