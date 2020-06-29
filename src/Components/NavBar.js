import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'red'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

// #8d8d8d // dark grey

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#bdbdbd"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} style={{color: "#494949"}} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h7"  className={classes.title} style={{color: "#494949"}}>
            <Box letterSpacing={10} m={1}>
              R E M I M E N D O Z A
            </Box>
          </Typography>
          <Button style={{color: "#494949"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
