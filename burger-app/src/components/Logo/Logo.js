import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src = {BurgerLogo} alt="My Burger"></img>
    </div>
);

export default logo;