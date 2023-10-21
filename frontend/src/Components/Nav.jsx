import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AppsIcon from '@mui/icons-material/Apps';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';

const pages = []; // Define the pages you want in the navigation menu
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const settings1 = ['Calendar', 'Reminders', 'Diary','History', 'Share', 'Career Guidance'];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav1, setAnchorElNav1] = React.useState(null);
  const [anchorElUser1, setAnchorElUser1] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenNavMenu1 = (event) => {
    setAnchorElNav1(event.currentTarget);
  };
  const handleOpenUserMenu1 = (event) => {
    setAnchorElUser1(event.currentTarget);
  };

  const handleCloseNavMenu1 = () => {
    setAnchorElNav1(null);
  };

  const handleCloseUserMenu1 = () => {
    setAnchorElUser1(null);
  };

  return (
    <AppBar position="static">
      <div style={{ width: "100vw", padding: "0 20px" ,backgroundColor:"black",borderBottom:".5px", borderBottomColor:"white",borderBottomStyle:"groove"}}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <h4 style={{letterSpacing:"0px",fontStyle:"helvetica"}}>
              SaheliConnect
            </h4>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav1}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav1)}
              onClose={handleCloseNavMenu1}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu1}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 3 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <div style={{ display: "flex" }}>
            <Box style={{ width: "3vw", zIndex: "9" ,display:'flex',alignItems:"center"}}>
              <AppsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 3 }} />
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu1} sx={{ p: 0 }}>
               < AppsIcon style={{color:"white"}}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar-user"
                anchorEl={anchorElUser1}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser1)}
                onClose={handleCloseUserMenu1}
              >
                {settings1.map((setting1) => (
                  <MenuItem key={setting1} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting1}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box style={{ width: "4vw", zIndex: "9" }}>
              <AppsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 3 }} />
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar-user"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Nav;
