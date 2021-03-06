import React from "react";
import mealsImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props =>{
    return <React.Fragment>
        <header className={classes.header}>
            <h1 >React Meals</h1>
            <HeaderCartButton/>
            
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="Tavolo con cibo"></img>
        </div>
    </React.Fragment>
};

export default Header;