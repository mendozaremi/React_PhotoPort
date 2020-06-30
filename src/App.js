import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Album from './Components/PhotoAlbum'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';


const App = () =>{
  return (
    <div className="App">
       <NavBar/>
          <Album/>
    </div>
  );
}

export default App;
