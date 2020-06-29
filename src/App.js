import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Album from './Components/PhotoAlbum'

const App = () =>{
  return (
    <div className="App">
      <NavBar/>
      <Album/>
    </div>
  );
}

export default App;
