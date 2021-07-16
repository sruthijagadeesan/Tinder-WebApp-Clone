import React from 'react';
import "./Header.css";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
    const history= useHistory();
    return(
        <div className="header">
            {backButton ? (
            <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__icon" /> 
            </IconButton>           
            ) : (
                <IconButton>
            <AccountBoxIcon className="header__icon" fontSize="large" />
            </IconButton>
            )}
            
            <Link to="/">
            <img 
            className="header__logo"
            src="https://penmenpress.com/wp-content/uploads/2018/04/Tinder-Logo.png" 
            alt="tinder logo"
            />
            </Link>
            <Link to="/chat">
            <IconButton>
            <ChatIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
            

        </div>
    )
}

export default Header