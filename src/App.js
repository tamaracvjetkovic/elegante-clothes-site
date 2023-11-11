import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MainLogo from './components/MainLogo';
import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

function App() {

  const { data: blogs, loaded, error } = useFetch("http://localhost:8000/blogs");

  if (loaded) {
    return (
      <div className = "App">
        <Navbar/>
        <MainLogo/>
        <Home blogs = { blogs } />
      </div> 
    );
  } else if (error) {
      return (
        <div> { error } </div>
      );
    } else {
    return (
      <div style = {{ fontSize: "40px", display: "flex", backgroundColor: "#cbc163", height: "100vh", alignItems: "center", justifyContent: "center" }}> Loading... </div> 
    );
  }
}


export default App;





