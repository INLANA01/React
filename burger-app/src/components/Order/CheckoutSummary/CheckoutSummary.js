import React, {Component} from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSumary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>Hope it tastes yummm!</h1>
            <div style ={{width: '100%',margin:'auto'}}>
                <Burger ingredients = {props.ingredients}></Burger>
            </div>
            <Button btnType = "Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSumary;