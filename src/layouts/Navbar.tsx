// built-ins
import React, { useState } from 'react';

// material ui components
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// svgs
import { ReactComponent as ViteLogo } from '../assets/vite.svg';

const pages = ['Home', 'About'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar variant="dense" disableGutters>
          <Icon sx={{ display: 'flex', mr: 1 }} className="me-4" component={ViteLogo as React.ElementType} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              color: 'inherit',
              display: 'flex',
              flexGrow: 1,
              mr: 2,
              textDecoration: 'none',
            }}
          >
            React Typescript App
          </Typography>

          <Box sx={{ display: { md: 'flex', xs: 'none' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ color: 'white', display: 'block', my: 2 }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom',
              }}
              keepMounted
              transformOrigin={{
                horizontal: 'left',
                vertical: 'top',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { md: 'none', xs: 'block' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ color: 'white', display: 'block', my: 2, textAlign: 'right' }}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
