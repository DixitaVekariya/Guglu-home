import React, { useState } from "react";
import './Header.css'
import { Avatar, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Header = () => {
    const [buyOpen, setBuyOpen] = useState(true);
    const [rentOpen, setRentOpen] = useState(true);


    const OnDropdownMenuClick = () => {
       alert("Add Dropdown Menu");
    }

    const OnBuyButtonClick = () => {
        setBuyOpen(!buyOpen)
    }
    const OnRentButtonClick = () => {
        setRentOpen(!rentOpen)
    }

    return (
        <>
            <header className="headerMainConatiner">
                <div className="headerChiledContainer"  >
                    <div className="logoMainContainer">
                            <img className="logo" src="https://guglu.ca/static/images/gugluLogo.png"  alt="GUGLU"/>
                    </div>
                    <div className="dropdownContainer">
                        <Button onClick={OnDropdownMenuClick} >
                            <DehazeIcon style={{ color: "#ffff" }} />
                        </Button>

                    </div>
                    <div className="btnMainContainer">
                        <Button className="buyBtnContainer" variant="text" onClick={OnBuyButtonClick}>
                            <span className="buyText">BUY</span>
                            {buyOpen ? <ExpandMoreIcon style={{ color: "#ffff" }}/> : <ExpandLessIcon style={{ color: "#ffff" }}/>}
                        </Button>
                        <Button className="buyBtnContainer" variant="text" onClick={OnRentButtonClick}>
                            <span className="buyText">RENT</span>
                            {rentOpen ? <ExpandMoreIcon style={{ color: "#ffff" }}/> : <ExpandLessIcon style={{ color: "#ffff" }}/>}
                        </Button>
                        <Button className="buyBtnContainer" variant="text">
                            <span className="buyText">PRE_CONST</span>
                        </Button>
                        <Button className="buyBtnContainer" variant="text">
                            <span className="buyText">SELL</span>
                        </Button>
                        <Button className="buyBtnContainer" variant="text">
                            <span className="buyText">BLOG</span>
                        </Button>
                        <Button>
                            <Avatar style={{ width: 20, height: 20 }} />
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;