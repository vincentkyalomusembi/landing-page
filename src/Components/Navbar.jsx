import React, { useState } from 'react';
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      Text: "Home",
      icon: <HomeIcon />,
    },
    {
      Text: "About",
      icon: <InfoIcon />,
    },
    {
      Text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      Text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      Text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className='navbar-card-icon' />
        </a>
        <button className='primary-button'>
          Bookings Now
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box 
        sx={{width: 250}}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.Text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.Text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar