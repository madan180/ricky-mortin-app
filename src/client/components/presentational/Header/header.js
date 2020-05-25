import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './header.style';
import SearchBox from '../SearchBox/searchBox';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(null);

  const handleClick = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(null);
  };

  return (
    <HeaderWrapper>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={menuOpen}
            keepMounted
            open={Boolean(menuOpen)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/rick-morty">Shows</Link>
            </MenuItem>
          </Menu>
          <Typography className="app-title" variant="h6" noWrap>
            Rick Morty
          </Typography>
          <div className="search-header-wrapper">
            <SearchBox />
            <Button
              onClick={() => console.log('Clicked')}
              className="search-btn"
              variant="contained"
              color="primary"
            >
              <SearchIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
};

export default Header;
