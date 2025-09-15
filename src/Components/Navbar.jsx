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
    { Text: "Home", icon: <HomeIcon />, link: "#" },
    { Text: "About", icon: <InfoIcon />, link: "#" },
    { Text: "Testimonials", icon: <CommentRoundedIcon />, link: "#" },
    { Text: "Contact", icon: <PhoneRoundedIcon />, link: "#" },
    { Text: "Cart", icon: <ShoppingCartRoundedIcon />, link: "#" },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <a href="#cart">
          <BsCart2 className="navbar-card-icon" />
        </a>
        <button className="primary-button">
          Bookings Now
        </button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.Text} disablePadding>
                <ListItemButton component="a" href={item.link}>
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

export default Navbar;
