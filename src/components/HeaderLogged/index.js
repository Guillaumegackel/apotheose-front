import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

export default function HeaderLogged() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon
            color="secondary.light"
          />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              href="/"
              component="button"
              variant="body1"
              underline="none"
            >
              Accueil
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              href="/tableau-de-bord"
              component="button"
              variant="body1"
              underline="none"
            >
              Tableau de bord
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              href="/mes-taches"
              component="button"
              variant="body1"
              underline="none"
            >
              Mes taĉhes
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              href="/classement"
              component="button"
              variant="body1"
              underline="none"
            >
              Classement
            </Link>
          </MenuItem>
        </Menu>
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: 'center',
          }}
          variant="h6"
        >
          C du Prop's
        </Typography>
        <Button
          sx={{
            color: 'white',
            border: 1,
          }}
          variant="outlined"
          href="/"
          size="small"
          color="secondary"
        >
          <RouterLink
            to="/"
            style={{ textDecoration: 'none', color: 'white' }}
          >Déconnexion
          </RouterLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
}