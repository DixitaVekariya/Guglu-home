
import React, { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Avatar, Box, Button, Divider, Drawer, List, ListItemButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './Header.css'

const Header = () => {
    const [buyOpen, setBuyOpen] = useState(false);
    const [buyAnchor, setBuyAnchor] = useState(null);
    const [rentOpen, setRentOpen] = useState(false);
    const [rentAnchor, setRentAnchor] = useState(null);
    const [avtarAnchor, setAvtarAnchor] = useState(null);
    const [anchor, setAnchor] = useState(false);
    const buyOpenAnchor = Boolean(buyAnchor);
    const rentOpenAnchor = Boolean(rentAnchor);
    const avtarOpenAnchor = Boolean(avtarAnchor);

    const toggleDrawer = (anchor = false) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setAnchor(anchor);
    };

    const list = () => (
        <Box
            style={{ width: '28.5vh' }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                <ListItemButton style={{ display: 'flex', justifyContent: 'space-between', height: '50px', marginTop: '10px', marginBottom: '1px' }} variant="text">
                    <span style={{ fontSize: '16px' }}>My profile</span>
                </ListItemButton>
            </List>
            <Divider />
            <List>
                <ListItemButton style={{ display: 'flex', justifyContent: 'space-between', height: '48px' }} variant="text">
                    <span >Buy</span>
                    <ExpandMoreIcon style={{ color: "#00000" }} />
                </ListItemButton>
                <ListItemButton style={{ display: 'flex', justifyContent: 'space-between', height: '48px' }} variant="text">
                    <span >Rent</span>
                    <ExpandMoreIcon style={{ color: "#00000" }} />
                </ListItemButton>
                <ListItemButton style={{ height: '48px' }} variant="text">
                    <span >Pre-const</span>
                </ListItemButton>
                <ListItemButton style={{ height: '48px' }} variant="text">
                    <span >Sell</span>
                </ListItemButton>
                <ListItemButton style={{ height: '48px' }} variant="text">
                    <span >Blog</span>
                </ListItemButton>
            </List>
            <Divider />
            <List>
                <ListItemButton style={{ display: 'flex', height: '48px', gap: '10px' }} variant="text">
                    <FavoriteIcon style={{ color: 'red', width: '20px' }} />
                    <span >My Favourites</span>
                </ListItemButton>
                <ListItemButton style={{ display: 'flex', height: '48px', gap: '10px' }} variant="text">
                    <RemoveRedEyeIcon style={{ color: 'black', width: '20px' }} />
                    <span >Recently Viewed</span>
                </ListItemButton>
            </List>
            <Divider />
            <List>
                <ListItemButton style={{ height: '48px' }} variant="text">
                    <span >Account Setting</span>
                </ListItemButton>
                <ListItemButton style={{ height: '48px' }} variant="text">
                    <span >Log-out</span>
                </ListItemButton>
            </List>
        </Box>
    );


    const OnBuyButtonClick = (event) => {
        setBuyOpen(true)
        setBuyAnchor(event.currentTarget);
    }

    const BuyHandleClose = () => {
        setBuyAnchor(null);
        setBuyOpen(false)
    };

    const OnRentButtonClick = (event) => {
        setRentOpen(true)
        setRentAnchor(event.currentTarget);
    }

    const RentHandleClose = () => {
        setRentAnchor(null)
        setRentOpen(false)
    }

    const OnAvtarButtonClick = (event) => {
        setAvtarAnchor(event.currentTarget);
    }

    const AvtarHandleClose = () => {
        setAvtarAnchor(null)
    }

    return (
        <>
            <header className="headerMainConatiner">
                <div className="headerChiledContainer" >
                    <div className="logoMainContainer">
                        <img className="logo" src="https://guglu.ca/static/images/gugluLogo.png" alt="GUGLU" />
                    </div>
                    <div className="dropdownContainer">
                        <Button onClick={toggleDrawer(true)} >
                            <DehazeIcon style={{ color: "#ffff" }} />
                        </Button>
                        <Drawer
                            anchor={"left"}
                            open={anchor}
                            onClose={toggleDrawer(false)}
                        >
                            {list()}
                        </Drawer>

                    </div>

                    <div className="btnMainContainer">
                        <Button className="buyBtnContainer" variant="text" onClick={OnBuyButtonClick}>
                            <span className="buyText">BUY</span>
                            {buyOpen ? <ExpandLessIcon style={{ color: "#ffff" }} /> : <ExpandMoreIcon style={{ color: "#ffff" }} />}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={buyAnchor}
                            open={buyOpenAnchor}
                            onClose={BuyHandleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={BuyHandleClose}>Profile</MenuItem>
                            <MenuItem onClick={BuyHandleClose}>My account</MenuItem>
                            <MenuItem onClick={BuyHandleClose}>Logout</MenuItem>
                        </Menu>
                        <Button className="buyBtnContainer" variant="text" onClick={OnRentButtonClick}>
                            <span className="buyText">RENT</span>
                            {rentOpen ? <ExpandLessIcon style={{ color: "#ffff" }} /> : <ExpandMoreIcon style={{ color: "#ffff" }} />}
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={rentAnchor}
                            open={rentOpenAnchor}
                            onClose={RentHandleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={RentHandleClose}>A Logout</MenuItem>
                            <MenuItem onClick={RentHandleClose}>B account</MenuItem>
                            <MenuItem onClick={RentHandleClose}>C Profile</MenuItem>
                        </Menu>
                        <Button className="buyBtnContainer" variant="text">
                            <span className="buyText">PRE_CONST</span>
                        </Button>
                        <Button className="buyBtnContainer" variant="text">
                            <span className="buyText">SELL</span>
                        </Button>
                        <Button className="buyBtnContainer" variant="text">
                            <span className="buyText">BLOG</span>
                        </Button>
                        <Button onClick={OnAvtarButtonClick}>
                            <Avatar style={{ width: 20, height: 20 }} />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={avtarAnchor}
                            open={avtarOpenAnchor}
                            onClose={AvtarHandleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <List>
                                <ListItemButton onClick={AvtarHandleClose} style={{ display: 'flex', justifyContent: 'space-between', height: '50px', marginBottom: '1px' }} variant="text">
                                    <span style={{ fontSize: '16px' }}>My profile</span>
                                </ListItemButton>
                            </List>

                            <Divider />
                            <List>
                                <ListItemButton onClick={AvtarHandleClose} style={{ display: 'flex', height: '48px', gap: '10px' }} variant="text">
                                    <FavoriteIcon style={{ color: 'red', width: '20px' }} />
                                    <span >My Favourites</span>
                                </ListItemButton>
                                <ListItemButton onClick={AvtarHandleClose} style={{ display: 'flex', height: '48px', gap: '10px' }} variant="text">
                                    <BookmarkIcon style={{ color: '#0F2E1D', width: '20px' }} />
                                    <span >Saved Changes</span>
                                </ListItemButton>
                                <ListItemButton onClick={AvtarHandleClose} style={{ display: 'flex', height: '48px', gap: '10px' }} variant="text">
                                    <RemoveRedEyeIcon style={{ color: '#0F2E1D', width: '20px' }} />
                                    <span >Recently Viewed</span>
                                </ListItemButton>
                            </List>
                            <Divider />
                            <List>
                                <ListItemButton onClick={AvtarHandleClose} style={{ height: '48px' }} variant="text">
                                    <span >Account Setting</span>
                                </ListItemButton>
                                <ListItemButton onClick={AvtarHandleClose} style={{ height: '48px' }} variant="text">
                                    <span >Log-out</span>
                                </ListItemButton>
                            </List>
                        </Menu>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;