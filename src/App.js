import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Album from './Components/PhotoAlbum'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 gridContainer: {
   paddingLeft: '20px',
   paddingRight: '20px',
   paddingTop: '100px'
 }
});

const App = () =>{
  const classes = useStyles();
  return (
    <div className="App">
       <NavBar/>
      {/* <Grid container spacing={4} className={classes.gridContainer}>
        <Grid tem xs={12} sm={6} md={4}> */}
          <Album/>
        {/* </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
