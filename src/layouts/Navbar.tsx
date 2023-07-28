// built-ins
import { Link } from '@tanstack/router';
import React, { useState } from 'react';

// icons
import MenuIcon from '@mui/icons-material/Menu';

// material ui components
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

// enums
import Routes from '~constants/routes.enum';

// svgs
import { ReactComponent as ViteLogo } from '~assets/vite.svg';

const links: Array<[Routes, string]> = [
  [Routes.HOME, 'Home'],
  [Routes.ABOUT, 'About'],
];

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
            href={Routes.HOME}
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

          <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
            {links.map(([to, label]) => (
              <Button key={label} sx={{ color: '#fff' }}>
                <Link to={to}>{label}</Link>
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
              {links.map(([to, label]) => (
                <MenuItem key={label} onClick={handleCloseNavMenu} sx={{ color: 'white', display: 'block', textAlign: 'right' }}>
                  <Link to={to}>{label}</Link>
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
