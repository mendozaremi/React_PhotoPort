import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';

//==============================================================================================

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    color: 'red'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '0.8rem',
    },
    '@media (max-width:599px)': {
      fontSize: '0.1rem',
    }
  },
}));
//==============================================================================================

export default function NavBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#bdbdbd"}}>
        <Toolbar>
          {/* Hamburger Menu */}
          {/* <IconButton edge="start" className={classes.menuButton}
           style={{color: "#494949"}} aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Link href="https://instagram.com/bxnkstudio">
          <InstagramIcon/>
          </Link>
          <Typography variant="h6" className={classes.title} style={{color: "#494949"}}>
            <Box letterSpacing={10}  m={1}>
              R E M I  M E N D O Z A
            </Box>
          </Typography>
          <Link href="https://mendozaremi.github.io/portfolio/">
          <Avatar alt="Remi Mendoza" src="https://i.imgur.com/3SxMPL7.png" />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
//==============================================================================================